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
    <div>
      <h2>Tags</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={tagName}
          onChange={(e) => setTagName(e.target.value)}
        />
        <button type="submit">
          {editingTagId ? 'Update Tag' : 'Add Tag'}
        </button>
      </form>

      <ul>
        {tags.map(tag => (
          <li key={tag.id}>
            {tag.name}
            <button onClick={() => handleEdit(tag)}>Edit</button>
            <button onClick={() => handleDelete(tag.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
