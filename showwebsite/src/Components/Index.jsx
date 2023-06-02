import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ShowSummary from './ShowSummary';

const Index = () => {
  const [shows, setShows] = useState([]);
  const [selectedShowId, setSelectedShowId] = useState(null);

  useEffect(() => {
    const getShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        const data = response.data;
        setShows(data);
      } catch (error) {
        console.error(error);
      }
    };

    getShows();
  }, []);

  const handleSeeMore = (showId) => {
    setSelectedShowId(showId);
  };

  return (
    <div className="container">
      {shows.map((show) => (
        <div className="card_item" key={show.show.id}>
          <div className="card_inner">
            <img src={show.show.image?.medium} alt="" />
            <div className="userName">{show.show.name}</div>
            <div className="userUrl">{show.show.language}</div>
            <button className="seeMore" onClick={() => handleSeeMore(show.show.id)}>See More</button>
          </div>
        </div>
      ))}
      {selectedShowId && <ShowSummary showId={selectedShowId} />}
    </div>
  );
};

export default Index;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';


// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Button from './Button';
// import ShowSummary from './ShowSummary';

// const Index = () => {
//     const [users, setUsers] = useState([]);

//     // we use axios method to fetch api (try and catch)
//     const getUsers = async () => {
//         try {
//             const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
//             const finalData = response.data;
//             setUsers(finalData);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     useEffect(() => {
//         getUsers();
//     }, []);


//     return (
//         <div className="container">
//             {users.map((curElem) => {
//                 const name = curElem.show.name;
//                 const avatarUrl = curElem.show.image?.medium;
//                 const language = curElem.show.language;
//                 const showId = curElem.show.id;
//                 return (
//                     <div className="card_item" key={curElem.show.id}>
//                         <div className="card_inner">
//                             <img src={avatarUrl} alt="" />
//                             <div className="userName">{name}</div>
//                             <div className="userUrl">{language}</div>
//                             <Link to={`/show-summary/${show.show.id}`}>
//                             {/* <Link to={"/button"}> before */}
//                                 <button className="seeMore">See More</button>
//                             </Link>
//                         </div>
//                     </div>
//                 );

//             })}
//         </div>
//     );
// };


// const App = () => {
//     return (
//       <Router>
//         <Route path="/" exact component={Index} />
//         <Route path="/show-summary/:showId" component={ShowSummary} />
//       </Router>
//     );
//   };

// export default Index;

