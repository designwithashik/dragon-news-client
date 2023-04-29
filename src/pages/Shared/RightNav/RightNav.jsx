import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa'
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='my-2' variant='outline-primary'><FaGoogle/> Login With Google</Button>
            <Button variant='outline-success'><FaGithub /> Login With Github</Button>
            <div className="my-4">
                <h4>Find Us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                </ListGroup>
                <QZone />
                <div className="">
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;