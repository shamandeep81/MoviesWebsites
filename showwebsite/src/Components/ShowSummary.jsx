import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowSummary = () => {
    const showId = props.match.params.showId;
  const [showSummary, setShowSummary] = useState('');

  useEffect(() => {
    const getShowSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        const summary = response.data.summary;
        setShowSummary(summary);
      } catch (error) {
        console.error(error);
      }
    };

    getShowSummary();
  }, [showId]);

  return (
    <div>
      <h3>Show Summary</h3>
      {showSummary ? (
        <p>{showSummary}</p>
      ) : (
        <p>Loading show summary...</p>
      )}
    </div>
  );
};

export default ShowSummary;
