import { Link } from 'react-router-dom';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Link to={`/experience/${experience.id}`} className="block">
      <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
        {/* Image Section */}
        <div className="relative">
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-48 object-cover"
          />
        </div>
        
        {/* Content Section */}
        <div className="p-4">
          {/* Title and Location */}
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-base text-black">
              {experience.title}
            </h3>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
              {experience.location.split(',')[0]}
            </span>
          </div>
          
          {/* Description/Availability */}
          <p className="text-gray-500 text-xs mb-3">
            Curated small-group experience. Certified guide. Safety first with gear included.
          </p>
          
          {/* Price and Button */}
          <div className="flex justify-between items-center">
            <div className="text-black">
              <span className="text-xs font-normal">From </span>
              <span className="font-bold text-base">₹{experience.price}</span>
            </div>
            <button className="bg-primary hover:bg-yellow-400 text-black px-3 py-1.5 rounded-md text-xs font-medium transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperienceCard;