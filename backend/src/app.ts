import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import experienceRoutes from './routes/experiences';
import bookingRoutes from './routes/bookings';
import { validatePromo } from './controllers/bookingController';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/experiences', experienceRoutes);
app.use('/api/bookings', bookingRoutes);
app.post('/api/promo/validate', validatePromo);

export default app;