import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from 'react-fast-marquee'
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {
    return (
        <Container className='mt-4'>
            <div className="text-center">
                <img src={logo} />
                <p className="text-secondary"><small>Journalism Without Fear or Favor</small></p>
                <p className='text-secondary'><span className="fw-semibold text-black">{moment().format("dddd")}, </span>{moment().format("MMMM D, YYYY")}</p>
            </div>
            <Container className="text-center d-flex p-3 bg-grey-300">
                <Button variant='danger'>Latest</Button>
                <Marquee className='text-danger' speed={50}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis vel. Rerum nihil nobis voluptate, porro blanditiis sit vero amet possimus illo soluta! Quos perspiciatis omnis, mollitia exercitationem expedita fuga!</Marquee>
                
            </Container>
            
        </Container>
    );
};

export default Header;