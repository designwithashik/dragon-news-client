import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem maiores accusamus eum laudantium voluptatibus eos quibusdam error, fugiat voluptates harum veritatis praesentium esse quod dicta, molestias modi reprehenderit? Laboriosam, eveniet? <Link to='/register'>Go Back</Link></p>
        </div>
    );
};

export default Terms;