import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [catagories, setCatagories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/categories')
            .then(res => res.json())
            .then(data => setCatagories(data))
        .catch(error=>console.log(error))
    }, [])

    console.log(catagories)
    return (
        <div>
            <h4>All Catagories</h4>
            {
                catagories.map(category => <p key={category.id}><Link to={`/category/${category.id}`} className='p-3 text-decoration-none text-secondary'>{category.name}</Link></p>)
            }
        </div>
    );
};

export default LeftNav;