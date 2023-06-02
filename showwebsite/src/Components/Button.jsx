// Button.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Button = () => {
  const { showId } = useParams();
  const [showSummary, setShowSummary] = useState('');

  useEffect(() => {
    const fetchShowSummary = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
        const summary = response.data.summary;
        setShowSummary(summary);
     
      } catch (error) {
        console.error(error);
      }
    };

    fetchShowSummary();
  }, [showId]);

  return (
    <div>
      {showSummary ? (
        <div>
          <h3>Show Summary</h3>
          <p>{showSummary}</p>
        </div>
      ) : (
        <p>Loading show summary...</p>
      )}
    </div>
  );
};

export default Button;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const Button = () => {
//   const { showId } = useParams();
//   const [showSummary, setShowSummary] = useState('');

//   useEffect(() => {
//     const getShowSummary = async () => {
//       try {
//         const response = await axios.get(`https://api.tvmaze.com/shows/${showId}`);
//         const summary = response.data.summary;
//         setShowSummary(summary);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     getShowSummary();
//   }, [showId]);

//   return (
//     <div>
//       {showSummary ? (
//         <div>
//           <h3>Show Summary</h3>
//           <p>{showSummary}</p>
//         </div>
//       ) : (
//         <p>Loading show summary...</p>
//       )}
//     </div>
//   );
// };

// export default Button;