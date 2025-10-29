import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

// Health check
app.get('/', (c) => {
  return c.json({ message: 'BookIt API is running on Cloudflare Workers!' })
})

// Experiences endpoint
app.get('/api/experiences', async (c) => {
  const experiences = [
    {
      id: 1,
      title: "Taj Mahal Sunrise Tour",
      description: "Witness the breathtaking beauty of the Taj Mahal at sunrise. Experience the changing colors of this UNESCO World Heritage site with expert guides sharing its romantic history and architectural marvels.",
      price: 1999,
      location: "Agra, Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      slots: [
        { id: 1, date: "2024-12-15", time: "05:30 AM", available: 15 },
        { id: 2, date: "2024-12-15", time: "07:00 AM", available: 12 },
        { id: 3, date: "2024-12-15", time: "09:30 AM", available: 8 }
      ]
    },
    {
      id: 2,
      title: "Rajasthan Desert Safari",
      description: "Experience the golden sands of Thar Desert with camel safari, traditional Rajasthani folk music, dance performances, and a night under the stars in luxury desert camps.",
      price: 2499,
      location: "Jaisalmer, Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      slots: [
        { id: 4, date: "2024-12-25", time: "02:00 PM", available: 12 },
        { id: 5, date: "2024-12-25", time: "04:00 PM", available: 8 },
        { id: 6, date: "2024-12-25", time: "06:00 PM", available: 6 }
      ]
    },
    {
      id: 3,
      title: "Himalayan Valley Trek",
      description: "Trek through the stunning valleys of Himachal Pradesh with snow-capped peaks, alpine meadows, local villages, and breathtaking mountain vistas.",
      price: 2399,
      location: "Manali, Himachal Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      slots: [
        { id: 7, date: "2024-12-28", time: "06:00 AM", available: 10 },
        { id: 8, date: "2024-12-28", time: "08:00 AM", available: 8 },
        { id: 9, date: "2024-12-28", time: "10:00 AM", available: 6 }
      ]
    },
    {
      id: 4,
      title: "Varanasi Ganga Aarti",
      description: "Witness the mesmerizing evening Ganga Aarti ceremony at Dashashwamedh Ghat. Experience the spiritual ambiance with chanting, fire rituals, and boat rides on the holy Ganges.",
      price: 1499,
      location: "Varanasi, Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      slots: [
        { id: 10, date: "2024-12-20", time: "06:00 PM", available: 25 },
        { id: 11, date: "2024-12-20", time: "07:00 PM", available: 20 },
        { id: 12, date: "2024-12-20", time: "08:00 PM", available: 30 }
      ]
    },
    {
      id: 5,
      title: "Rishikesh River Rafting",
      description: "Experience thrilling white water rafting on the Ganges with stunning Himalayan views. Perfect adventure for beginners and experts with professional guides and safety equipment.",
      price: 2299,
      location: "Rishikesh, Uttarakhand",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      slots: [
        { id: 13, date: "2024-12-18", time: "09:00 AM", available: 15 },
        { id: 14, date: "2024-12-18", time: "11:00 AM", available: 12 },
        { id: 15, date: "2024-12-18", time: "02:00 PM", available: 18 }
      ]
    },
    {
      id: 6,
      title: "Hampi Heritage Walk",
      description: "Explore the UNESCO World Heritage ruins of Vijayanagara Empire. Discover ancient temples, royal complexes, and boulder landscapes with expert archaeological guides.",
      price: 1799,
      location: "Hampi, Karnataka",
      imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      slots: [
        { id: 16, date: "2024-12-16", time: "08:00 AM", available: 20 },
        { id: 17, date: "2024-12-16", time: "10:00 AM", available: 16 },
        { id: 18, date: "2024-12-16", time: "03:00 PM", available: 22 }
      ]
    },
    {
      id: 7,
      title: "Pushkar Camel Fair",
      description: "Experience the vibrant Pushkar Camel Fair with traditional Rajasthani culture, folk music, dance performances, and authentic local cuisine in the holy city.",
      price: 2199,
      location: "Pushkar, Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      slots: [
        { id: 19, date: "2024-12-25", time: "10:00 AM", available: 12 },
        { id: 20, date: "2024-12-25", time: "12:00 PM", available: 8 },
        { id: 21, date: "2024-12-25", time: "04:00 PM", available: 15 }
      ]
    },
    {
      id: 8,
      title: "Munnar Tea Plantation Tour",
      description: "Discover the lush tea gardens of Munnar with guided plantation walks, tea tasting sessions, and scenic mountain views in the Western Ghats.",
      price: 1999,
      location: "Munnar, Kerala",
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      slots: [
        { id: 22, date: "2024-12-22", time: "09:00 AM", available: 18 },
        { id: 23, date: "2024-12-22", time: "11:00 AM", available: 14 },
        { id: 24, date: "2024-12-22", time: "02:00 PM", available: 20 }
      ]
    },
    {
      id: 9,
      title: "Darjeeling Toy Train Ride",
      description: "Journey on the famous Darjeeling Himalayan Railway, a UNESCO World Heritage site. Enjoy breathtaking mountain views and colonial hill station charm.",
      price: 1299,
      location: "Darjeeling, West Bengal",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      slots: [
        { id: 25, date: "2024-12-19", time: "10:00 AM", available: 24 },
        { id: 26, date: "2024-12-19", time: "12:00 PM", available: 20 },
        { id: 27, date: "2024-12-19", time: "02:00 PM", available: 28 }
      ]
    }
  ]
  return c.json(experiences)
})

