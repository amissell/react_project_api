// src/components/courses/CoursesList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CoursesList.css';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/courses')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="courses-container">
      <h2 className="courses-title">Available Courses</h2>
      <div className="course-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p><strong>Duration:</strong> {course.duration} weeks</p>
            <p><strong>Level:</strong> {course.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesList;
