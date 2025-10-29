# BookIt Deployment Instructions

## Quick Deploy Steps

### 1. Database Setup (Neon.tech)
1. Go to https://neon.tech and create account
2. Create new PostgreSQL database
3. Copy connection string

### 2. Backend Deployment (Railway)
1. Go to https://railway.app
2. Connect GitHub repository
3. Select backend folder
4. Add environment variables:
   - `DATABASE_URL`: Your Neon database URL
   - `JWT_SECRET`: SecretKeyIsSecret
   - `PORT`: 5001
5. Deploy

### 3. Frontend Deployment (Vercel)
1. Go to https://vercel.com
2. Import GitHub repository
3. Select frontend folder
4. Update API URL in `src/utils/api.ts` with Railway backend URL
5. Deploy

### 4. Database Migration
Run in Railway console or locally:
```bash
npx prisma migrate deploy
npx prisma db seed
```

## Alternative Platforms

### Backend Options:
- Railway.app (Recommended)
- Render.com
- Heroku
- Vercel

### Frontend Options:
- Vercel (Recommended)
- Netlify
- Cloudflare Pages

### Database Options:
- Neon.tech (Recommended)
- Supabase
- PlanetScale

## Environment Variables Template

### Backend (.env):
```
DATABASE_URL="postgresql://username:password@host:port/database"
JWT_SECRET="SecretKeyIsSecret"
PORT=5001
```

### Frontend:
Update `src/utils/api.ts`:
```typescript
const API_BASE_URL = 'https://your-backend-url.railway.app/api';
```

## Post-Deployment Checklist
- [ ] Backend API responding
- [ ] Database connected
- [ ] Frontend loading
- [ ] API calls working
- [ ] Booking flow functional
- [ ] Promo codes working