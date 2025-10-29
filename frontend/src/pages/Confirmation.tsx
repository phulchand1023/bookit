import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin, Home } from 'lucide-react';
import { Booking } from '../types';

const Confirmation = () => {
  const location = useLocation();
  const { booking }: { booking: Booking } = location.state || {};

  if (!booking) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-secondary mb-4">
            Booking not found
          </h2>
          <Link
            to="/"
            className="bg-primary hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-md p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-6" />
        </motion.div>
        
        <h2 className="font-semibold text-2xl text-secondary mb-4">
          Booking Confirmed!
        </h2>
        
        <p className="text-gray-600 mb-6">
          Your booking has been successfully confirmed. Here are your details:
        </p>

        <div className="bg-accent rounded-2xl p-6 mb-6 text-left">
          <div className="space-y-4">
            <div>
              <span className="text-sm text-gray-500">Booking Reference</span>
              <p className="font-semibold text-secondary">{booking.refId}</p>
            </div>
            
            <div>
              <span className="text-sm text-gray-500">Booked by</span>
              <p className="font-medium text-secondary">{booking.fullName}</p>
              <p className="text-sm text-gray-600">{booking.email}</p>
            </div>
            
            <div>
              <span className="text-sm text-gray-500">Experience</span>
              <p className="font-medium text-secondary">{booking.experience.title}</p>
            </div>
            
            <div className="flex items-center text-gray-600">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">{booking.experience.location}</span>
            </div>
            
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">
                  {new Date(booking.slot.date).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{booking.slot.time}</span>
              </div>
            </div>
          </div>
        </div>

        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-primary hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </div>
  );
};

export default Confirmation;