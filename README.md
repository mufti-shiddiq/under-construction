# Under Construction (env-driven)

This project serves a simple under-construction page using a small Node.js server that injects environment variables into an HTML template at runtime.

Files of interest:

- [index.html](index.html) — HTML template with `{{SITE_TITLE}}` and `{{SITE_MESSAGE}}` placeholders.
- [server.js](server.js) — Express server that injects environment variables into the template.
- [package.json](package.json) — start script and dependencies.
- [.env.example](.env.example) — example environment variables.

Quick local run

```bash
cd /Users/mufti/Documents/Project/under-construction
npm install
cp .env.example .env
npm start
# open http://localhost:3000
```

Environment variables

- `SITE_TITLE` — page title and main heading.
- `SITE_MESSAGE` — paragraph text shown under the heading.
- `PORT` — optional server port (default: 3000).

Deploying to Coolify

Recommended: provide a `Dockerfile` for full control and reproducible runtime. Example:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
```

Alternative options:

- **Nixpacks**: choose Nixpacks in Coolify, set the start command to `npm start`, and add the environment variables via the Coolify UI. Simpler, but with less build control than a Dockerfile.
- **Static**: only appropriate if you remove `server.js` and pre-render static HTML. Not recommended for runtime env-driven content.

In Coolify set `SITE_TITLE`, `SITE_MESSAGE`, and optionally `PORT` in the app environment settings.

License

MIT.
