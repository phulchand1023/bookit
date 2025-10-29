import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tag, User, Mail } from 'lucide-react';
import { Experience, Slot } from '../types';
import api from '../utils/api';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { experience, slot }: { experience: Experience; slot: Slot } = location.state || {};
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!experience || !slot) {
    navigate('/');
    return null;
  }

  const subtotal = experience.price * quantity;
  const taxes = Math.round(subtotal * 0.05);
  const totalBeforeDiscount = subtotal + taxes;
  const total = totalBeforeDiscount - discount;

  const validatePromo = async () => {
    if (!promoCode) return;
    
    try {
      const response = await api.post('/promo/validate', { code: promoCode });
      if (response.data.valid) {
        const discountAmount = response.data.type === 'percentage' 
          ? (subtotal * response.data.discount) / 100
          : response.data.discount;
        setDiscount(Math.min(discountAmount, subtotal));
      } else {
        setError('Invalid promo code');
      }
    } catch (error) {
      setError('Error validating promo code');
    }
  };

  const handleBooking = async () => {
    if (!fullName || !email) {
      setError('Please fill in all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('Booking data:', {
        experienceId: experience.id,
        slotId: slot.id,
        fullName,
        email
      });
      
      const response = await api.post('/bookings', {
        experienceId: experience.id,
        slotId: slot.id,
        fullName,
        email
      });
      
      console.log('Booking response:', response.data);
      
      if (response.data && response.data.refId) {
        navigate('/confirmation', {
          state: { booking: response.data }
        });
      } else {
        setError('Booking response invalid');
      }
    } catch (error: any) {
      console.error('Booking error:', error);
      setError(error.response?.data?.error || error.message || 'Booking failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="font-semibold text-2xl text-secondary mb-8">
        Complete Your Booking
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-accent rounded-2xl p-6">
            <h3 className="font-semibold text-lg text-secondary mb-4">
              Your Information
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full pl-10 bg-neutral rounded-lg border border-border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 bg-neutral rounded-lg border border-border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>
          </div>



          <div className="bg-accent rounded-2xl p-6">
            <h3 className="font-semibold text-lg text-secondary mb-4">
              Promo Code (Optional)
            </h3>
            
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter promo code"
                  className="w-full pl-10 bg-neutral rounded-lg border border-border p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <button
                onClick={validatePromo}
                className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}
          
          {/* Experience Title */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600 text-sm font-medium">EXPERIENCE</span>
            <span className="font-semibold text-black">{experience.title}</span>
          </div>
          
          {/* Booking Details */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Date</span>
              <span className="text-black font-medium">
                {new Date(slot.date).toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Time</span>
              <span className="text-black font-medium">{slot.time}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Quantity</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-6 h-6 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm"
                >
                  -
                </button>
                <span className="text-black font-medium min-w-[20px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-6 h-6 border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-50 text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          {/* Price Breakdown */}
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Subtotal</span>
              <span className="text-black font-medium">₹{subtotal}</span>
            </div>
            
            {discount > 0 && (
              <div className="flex justify-between items-center">
                <span className="text-success text-sm">Discount</span>
                <span className="text-success font-medium">-₹{discount}</span>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-sm">Taxes (5%)</span>
              <span className="text-black font-medium">₹{taxes}</span>
            </div>
          </div>
          
          {/* Divider */}
          <div className="border-t border-gray-200 my-4"></div>
          
          {/* Total */}
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-lg text-black">Total</span>
            <span className="font-bold text-xl text-black">₹{total}</span>
          </div>

          {/* Pay Button */}
          <button
            onClick={handleBooking}
            disabled={loading}
            className="w-full bg-primary hover:bg-yellow-400 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed text-black rounded-lg font-semibold py-4 text-base transition-colors"
          >
            {loading ? 'Processing...' : 'Pay and Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;