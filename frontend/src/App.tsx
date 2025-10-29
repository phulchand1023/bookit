import { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ExperienceDetails from './pages/ExperienceDetails';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';

function App() {
  const homeRef = useRef<{ handleSearch: (query: string) => void }>(null);

  const handleSearch = (query: string) => {
    homeRef.current?.handleSearch(query);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home ref={homeRef} />} />
          <Route path="/experience/:id" element={<ExperienceDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;