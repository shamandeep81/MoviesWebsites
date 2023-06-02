import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from './Button';

const Index = () => {
    const [users, setUsers] = useState([]);

    // we use axios method to fetch api (try and catch)
    const getUsers = async () => {
        try {
            const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
            const finalData = response.data;
            setUsers(finalData);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <div className="container">
            {users.map((curElem) => {
                const name = curElem.show.name;
                const avatarUrl = curElem.show.image?.medium;
                const language = curElem.show.language;
                return (
                    <div className="card_item" key={curElem.show.id}>
                        <div className="card_inner">
                            <img src={avatarUrl} alt="" />
                            <div className="userName">{name}</div>
                            <div className="userUrl">{language}</div>
                            <Link to={"/button"}>
                                <button className="seeMore">See More</button>
                            </Link>
                        </div>
                    </div>
                );

            })}
        </div>
    );
};

export default Index;

