# BookIt - Travel Experiences Booking Platform

A full-stack booking platform for Indian travel experiences with Cloudflare deployment and responsive design.

## 🚀 Live Demo
- **Frontend:** https://7dbfd1c6.bookit-frontend.pages.dev
- **Backend API:** https://bookit-backend.phulchandkr7715.workers.dev

##  Tech Stack

### Backend
- **Node.js** v20 LTS - Runtime environment
- **Hono** ^3.12.0 - Web framework for Cloudflare Workers
- **Cloudflare Workers** - Serverless backend deployment
- **TypeScript** ^5.6.3 - Type safety

### Frontend
- **React** ^18.3.1 - Frontend library
- **TypeScript** ^5.6.3 - Static typing
- **Vite** ^5.3.2 - Build tool
- **Tailwind CSS** ^3.4.10 - Styling framework
- **React Router DOM** ^7.1.3 - Routing
- **Axios** ^1.7.4 - HTTP client
- **Framer Motion** ^11.3.7 - Animations

## Project Structure

```
BookIt/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── src/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── hooks/
    │   ├── types/
    │   └── utils/
    ├── index.html
    └── package.json
```

## Setup Instructions

### Prerequisites
- Node.js v20 or higher
- PostgreSQL 16.x
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create `.env` file with:
   ```env
   DATABASE_URL="postgresql://postgres:password@localhost:5432/bookit"
   JWT_SECRET="supersecretjwtkey"
   PORT=5000
   ```

4. **Set up database:**
   ```bash
   # Generate Prisma client
   npx prisma generate
   
   # Push schema to database
   npx prisma db push
   
   # Optional: Seed database with sample data
   npx prisma db seed
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-----------|
| `/api/experiences` | GET | List all experiences |
| `/api/experiences/:id` | GET | Get experience details |
| `/api/bookings` | POST | Create booking with user info |
| `/api/promo/validate` | POST | Validate promo code |




## 📱 Features

- **No Authentication Required** - Direct booking without signup/login
- **Indian Tourism Focus** - 9 curated Indian travel experiences
- **Responsive Design** - Works on all device sizes
- **Experience Browsing** - 4-card grid layout with search functionality
- **Smart Slot Selection** - Segmented date/time picker with availability
- **Guest Checkout** - Simple booking with name and email only
- **Promo Codes** - Multiple discount options (SAVE10, WELCOME, FIRST50)
- **Booking Confirmation** - Animated success page with booking details
- **Real-time Updates** - Live slot availability and pricing

## 🚀 Deployment (Cloudflare)

### Backend (Cloudflare Workers)
```bash
cd backend
npm install
wrangler deploy src/index.js
```

### Frontend (Cloudflare Pages)
```bash
cd frontend
npm install
npm run build
wrangler pages deploy dist --project-name bookit-frontend
```

### Quick Deploy
1. Install Wrangler: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy backend: `cd backend && wrangler deploy src/index.js`
4. Deploy frontend: `cd frontend && wrangler pages deploy dist`


## 🎯 Indian Tourism Experiences

1. **Taj Mahal Sunrise Tour** - Agra, Uttar Pradesh (₹1,999)
2. **Rajasthan Desert Safari** - Jaisalmer, Rajasthan (₹2,499)
3. **Himalayan Valley Trek** - Manali, Himachal Pradesh (₹2,399)
4. **Varanasi Ganga Aarti** - Varanasi, Uttar Pradesh (₹1,499)
5. **Rishikesh River Rafting** - Rishikesh, Uttarakhand (₹2,299)
6. **Hampi Heritage Walk** - Hampi, Karnataka (₹1,799)
7. **Pushkar Camel Fair** - Pushkar, Rajasthan (₹2,199)
8. **Munnar Tea Plantation Tour** - Munnar, Kerala (₹1,999)
9. **Darjeeling Toy Train Ride** - Darjeeling, West Bengal (₹1,299)

### 🎫 Promo Codes
- `SAVE10` - 10% discount
- `WELCOME` - ₹4,200 fixed discount
- `FIRST50` - 50% discount

## 📄 Environment Template

```env
# Cloudflare Workers Environment
JWT_SECRET="your-secret-key"

# Local Development (Optional)
PORT=5001
DATABASE_URL="postgresql://username:password@localhost:5432/bookit"
```

## 🎨 Design System

### Colors
- **Primary:** `#FFD43B` (Yellow)
- **Secondary:** `#1E1E1E` (Dark)
- **Accent:** `#F9F9F9` (Light Gray)
- **Success:** `#22C55E` (Green)

### Key Features
- Modern card-based UI with consistent spacing
- Segmented date/time selection interface
- Guest checkout flow without authentication
- Responsive 4-card grid layout
- Animated confirmation with Framer Motion

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit pull request

