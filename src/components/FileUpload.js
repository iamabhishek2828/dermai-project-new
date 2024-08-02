// src/components/FileUpload.js

import React, { useState } from 'react';
import axios from 'axios';
import '../styles/fileUpload.css'; // Ensure this path is correct

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      setLoading(true);
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const result = response.data;
      const prediction = result.prediction[0];
      const diagnosis = getDiagnosis(prediction);
      setDiagnosis(diagnosis);
      setLoading(false);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
      setLoading(false);
    }
  };

  const getDiagnosis = (prediction) => {
    const labels = ['Acne', 'Redness', 'Bags Under Eyes'];
    const maxIndex = prediction.indexOf(Math.max(...prediction));
    return labels[maxIndex];
  };

  return (
    <div className="file-upload-container">
      <h1>Upload Image for Diagnosis</h1>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
      />
      <button onClick={handleFileUpload} disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p className="error">{error}</p>}
      {diagnosis && (
        <div className="result">
          <h2>Diagnosis Result</h2>
          <p>{diagnosis}</p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;






