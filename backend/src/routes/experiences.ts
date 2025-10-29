import { Router } from 'express';
import { getExperiences, getExperience } from '../controllers/experienceController';

const router = Router();

router.get('/', getExperiences);
router.get('/:id', getExperience);

export default router;