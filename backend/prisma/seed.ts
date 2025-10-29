import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create sample experiences
  const experiences = await Promise.all([
    prisma.experience.create({
      data: {
        title: 'Taj Mahal Sunrise Tour',
        description: 'Witness the breathtaking beauty of the Taj Mahal at sunrise. Experience the changing colors of this UNESCO World Heritage site with expert guides sharing its romantic history and architectural marvels.',
        price: 1999,
        location: 'Agra, Uttar Pradesh',
        imageUrl: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-15'),
              time: '05:30 AM',
              available: 15
            },
            {
              date: new Date('2024-12-15'),
              time: '07:00 AM',
              available: 12
            },
            {
              date: new Date('2024-12-15'),
              time: '09:30 AM',
              available: 8
            },
            {
              date: new Date('2024-12-16'),
              time: '05:30 AM',
              available: 12
            },
            {
              date: new Date('2024-12-16'),
              time: '07:00 AM',
              available: 10
            },
            {
              date: new Date('2024-12-16'),
              time: '09:30 AM',
              available: 6
            },
            {
              date: new Date('2024-12-17'),
              time: '05:30 AM',
              available: 18
            },
            {
              date: new Date('2024-12-17'),
              time: '07:00 AM',
              available: 14
            },
            {
              date: new Date('2024-12-17'),
              time: '09:30 AM',
              available: 10
            }
          ]
        }
      }
    }),
    

    prisma.experience.create({
      data: {
        title: 'Rajasthan Desert Safari',
        description: 'Experience the golden sands of Thar Desert with camel safari, traditional Rajasthani folk music, dance performances, and a night under the stars in luxury desert camps.',
        price: 2499,
        location: 'Jaisalmer, Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-25'),
              time: '02:00 PM',
              available: 12
            },
            {
              date: new Date('2024-12-25'),
              time: '04:00 PM',
              available: 8
            },
            {
              date: new Date('2024-12-25'),
              time: '06:00 PM',
              available: 6
            },
            {
              date: new Date('2024-12-26'),
              time: '02:00 PM',
              available: 10
            },
            {
              date: new Date('2024-12-26'),
              time: '04:00 PM',
              available: 8
            },
            {
              date: new Date('2024-12-26'),
              time: '06:00 PM',
              available: 4
            },
            {
              date: new Date('2024-12-27'),
              time: '02:00 PM',
              available: 15
            },
            {
              date: new Date('2024-12-27'),
              time: '04:00 PM',
              available: 12
            },
            {
              date: new Date('2024-12-27'),
              time: '06:00 PM',
              available: 8
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Himalayan Valley Trek',
        description: 'Trek through the stunning valleys of Himachal Pradesh with snow-capped peaks, alpine meadows, local villages, and breathtaking mountain vistas.',
        price: 2399,
        location: 'Manali, Himachal Pradesh',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-28'),
              time: '06:00 AM',
              available: 10
            },
            {
              date: new Date('2024-12-28'),
              time: '08:00 AM',
              available: 8
            },
            {
              date: new Date('2024-12-28'),
              time: '10:00 AM',
              available: 6
            },
            {
              date: new Date('2025-01-02'),
              time: '06:00 AM',
              available: 8
            },
            {
              date: new Date('2025-01-02'),
              time: '08:00 AM',
              available: 6
            },
            {
              date: new Date('2025-01-02'),
              time: '10:00 AM',
              available: 4
            },
            {
              date: new Date('2025-01-08'),
              time: '06:00 AM',
              available: 12
            },
            {
              date: new Date('2025-01-08'),
              time: '08:00 AM',
              available: 10
            },
            {
              date: new Date('2025-01-08'),
              time: '10:00 AM',
              available: 8
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Varanasi Ganga Aarti',
        description: 'Witness the mesmerizing evening Ganga Aarti ceremony at Dashashwamedh Ghat. Experience the spiritual ambiance with chanting, fire rituals, and boat rides on the holy Ganges.',
        price: 1499,
        location: 'Varanasi, Uttar Pradesh',
        imageUrl: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-20'),
              time: '06:00 PM',
              available: 25
            },
            {
              date: new Date('2024-12-21'),
              time: '06:00 PM',
              available: 20
            },
            {
              date: new Date('2024-12-22'),
              time: '06:00 PM',
              available: 30
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Rishikesh River Rafting',
        description: 'Experience thrilling white water rafting on the Ganges with stunning Himalayan views. Perfect adventure for beginners and experts with professional guides and safety equipment.',
        price: 2299,
        location: 'Rishikesh, Uttarakhand',
        imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-18'),
              time: '09:00 AM',
              available: 15
            },
            {
              date: new Date('2024-12-19'),
              time: '09:00 AM',
              available: 12
            },
            {
              date: new Date('2024-12-20'),
              time: '02:00 PM',
              available: 18
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Hampi Heritage Walk',
        description: 'Explore the UNESCO World Heritage ruins of Vijayanagara Empire. Discover ancient temples, royal complexes, and boulder landscapes with expert archaeological guides.',
        price: 1799,
        location: 'Hampi, Karnataka',
        imageUrl: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-16'),
              time: '08:00 AM',
              available: 20
            },
            {
              date: new Date('2024-12-17'),
              time: '08:00 AM',
              available: 16
            },
            {
              date: new Date('2024-12-18'),
              time: '03:00 PM',
              available: 22
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Pushkar Camel Fair',
        description: 'Experience the vibrant Pushkar Camel Fair with traditional Rajasthani culture, folk music, dance performances, and authentic local cuisine in the holy city.',
        price: 2199,
        location: 'Pushkar, Rajasthan',
        imageUrl: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-25'),
              time: '10:00 AM',
              available: 12
            },
            {
              date: new Date('2024-12-26'),
              time: '10:00 AM',
              available: 8
            },
            {
              date: new Date('2024-12-27'),
              time: '04:00 PM',
              available: 15
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Munnar Tea Plantation Tour',
        description: 'Discover the lush tea gardens of Munnar with guided plantation walks, tea tasting sessions, and scenic mountain views in the Western Ghats.',
        price: 1999,
        location: 'Munnar, Kerala',
        imageUrl: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-22'),
              time: '09:00 AM',
              available: 18
            },
            {
              date: new Date('2024-12-23'),
              time: '09:00 AM',
              available: 14
            },
            {
              date: new Date('2024-12-24'),
              time: '02:00 PM',
              available: 20
            }
          ]
        }
      }
    }),
    
    prisma.experience.create({
      data: {
        title: 'Darjeeling Toy Train Ride',
        description: 'Journey on the famous Darjeeling Himalayan Railway, a UNESCO World Heritage site. Enjoy breathtaking mountain views and colonial hill station charm.',
        price: 1299,
        location: 'Darjeeling, West Bengal',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
        slots: {
          create: [
            {
              date: new Date('2024-12-19'),
              time: '10:00 AM',
              available: 24
            },
            {
              date: new Date('2024-12-20'),
              time: '10:00 AM',
              available: 20
            },
            {
              date: new Date('2024-12-21'),
              time: '02:00 PM',
              available: 28
            }
          ]
        }
      }
    })
  ]);

  console.log('Seeded Indian tourism experiences:', experiences.length);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });