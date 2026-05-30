## What I would improve with two more weeks

I would integrate a real AI provider with a fallback to the mock if it goes down. I would add proper test coverage for the API routes and the worker. I would build out role-based access so agents have a different view from admins. I would add retry logic with exponential backoff for failed classification jobs. And I would add idempotency keys to prevent duplicate requests from webhook retries.
