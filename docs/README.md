# Cognifyr AI Workflow Ops Backend

This is my submission for the Cognifyr internship assessment. I built a mini AI-powered customer request routing system. It takes in customer messages, classifies them using an AI workflow, assigns a priority, and shows everything in a realtime admin dashboard.

---

## What it does

When a customer message comes in through the API, a form, or a webhook, it gets saved immediately and a background job is queued. A separate worker process picks up the job, runs it through the AI classification layer, and saves the result. The admin dashboard updates live without any page refresh using Socket.io. Admins can then filter requests, view the full detail, add internal notes, and update the status.

---

## How to run it locally

You need Node.js 18+ and Docker Desktop installed.

First clone the repo and start the database and Redis:

```bash
git clone https://github.com/yourusername/cognifyr-routing.git
cd cognifyr-routing
docker compose up -d
```

Then set up the backend:

```bash
cd backend
npm install
cp .env.example .env
npx prisma migrate deploy
npx prisma db seed
npm run dev
```

The seed creates an admin account with email `admin@cognifyr.com` and password `admin123`.

In a second terminal, start the background worker:

```bash
cd backend
npx ts-node src/workers/classificationWorker.ts
```

In a third terminal, start the frontend:

```bash
cd frontend
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Environment variables

Copy `.env.example` to `.env` and fill in the values. Never commit your `.env` file.

```
DATABASE_URL        PostgreSQL connection string
REDIS_URL           Redis connection string
JWT_SECRET          Secret key for signing JWTs
WEBHOOK_SECRET      Secret for validating inbound webhooks
PORT                Port for the backend server (default 3000)
```

---

## Architecture

The backend is an Express server that handles all the API routes. When a request comes in via POST /requests, it gets saved to PostgreSQL immediately and a BullMQ job is added to a Redis queue. The API responds right away without waiting for the AI.

The worker runs as a completely separate process. It listens for jobs on the queue, calls the AI provider, and saves the classification result to its own table in the database. Once that is done it emits a Socket.io event and the admin dashboard updates live.

The frontend is a React app that connects to the backend via REST for data and Socket.io for live updates.

---

## Database schema

There are five tables. Users stores admin and agent accounts with hashed passwords. CustomerRequests is the main table with the original message, source channel, and current status. AiClassifications stores the AI output separately from the request. RequestEvents is an append-only audit log that records every status change and classification. InternalNotes stores notes added by admins on a request.

The reason AI classifications are in a separate table is that classification can fail, be retried, or be replaced without touching the original request. It also means we can store the full raw output and error state cleanly, and track which provider was used.

---

## AI workflow

The AI layer lives in `src/ai/mockProvider.ts` and implements a single interface with a `classify` function. This makes it easy to swap in a real provider like OpenAI or Gemini by just replacing that one file without touching any other code.

The mock provider uses keyword matching to detect category and priority. It returns a structured JSON object with category, priority, summary, confidence, and reason. The output is always stored in the `ai_classifications` table separately.

When integrating a real AI provider, user messages are always passed as data in the user turn, never injected into the system prompt. This prevents prompt injection attacks where a user could try to manipulate the classification by writing something like "ignore previous instructions".

---

## Known limitations

The AI is a mock using keyword matching, not a real model. The worker runs as a manual process and would need PM2 or Docker to manage it properly in production. There is no role-based UI yet even though the role field exists in the database. JWT tokens expire after 24 hours with no refresh mechanism. Socket.io broadcasts to all clients rather than scoped rooms.

---


