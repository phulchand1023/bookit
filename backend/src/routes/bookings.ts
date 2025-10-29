import { Router } from 'express';
import { createBooking, validatePromo } from '../controllers/bookingController';

const router = Router();

router.post('/', createBooking);
router.post('/promo/validate', validatePromo);

export default router;