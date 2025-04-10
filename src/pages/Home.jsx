// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to right, #f9f9f9, #e6f0ff)',
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#333',
        marginBottom: '20px',
      }}>
        Welcome to My Learning Platform
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        textAlign: 'center',
        maxWidth: '600px',
        marginBottom: '30px'
      }}>
        Explore tags or browse courses to start learning and organizing your content.
      </p>

      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <Link to="/tags" style={buttonStyle}>
          Go to Tags
        </Link>
        <Link to="/courses" style={buttonStyle}>
          Browse Courses
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  padding: '12px 24px',
  borderRadius: '8px',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'background 0.3s ease',
};

export default Home;
