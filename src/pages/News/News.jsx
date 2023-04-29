import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInside from './EditorsInside';

const News = () => {
    const news = useLoaderData()
    const {title, details, image_url, author, total_view, rating, category_id}= news
    return (
        <div>
            <Card>
            <Card.Img src={image_url}></Card.Img>
                
                <Card.Body>
                    
                    <Card.Title>{title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger"><FaArrowLeft/>All News In This Category </Button></Link>
      </Card.Body>
            </Card>
            <EditorsInside/>
        </div>
    );
};

export default News;