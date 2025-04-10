import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tags from './components/tags/TagsList';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/tags">Tags</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<Tags />} />
      </Routes>
    </Router>
  );
}

export default App;
