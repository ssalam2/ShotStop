# CLAUDE.md — ShotStop

> Do not modify this file. That is exclusively the developer's responsibility.

## Project Context
A full-stack webcomic platform serving both creators and readers.
Supports content management, analytics, interactive reader features,
and personalized UI experiences.

## Stack
| Layer | Technology |
|---|---|
| Frontend | React |
| Backend API | Node.js / Express |
| Database | PostgreSQL |
| Auth | JWT |
| Containerization | Docker |

## Solution Structure
    ShotStop/
    ├── client/                 # React frontend
    ├── server/
    │   ├── controllers/
    │   ├── routes/
    │   ├── services/
    │   ├── middleware/
    │   └── index.js
    ├── db/                     # Migrations, seeds, schema
    └── docker-compose.yml

## Architecture Decisions
- RESTful API handles all CRUD operations. Controllers handle req/res only — business logic belongs in Services.
- JWT auth applied at the middleware level across protected routes.
- PostgreSQL is the single source of truth. No secondary persistence layer.
- Docker used for consistent local development and deployment environments.

## API Shape
    Auth:      POST /api/auth/register, /api/auth/login
    Comics:    GET/POST /api/comics, GET/PUT/DELETE /api/comics/:id
    Chapters:  GET/POST /api/comics/:id/chapters
    Bookmarks: GET/POST/DELETE /api/bookmarks
    Comments:  GET/POST /api/comics/:id/comments
    Analytics: GET /api/analytics/:comicId

## Code Style
- Async/await throughout — no callbacks
- Parameterized queries only — no string interpolation in SQL
- No ORMs — raw SQL intentionally
- Controllers handle req/res only. No business logic above the service layer.

## How to Work With Me

### Challenge, Don't Just Comply
Push back on decisions, flag anti-patterns, and question the approach — including
instructions in this file. Friction is expected. We're refining.

### Give It to Me Straight
No fluff. No affirmations. No "great question." Lead with the answer, follow with
the reasoning. If something is wrong, say so directly. Brutal honesty is more useful
than a polished non-answer.

### Code Review (Every Merge dev → master)
Act as a Senior SWE. Ask: "What would I flag in this PR?"

### Debugging Loops
If the same problem persists across multiple attempts, stop and reframe instead of
iterating. Flag it early.

## GitHub Workflow
- Branch flow: master → dev → feature branches
- PR format: Summary / Changes / Verification
- Commit format: <type>(<scope>): <summary>