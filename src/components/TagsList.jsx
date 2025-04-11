import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [tagName, setTagName] = useState('');
  const [editingTagId, setEditingTagId] = useState(null);

  const URL = 'http://localhost:8080/api/tags';

  useEffect(() => {
    fetchTags();
    console.log(tags);
  }, []);

  const fetchTags = () => {
    axios.get(URL)
      .then(response => {
        setTags(response.data);
      })
      .catch(error => {
        console.error('Error fetching tags:', error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingTagId) {
      axios.put(`${URL}/${editingTagId}`, { name: tagName })
        .then(() => {
          fetchTags();
          setTagName('');
          setEditingTagId(null);
        })
        .catch(error => {
          console.error('Error updating tag:', error);
        });
    } else {
      axios.post(URL, { name: tagName })
        .then(() => {
          fetchTags();
          setTagName('');
        })
        .catch(error => {
          console.error('Error adding tag:', error);
        });
    }
  };

  const handleEdit = (tag) => {
    setTagName(tag.name);
    setEditingTagId(tag.id);
  };

  const handleDelete = (id) => {
    axios.delete(`${URL}/${id}`)
      .then(() => {
        fetchTags();
      })
      .catch(error => {
        console.error('Error deleting tag:', error);
      });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h2 style={{textAlign: 'center', color: '#333'}}>Tags</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
  <input
    type="text"
    value={tagName}
    onChange={(e) => setTagName(e.target.value)}
    placeholder="Enter tag name"
    style={{
      flex: 1,
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    }}
  />
  <button
    type="submit"
    style={{
      padding: '8px 16px',
      backgroundColor: editingTagId ? '#FFA500' : '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    {editingTagId ? 'Update Tag' : 'Add Tag'}
  </button>
</form>


<ul style={{ listStyle: 'none', padding: 0 }}>
  {tags.map(tag => (
    <li key={tag.id} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      marginBottom: '8px',
      backgroundColor: '#',
      borderRadius: '6px'
    }}>
      <span>#{tag.name}</span>
      <div>
        <button
          onClick={() => handleEdit(tag)}
          style={{
            marginRight: '8px',
            padding: '6px 10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(tag.id)}
          style={{
            padding: '6px 10px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>


    </div>
  );
};

export default Tags;
