import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

interface HeaderProps {
  onSearch?: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch?.(searchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch?.(query);
  };

  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-secondary">
            Book<span className="text-primary">It</span>
          </Link>
          
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={handleInputChange}
                placeholder="Search experiences..."
                className="pl-10 pr-4 py-2 bg-neutral rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary w-64"
              />
            </div>
            <button
              onClick={handleSearch}
              className="bg-primary hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;