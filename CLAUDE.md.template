# CLAUDE.md — ShotStop

> Do not modify this file. That is exclusively the developer's responsibility.

## Project Context
ShotStop is a platform for emerging comic and manga creators. Creators publish
oneshots (short-form, self-contained stories) alongside supplementary material —
sketches, interviews, and video — to build an audience and grow within a community.

## Stack
| Layer | Technology |
|---|---|
| Frontend | React |
| Backend API | Node.js / Express |
| Database | PostgreSQL |
| Auth | Auth.js (OAuth) · JWT (planned) |
| Query Builder | Kysely |
| Language | JavaScript · TypeScript (shared lib) |
| Proxy | Nginx |
| Containerization | Docker |

## Solution Structure
    ShotStop/
    ├── api/                    # Core API service
    │   └── src/
    │       ├── controllers/
    │       ├── routes/
    │       └── services/
    ├── auth/                   # Auth service
    │   └── src/
    │       └── routes/
    ├── web/                    # React frontend
    ├── lib/                    # Shared middleware and utilities
    │   ├── middleware/
    │   └── utils/
    ├── proxy/                  # Nginx reverse proxy config
    ├── database/               # Migrations, seeds, schema
    ├── docker-compose.dev.yml
    └── docker-compose.prod.yml

## Architecture Decisions
- Microservices: `api`, `auth`, and `web` run as independent services behind an Nginx reverse proxy.
- RESTful API handles all CRUD operations. MVC pattern: controllers handle req/res only — business logic belongs in services.
- Auth is handled by a dedicated `auth` service. Currently OAuth via Auth.js; JWT integration planned.
- Kysely is the query builder. No full ORM — schema ownership stays with raw SQL migrations.
- PostgreSQL is the single source of truth. No secondary persistence layer.
- Shared code (middleware, DB utilities) lives in `lib/` and is consumed across services.
- Docker used for consistent local development and deployment environments.

## API Shape
    Auth:      POST /api/auth/register, /api/auth/login
    Users:     GET/PUT /api/users/:id
               GET /api/users/:id/oneshots
               GET /api/users/:id/posts
    Oneshots:  GET/POST /api/oneshots
               GET/PUT/DELETE /api/oneshots/:id
               GET /api/oneshots/:id/pages
               GET/POST /api/oneshots/:id/comments
    Posts:     GET/POST /api/posts
               GET/PUT/DELETE /api/posts/:id
               GET/POST /api/posts/:id/comments
    Feed:      GET /api/feed
    Bookmarks: GET/POST/DELETE /api/bookmarks
    Analytics: GET /api/analytics/oneshots/:id

## Code Style
- Async/await throughout — no callbacks
- Kysely for query building — no raw string queries
- Parameterized queries only — no string interpolation in SQL
- No full ORM — schema ownership stays at the migration level
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
- Feature branch naming: `[category]/[ticket-id]-[short-description]`
  Omit ticket ID if none is present.
  Examples: `feature/login-system`, `bugfix/header-styling`, `ai/claude-filesystem-touchup`
- PR format: Summary / Changes / Verification
- Commit format: `<type>(<scope>): <summary>`
