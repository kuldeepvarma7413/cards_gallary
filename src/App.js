import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Personal from './pages/Personal';
import Business from './pages/Business';
import Discover from './pages/Discover';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home content={<Personal />} />} />
        <Route path="/personal" element={<Home content={<Personal />} />} />
        <Route path="/business" element={<Home content={<Business />} />} />
        <Route path="/discover" element={<Home content={<Discover />} />} />
      </Routes>
    </Router>
  );
}

export default App;