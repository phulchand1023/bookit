import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Experience, Slot } from '../types';
import api from '../utils/api';

const ExperienceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      api.get(`/experiences/${id}`)
        .then(response => setExperience(response.data))
        .catch(error => console.error('Error fetching experience:', error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleBooking = () => {
    if (selectedSlot && experience) {
      navigate('/checkout', {
        state: { experience, slot: selectedSlot }
      });
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!experience) {
    return <div className="text-center py-8">Experience not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-96 object-cover rounded-2xl"
          />
          <div className="mt-6">
            <h1 className="font-semibold text-2xl md:text-3xl text-secondary mb-4">
              {experience.title}
            </h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{experience.location}</span>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              {experience.description}
            </p>
            <div className="bg-accent rounded-2xl p-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price per person</span>
                <div className="text-secondary">
                  <span className="text-lg font-normal">From </span>
                  <span className="font-bold text-2xl">₹{experience.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-accent rounded-lg p-6">
          {/* Choose Date Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-secondary mb-4">
              Choose Date
            </h3>
            <div className="flex flex-wrap gap-3 mb-6">
              {[...new Set(experience.slots.map(slot => slot.date))].map(date => {
                const dateSlots = experience.slots.filter(slot => slot.date === date);
                const hasAvailability = dateSlots.some(slot => slot.available > 0);
                const isSelected = selectedSlot && selectedSlot.date === date;
                
                return (
                  <button
                    key={date}
                    onClick={() => {
                      if (hasAvailability) {
                        const firstAvailable = dateSlots.find(slot => slot.available > 0);
                        setSelectedSlot(firstAvailable || null);
                      }
                    }}
                    disabled={!hasAvailability}
                    className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
                      isSelected
                        ? 'bg-primary text-black'
                        : hasAvailability
                        ? 'border border-gray-300 text-gray-700 hover:border-gray-400'
                        : 'border border-gray-200 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Choose Time Section */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg text-secondary mb-4">
              Choose Time
            </h3>
            <div className="flex flex-wrap gap-3 mb-4">
              {selectedSlot && experience.slots
                .filter(slot => slot.date === selectedSlot.date)
                .map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot)}
                    disabled={slot.available === 0}
                    className={`px-4 py-3 rounded text-sm font-medium transition-colors flex flex-col items-center min-w-[100px] ${
                      selectedSlot?.id === slot.id
                        ? 'bg-primary text-black'
                        : slot.available > 0
                        ? 'border border-gray-300 text-gray-700 hover:border-gray-400'
                        : 'border border-gray-200 text-gray-400 cursor-not-allowed bg-gray-50'
                    }`}
                  >
                    <span>{slot.time}</span>
                    <span className={`text-xs mt-1 ${
                      slot.available === 0
                        ? 'text-gray-400'
                        : slot.available <= 5
                        ? 'text-red-500'
                        : 'text-gray-500'
                    }`}>
                      {slot.available === 0 ? 'Sold out' : `${slot.available} left`}
                    </span>
                  </button>
                ))
              }
            </div>
            
            {/* Time Zone Info */}
            <p className="text-xs text-gray-500 mb-4">
              All times are in IST (GMT +5:30)
            </p>
          </div>

          {/* About Section */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-sm text-secondary mb-2">About</h4>
            <p className="text-xs text-gray-600">
              Scenic routes, trained guides, and safety briefing included.
            </p>
          </div>

          <button
            onClick={handleBooking}
            disabled={!selectedSlot}
            className="w-full bg-primary hover:bg-yellow-400 disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed text-black rounded-lg font-medium py-3"
          >
            Continue to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetails;