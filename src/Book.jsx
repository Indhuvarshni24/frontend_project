import React, { useState } from 'react';
const Book = () => {
  const [entries, setEntries] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    nickname: '',
    address: '',
    phoneNumber: '',
    memories: '',
    gender: '',
    favoriteActors: [],
    school: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        favoriteActors: checked
          ? [...prevFormData.favoriteActors, value]
          : prevFormData.favoriteActors.filter((actor) => actor !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, formData]);
    setFormData({
      name: '',
      nickname: '',
      address: '',
      phoneNumber: '',
      memories: '',
      gender: '',
      favoriteActors: [],
      school: '',
    });
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px auto',
      maxWidth: '600px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      border: '2px solidrgb(242, 9, 9)', // Green border
      backgroundColor: '#f2f7f2', 
       boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    },
    formField: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    input: {
      width: '100%',
      padding: '8px',
      marginBottom: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    textarea: {
      width: '100%',
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '4px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    entries: {
      marginTop: '20px',
    },
    entryItem: {
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9',
    },
    entryHeading: {
      margin: '0 0 10px',
    },
    entryText: {
      margin: '5px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Slam Book</h1>

      <form onSubmit={handleSubmit}>
        <div style={styles.formField}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Nickname:</label>
          <input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Memories:</label>
          <textarea
            name="memories"
            value={formData.memories}
            onChange={handleChange}
            required
            style={styles.textarea}
          ></textarea>
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            />{' '}
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === 'Other'}
              onChange={handleChange}
            />{' '}
            Other
          </label>
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>Favorite Actors:</label>
          <label>
            <input
              type="checkbox"
              name="favoriteActors"
              value="Actor 1"
              checked={formData.favoriteActors.includes('Actor 1')}
              onChange={handleChange}
            />{' '}
            Actor 1
          </label>
          <label>
            <input
              type="checkbox"
              name="favoriteActors"
              value="Actor 2"
              checked={formData.favoriteActors.includes('Actor 2')}
              onChange={handleChange}
            />{' '}
            Actor 2
          </label>
          <label>
            <input
              type="checkbox"
              name="favoriteActors"
              value="Actor 3"
              checked={formData.favoriteActors.includes('Actor 3')}
              onChange={handleChange}
            />{' '}
            Actor 3
          </label>
        </div>
        <div style={styles.formField}>
          <label style={styles.label}>School:</label>
          <select
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
            style={styles.input}
          >
            <option value="">Select your school</option>
            <option value="High School A">High School A</option>
            <option value="High School B">High School B</option>
            <option value="High School C">High School C</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>Add Entry</button>
      </form>

      <div style={styles.entries}>
        <h2>Entries</h2>
        {entries.length === 0 ? (
          <p>No entries yet. Be the first to add!</p>
        ) : (
          <ul>
            {entries.map((entry, index) => (
              <li key={index} style={styles.entryItem}>
                <h3 style={styles.entryHeading}>{entry.name} ({entry.nickname})</h3>
                <p style={styles.entryText}><strong>Address:</strong> {entry.address}</p>
                <p style={styles.entryText}><strong>Phone Number:</strong> {entry.phoneNumber}</p>
                <p style={styles.entryText}><strong>Memories:</strong> {entry.memories}</p>
                <p style={styles.entryText}><strong>Gender:</strong> {entry.gender}</p>
                <p style={styles.entryText}><strong>Favorite Actors:</strong> {entry.favoriteActors.join(', ')}</p>
                <p style={styles.entryText}><strong>School:</strong> {entry.school}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Book;