// Promo validation
app.post('/api/promo/validate', async (c) => {
  const { code } = await c.req.json()
  
  const promoCodes = {
    'SAVE10': { discount: 10, type: 'percentage' },
    'WELCOME': { discount: 4200, type: 'fixed' },
    'FIRST50': { discount: 50, type: 'percentage' }
  }
  
  if (promoCodes[code]) {
    return c.json({ valid: true, ...promoCodes[code] })
  } else {
    return c.json({ valid: false })
  }
})

// Get single experience
app.get('/api/experiences/:id', async (c) => {
  const id = parseInt(c.req.param('id'))
  const experiences = [
    {
      id: 1,
      title: "Taj Mahal Sunrise Tour",
      description: "Witness the breathtaking beauty of the Taj Mahal at sunrise. Experience the changing colors of this UNESCO World Heritage site with expert guides sharing its romantic history and architectural marvels.",
      price: 1999,
      location: "Agra, Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      slots: [
        { id: 1, date: "2024-12-15", time: "05:30 AM", available: 15 },
        { id: 2, date: "2024-12-15", time: "07:00 AM", available: 12 },
        { id: 3, date: "2024-12-15", time: "09:30 AM", available: 8 }
      ]
    },
    {
      id: 2,
      title: "Rajasthan Desert Safari",
      description: "Experience the golden sands of Thar Desert with camel safari, traditional Rajasthani folk music, dance performances, and a night under the stars in luxury desert camps.",
      price: 2499,
      location: "Jaisalmer, Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      slots: [
        { id: 4, date: "2024-12-25", time: "02:00 PM", available: 12 },
        { id: 5, date: "2024-12-25", time: "04:00 PM", available: 8 },
        { id: 6, date: "2024-12-25", time: "06:00 PM", available: 6 }
      ]
    },
    {
      id: 3,
      title: "Himalayan Valley Trek",
      description: "Trek through the stunning valleys of Himachal Pradesh with snow-capped peaks, alpine meadows, local villages, and breathtaking mountain vistas.",
      price: 2399,
      location: "Manali, Himachal Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      slots: [
        { id: 7, date: "2024-12-28", time: "06:00 AM", available: 10 },
        { id: 8, date: "2024-12-28", time: "08:00 AM", available: 8 },
        { id: 9, date: "2024-12-28", time: "10:00 AM", available: 6 }
      ]
    },
    {
      id: 4,
      title: "Varanasi Ganga Aarti",
      description: "Witness the mesmerizing evening Ganga Aarti ceremony at Dashashwamedh Ghat. Experience the spiritual ambiance with chanting, fire rituals, and boat rides on the holy Ganges.",
      price: 1499,
      location: "Varanasi, Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      slots: [
        { id: 10, date: "2024-12-20", time: "06:00 PM", available: 25 },
        { id: 11, date: "2024-12-20", time: "07:00 PM", available: 20 },
        { id: 12, date: "2024-12-20", time: "08:00 PM", available: 30 }
      ]
    },
    {
      id: 5,
      title: "Rishikesh River Rafting",
      description: "Experience thrilling white water rafting on the Ganges with stunning Himalayan views. Perfect adventure for beginners and experts with professional guides and safety equipment.",
      price: 2299,
      location: "Rishikesh, Uttarakhand",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      slots: [
        { id: 13, date: "2024-12-18", time: "09:00 AM", available: 15 },
        { id: 14, date: "2024-12-18", time: "11:00 AM", available: 12 },
        { id: 15, date: "2024-12-18", time: "02:00 PM", available: 18 }
      ]
    },
    {
      id: 6,
      title: "Hampi Heritage Walk",
      description: "Explore the UNESCO World Heritage ruins of Vijayanagara Empire. Discover ancient temples, royal complexes, and boulder landscapes with expert archaeological guides.",
      price: 1799,
      location: "Hampi, Karnataka",
      imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      slots: [
        { id: 16, date: "2024-12-16", time: "08:00 AM", available: 20 },
        { id: 17, date: "2024-12-16", time: "10:00 AM", available: 16 },
        { id: 18, date: "2024-12-16", time: "03:00 PM", available: 22 }
      ]
    },
    {
      id: 7,
      title: "Pushkar Camel Fair",
      description: "Experience the vibrant Pushkar Camel Fair with traditional Rajasthani culture, folk music, dance performances, and authentic local cuisine in the holy city.",
      price: 2199,
      location: "Pushkar, Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      slots: [
        { id: 19, date: "2024-12-25", time: "10:00 AM", available: 12 },
        { id: 20, date: "2024-12-25", time: "12:00 PM", available: 8 },
        { id: 21, date: "2024-12-25", time: "04:00 PM", available: 15 }
      ]
    },
    {
      id: 8,
      title: "Munnar Tea Plantation Tour",
      description: "Discover the lush tea gardens of Munnar with guided plantation walks, tea tasting sessions, and scenic mountain views in the Western Ghats.",
      price: 1999,
      location: "Munnar, Kerala",
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      slots: [
        { id: 22, date: "2024-12-22", time: "09:00 AM", available: 18 },
        { id: 23, date: "2024-12-22", time: "11:00 AM", available: 14 },
        { id: 24, date: "2024-12-22", time: "02:00 PM", available: 20 }
      ]
    },
    {
      id: 9,
      title: "Darjeeling Toy Train Ride",
      description: "Journey on the famous Darjeeling Himalayan Railway, a UNESCO World Heritage site. Enjoy breathtaking mountain views and colonial hill station charm.",
      price: 1299,
      location: "Darjeeling, West Bengal",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      slots: [
        { id: 25, date: "2024-12-19", time: "10:00 AM", available: 24 },
        { id: 26, date: "2024-12-19", time: "12:00 PM", available: 20 },
        { id: 27, date: "2024-12-19", time: "02:00 PM", available: 28 }
      ]
    }
  ]
  const experience = experiences.find(exp => exp.id === id)
  if (!experience) {
    return c.json({ error: 'Experience not found' }, 404)
  }
  return c.json(experience)
})

