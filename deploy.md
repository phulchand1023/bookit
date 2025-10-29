# BookIt Cloudflare Deployment Guide

## Prerequisites
1. Install Wrangler CLI: `npm install -g wrangler`
2. Login to Cloudflare: `wrangler login`

## Backend Deployment (Cloudflare Workers)

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Deploy to Cloudflare Workers:**
   ```bash
   npm run wrangler:deploy
   ```

3. **Set environment variables:**
   ```bash
   wrangler secret put DATABASE_URL
   wrangler secret put JWT_SECRET
   ```

## Frontend Deployment (Cloudflare Pages)

1. **Install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

2. **Update API URL:**
   Edit `src/utils/api.ts`:
   ```typescript
   const API_BASE_URL = 'https://bookit-backend.your-subdomain.workers.dev/api';
   ```

3. **Deploy to Cloudflare Pages:**
   ```bash
   npm run deploy
   ```

## Database Setup (Neon.tech)

1. Create account at https://neon.tech
2. Create PostgreSQL database
3. Copy connection string
4. Set as environment variable:
   ```bash
   wrangler secret put DATABASE_URL
   # Paste your Neon database URL
   ```

## Quick Deploy Commands

```bash
# Backend
cd backend
npm install
npm run wrangler:deploy

# Frontend  
cd frontend
npm install
npm run deploy
```

## Environment Variables

Set these in Cloudflare Workers dashboard or via CLI:

```bash
wrangler secret put DATABASE_URL
wrangler secret put JWT_SECRET
```

## URLs After Deployment

- **Backend API:** `https://bookit-backend.your-subdomain.workers.dev`
- **Frontend:** `https://bookit-frontend.pages.dev`

## Troubleshooting

1. **CORS Issues:** Already configured in `src/index.js`
2. **Database Connection:** Use Neon.tech serverless PostgreSQL
3. **Environment Variables:** Set via `wrangler secret put`

## Alternative: One-Click Deploy

Use Cloudflare's GitHub integration:
1. Push code to GitHub
2. Connect repository in Cloudflare Pages
3. Auto-deploy on commits