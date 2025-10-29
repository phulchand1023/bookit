import app from './app';
import { PrismaClient } from '@prisma/client';

const PORT = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Database connection failed:', error);
  }
});