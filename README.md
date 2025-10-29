# BookIt - Travel Experiences Booking Platform

A full-stack booking platform for travel experiences with PostgreSQL database, and responsive design.

##  Tech Stack

### Backend
- **Node.js** v20 LTS - Runtime environment
- **Express.js** ^4.19.2 - Web server framework
- **Prisma ORM** ^5.10.0 - Database ORM for PostgreSQL
- **PostgreSQL** 16.x - Relational database
- **bcrypt** ^5.1.1 - Password hashing
- **jsonwebtoken** ^9.0.2 - JWT authentication
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

| Endpoint | Method | Description | Auth Required |
|----------|--------|-------------|---------------|
| `/api/auth/register` | POST | Register new user | No |
| `/api/auth/login` | POST | Login user | No |
| `/api/auth/me` | GET | Get current user | Yes |
| `/api/experiences` | GET | List all experiences | No |
| `/api/experiences/:id` | GET | Get experience details | No |
| `/api/bookings` | POST | Create booking | Yes |
| `/api/promo/validate` | POST | Validate promo code | No |




## 📱 Features

- **Responsive Design** - Works on all device sizes
- **Experience Browsing** - Grid layout of travel experiences
- **Slot Selection** - Choose date and time slots
- **Promo Codes** - Discount validation system
- **Booking Confirmation** - Success page with booking details
- **Real-time Updates** - Slot availability updates

##  Deployment

### Backend 
1. Connect GitHub repository
2. Set environment variables
3. Deploy with build command: `npm run build`
4. Start command: `npm start`

### Frontend (Vercel)
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Output directory: `dist`
4. Deploy


### Promo Codes
- `SAVE10` - 10% discount
- `WELCOME` - $50 fixed discount

### Test User
```json
{
  "name": "Phulchand Kumar",
  "email": "pk7715@gmail.com",
  "promo" : "FIRST50"
}
```

## 📄 Environment Template

```env
# Database
DATABASE_URL="postgresql://username:password@host:port/database"


# Server
PORT=5000
```

