import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Tags from './components/TagsList';
import Home from './pages/Home';
import CoursesList from './components/CoursesList';

function App() {
  return (
    <Router>
      <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/tags">Tags</Link>
        <Link to="/CoursesList">Courses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tags" element={<Tags />} />
        <Route path='/CoursesList' element={<CoursesList />} />
      </Routes>
    </Router>
  );
}

export default App;