// Booking endpoint
app.post('/api/bookings', async (c) => {
  const bookingData = await c.req.json()
  
  // Find experience and slot data
  const experiences = [
    {
      id: 1,
      title: "Taj Mahal Sunrise Tour",
      description: "Witness the breathtaking beauty of the Taj Mahal at sunrise.",
      price: 1999,
      location: "Agra, Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
      slots: [
        { id: 1, date: "2024-12-15", time: "05:30 AM", available: 15 },
        { id: 2, date: "2024-12-15", time: "07:00 AM", available: 12 },
        { id: 3, date: "2024-12-15", time: "09:30 AM", available: 8 }
      ]
    },
    {
      id: 2,
      title: "Rajasthan Desert Safari",
      description: "Experience the golden sands of Thar Desert.",
      price: 2499,
      location: "Jaisalmer, Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      slots: [
        { id: 4, date: "2024-12-25", time: "02:00 PM", available: 12 },
        { id: 5, date: "2024-12-25", time: "04:00 PM", available: 8 },
        { id: 6, date: "2024-12-25", time: "06:00 PM", available: 6 }
      ]
    },
    {
      id: 3,
      title: "Himalayan Valley Trek",
      description: "Trek through stunning valleys of Himachal Pradesh.",
      price: 2399,
      location: "Manali, Himachal Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      slots: [
        { id: 7, date: "2024-12-28", time: "06:00 AM", available: 10 },
        { id: 8, date: "2024-12-28", time: "08:00 AM", available: 8 },
        { id: 9, date: "2024-12-28", time: "10:00 AM", available: 6 }
      ]
    },
    {
      id: 4,
      title: "Varanasi Ganga Aarti",
      description: "Witness the mesmerizing evening Ganga Aarti ceremony.",
      price: 1499,
      location: "Varanasi, Uttar Pradesh",
      imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
      slots: [
        { id: 10, date: "2024-12-20", time: "06:00 PM", available: 25 },
        { id: 11, date: "2024-12-20", time: "07:00 PM", available: 20 },
        { id: 12, date: "2024-12-20", time: "08:00 PM", available: 30 }
      ]
    },
    {
      id: 5,
      title: "Rishikesh River Rafting",
      description: "Experience thrilling white water rafting on the Ganges.",
      price: 2299,
      location: "Rishikesh, Uttarakhand",
      imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
      slots: [
        { id: 13, date: "2024-12-18", time: "09:00 AM", available: 15 },
        { id: 14, date: "2024-12-18", time: "11:00 AM", available: 12 },
        { id: 15, date: "2024-12-18", time: "02:00 PM", available: 18 }
      ]
    },
    {
      id: 6,
      title: "Hampi Heritage Walk",
      description: "Explore UNESCO World Heritage ruins of Vijayanagara Empire.",
      price: 1799,
      location: "Hampi, Karnataka",
      imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop",
      slots: [
        { id: 16, date: "2024-12-16", time: "08:00 AM", available: 20 },
        { id: 17, date: "2024-12-16", time: "10:00 AM", available: 16 },
        { id: 18, date: "2024-12-16", time: "03:00 PM", available: 22 }
      ]
    },
    {
      id: 7,
      title: "Pushkar Camel Fair",
      description: "Experience vibrant Pushkar Camel Fair with traditional culture.",
      price: 2199,
      location: "Pushkar, Rajasthan",
      imageUrl: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&h=600&fit=crop",
      slots: [
        { id: 19, date: "2024-12-25", time: "10:00 AM", available: 12 },
        { id: 20, date: "2024-12-25", time: "12:00 PM", available: 8 },
        { id: 21, date: "2024-12-25", time: "04:00 PM", available: 15 }
      ]
    },
    {
      id: 8,
      title: "Munnar Tea Plantation Tour",
      description: "Discover lush tea gardens of Munnar with guided walks.",
      price: 1999,
      location: "Munnar, Kerala",
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop",
      slots: [
        { id: 22, date: "2024-12-22", time: "09:00 AM", available: 18 },
        { id: 23, date: "2024-12-22", time: "11:00 AM", available: 14 },
        { id: 24, date: "2024-12-22", time: "02:00 PM", available: 20 }
      ]
    },
    {
      id: 9,
      title: "Darjeeling Toy Train Ride",
      description: "Journey on famous Darjeeling Himalayan Railway.",
      price: 1299,
      location: "Darjeeling, West Bengal",
      imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      slots: [
        { id: 25, date: "2024-12-19", time: "10:00 AM", available: 24 },
        { id: 26, date: "2024-12-19", time: "12:00 PM", available: 20 },
        { id: 27, date: "2024-12-19", time: "02:00 PM", available: 28 }
      ]
    }
  ]
  
  const experience = experiences.find(exp => exp.id === bookingData.experienceId)
  const slot = experience?.slots.find(s => s.id === bookingData.slotId)
  
  // Generate booking reference
  const refId = `BK${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`
  
  const booking = {
    id: Date.now(),
    refId,
    experienceId: bookingData.experienceId,
    slotId: bookingData.slotId,
    fullName: bookingData.fullName,
    email: bookingData.email,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
    experience: experience,
    slot: slot
  }
  
  return c.json(booking)
})

export default app