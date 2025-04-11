import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      // minHeight: '100vh',
      width: '100vh',
      height: '100vh',
      background: 'linear-gradient(135deg, #e8f0fe, #ffffff)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      // padding: '20px',
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#2c3e50',
        marginBottom: '10px',
        fontWeight: 'bold',
      }}>
        Welcome to LearnSpace 🌿
      </h1>

      <p style={{
        fontSize: '1.2rem',
        color: '#555',
        maxWidth: '600px',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        Organize your learning journey by exploring topics through tags or diving directly into our curated courses.
      </p>

      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
        <Link to="/tags" style={buttonStyle}>
          🔖 Tags
        </Link>
        <Link to="/courses" style={buttonStyle}>
          📚 Courses
        </Link>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#1e90ff',
  color: '#fff',
  padding: '14px 28px',
  borderRadius: '10px',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: '500',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'background 0.3s ease',
};

export default Home;
