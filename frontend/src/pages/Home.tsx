import { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Experience } from '../types';
import ExperienceCard from '../components/ExperienceCard';
import api from '../utils/api';

const Home = forwardRef<{ handleSearch: (query: string) => void }>((_, ref) => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/experiences')
      .then(response => {
        setExperiences(response.data);
        setFilteredExperiences(response.data);
      })
      .catch(error => console.error('Error fetching experiences:', error))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setFilteredExperiences(experiences);
    } else {
      const filtered = experiences.filter(experience =>
        experience.title.toLowerCase().includes(query.toLowerCase()) ||
        experience.location.toLowerCase().includes(query.toLowerCase()) ||
        experience.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredExperiences(filtered);
    }
  };

  useImperativeHandle(ref, () => ({
    handleSearch
  }));

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {filteredExperiences.length === 0 && !loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No experiences found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredExperiences.map(experience => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </div>
  );
});

export default Home;