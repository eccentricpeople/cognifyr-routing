# API Documentation

The Cognifyr backend exposes a REST API on port 3000. All protected routes require a Bearer token in the Authorization header. You get this token by logging in via the auth endpoint.

---

## Authentication

### POST /auth/login

This is how you get a token. Send your email and password, get back a JWT that lasts 24 hours. Use this token in the Authorization header for all other requests.

Request body:
```json
{
  "email": "admin@cognifyr.com",
  "password": "admin123"
}
```

Response:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "uuid",
    "email": "admin@cognifyr.com",
    "role": "ADMIN"
  }
}
```

Rate limited to 10 requests per minute.

---

## Requests

### POST /requests

Creates a new customer request. This endpoint responds immediately — it does not wait for AI classification. The classification happens in the background and the dashboard updates live when it is done.

No auth required (simulates a public-facing intake form).

Request body:
```json
{
  "message": "I cannot access my dashboard after payment",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "sourceChannel": "website"
}
```

Only `message` is required. `sourceChannel` defaults to `api` if not provided.

Response (201):
```json
{
  "id": "uuid",
  "message": "I cannot access my dashboard after payment",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "sourceChannel": "website",
  "status": "QUEUED",
  "categorySnapshot": null,
  "prioritySnapshot": null,
  "createdAt": "2026-05-30T09:11:29.020Z",
  "updatedAt": "2026-05-30T09:11:29.020Z"
}
```

---

### GET /requests

Returns a paginated list of requests. Supports filtering by status, priority, and category. Requires auth.

Query parameters:
```
status       NEW | QUEUED | CLASSIFYING | CLASSIFIED | IN_PROGRESS | RESOLVED | FAILED
priority     LOW | MEDIUM | HIGH
category     SALES | SUPPORT | URGENT | SPAM | OTHER
page         default 1
limit        default 20
```

Example: `GET /requests?status=CLASSIFIED&priority=HIGH&page=1`

Response:
```json
{
  "requests": [...],
  "total": 42,
  "page": 1,
  "limit": 20
}
```

---

### GET /requests/:id

Returns the full detail of a single request including the AI classification, internal notes, and event timeline. Requires auth.

Response:
```json
{
  "id": "uuid",
  "message": "I cannot access my dashboard after payment",
  "customerName": "John Doe",
  "customerEmail": "john@example.com",
  "sourceChannel": "website",
  "status": "CLASSIFIED",
  "categorySnapshot": "SUPPORT",
  "prioritySnapshot": "HIGH",
  "createdAt": "2026-05-30T09:11:29.020Z",
  "classification": {
    "id": "uuid",
    "provider": "mock",
    "category": "SUPPORT",
    "priority": "HIGH",
    "summary": "Customer cannot access dashboard after payment issue.",
    "confidence": 0.86,
    "reason": "Message contains payment and access keywords indicating high priority support.",
    "error": null,
    "createdAt": "2026-05-30T09:11:30.020Z"
  },
  "notes": [
    {
      "id": "uuid",
      "body": "Contacted customer by phone",
      "createdAt": "2026-05-30T09:15:00.000Z",
      "author": { "email": "admin@cognifyr.com" }
    }
  ],
  "events": [
    {
      "id": "uuid",
      "eventType": "CREATED",
      "oldValue": null,
      "newValue": "QUEUED",
      "createdAt": "2026-05-30T09:11:29.118Z"
    },
    {
      "id": "uuid",
      "eventType": "CLASSIFIED",
      "oldValue": null,
      "newValue": "support",
      "createdAt": "2026-05-30T09:11:30.294Z"
    }
  ]
}
```

---

### PATCH /requests/:id/status

Updates the status of a request. Every status change is logged automatically in the event timeline with the actor who made the change. Requires auth.

Request body:
```json
{
  "status": "IN_PROGRESS"
}
```

Valid statuses: `NEW`, `QUEUED`, `CLASSIFYING`, `CLASSIFIED`, `IN_PROGRESS`, `RESOLVED`, `FAILED`

Response: the updated request object.

---

### POST /requests/:id/notes

Adds an internal note to a request. The note is tied to the authenticated user who created it. Requires auth.

Request body:
```json
{
  "body": "Spoke to customer on the phone. Escalating to billing team."
}
```

Response (201):
```json
{
  "id": "uuid",
  "body": "Spoke to customer on the phone. Escalating to billing team.",
  "createdAt": "2026-05-30T10:00:00.000Z",
  "author": { "email": "admin@cognifyr.com" }
}
```

---

## Webhooks

### POST /webhooks/inbound

Simulates an inbound message from an external channel like WhatsApp or email. In production this endpoint would verify an HMAC-SHA256 signature from the `x-webhook-signature` header before processing. The signature verification code is included as a comment in the source.

No auth required (uses webhook signature validation instead).

Request body:
```json
{
  "message": "URGENT: Our entire team cannot login since this morning",
  "customerName": "Jane Smith",
  "customerEmail": "jane@company.com",
  "source": "whatsapp"
}
```

Response:
```json
{
  "received": true,
  "requestId": "uuid"
}
```

---

## Realtime Events

The server emits Socket.io events that the dashboard listens to. Connect to the server with the Socket.io client to receive live updates.

`request:created` — emitted when a new request is created. Payload: `{ requestId, status }`

`request:updated` — emitted when a request status changes or classification completes. Payload: `{ requestId, status }`

---

## Error responses

All errors follow the same shape:

```json
{
  "error": "Description of what went wrong"
}
```

401 means missing or invalid token. 400 means validation failed and the error field will contain details about which fields were wrong. 404 means the resource does not exist. 500 means something went wrong on the server.

