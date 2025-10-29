import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getExperiences = async (req: Request, res: Response) => {
  try {
    const experiences = await prisma.experience.findMany({
      include: {
        slots: {
          where: { available: { gt: 0 } },
          orderBy: { date: 'asc' }
        }
      }
    });
    res.json(experiences);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getExperience = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const experience = await prisma.experience.findUnique({
      where: { id: parseInt(id) },
      include: {
        slots: {
          where: { available: { gt: 0 } },
          orderBy: { date: 'asc' }
        }
      }
    });
    
    if (!experience) {
      return res.status(404).json({ error: 'Experience not found' });
    }
    
    res.json(experience);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};