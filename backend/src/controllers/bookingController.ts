import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';

const prisma = new PrismaClient();

const bookingSchema = z.object({
  experienceId: z.number(),
  slotId: z.number(),
  fullName: z.string().min(1),
  email: z.string().email()
});

export const createBooking = async (req: Request, res: Response) => {
  try {
    const { experienceId, slotId, fullName, email } = bookingSchema.parse(req.body);
    
    const slot = await prisma.slot.findUnique({ where: { id: slotId } });
    if (!slot || slot.available <= 0) {
      return res.status(400).json({ error: 'Slot not available' });
    }

    const refId = `BK${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`;
    
    const booking = await prisma.$transaction(async (tx) => {
      await tx.slot.update({
        where: { id: slotId },
        data: { available: { decrement: 1 } }
      });
      
      return tx.booking.create({
        data: {
          experienceId,
          slotId,
          refId,
          fullName,
          email
        },
        include: {
          experience: true,
          slot: true
        }
      });
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ error: 'Booking failed' });
  }
};

export const validatePromo = async (req: Request, res: Response) => {
  const { code } = req.body;
  
  const promoCodes: Record<string, { discount: number; type: string }> = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'WELCOME': { discount: 4200, type: 'fixed' },
    'FIRST50': { discount: 50, type: 'percentage' }
  };
  
  if (promoCodes[code]) {
    res.json({ valid: true, ...promoCodes[code] });
  } else {
    res.json({ valid: false });
  }
};