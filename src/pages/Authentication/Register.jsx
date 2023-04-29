import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleCreate = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const img = form.img.value;
  
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then(result => {
        const newUser = result.user;

        console.log(newUser)

        return newUser
      })
    .catch(error => console.log(error))


  }
    return (
        <Container className='w-25'>
           <Form onSubmit={handleCreate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' required placeholder="Enter Name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name='img' required placeholder="Enter Image Url" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' required placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
                    <Form.Control name='password' required type="password" placeholder="Password" />
                    <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check onClick={(event)=>setAccepted(event.target.checked)} name='accept' type="checkbox" label={<>Accept <Link to='/terms'>Terms & Condition</Link></>} />
                </Form.Group>

      <Button disabled={!accepted} variant="primary" type="submit">
        Create Account
                </Button>
                <br />
                <Form.Text className='text-success'>Already Have an Account?<Link to='/login'>Login</Link></Form.Text>
    </Form>
        </Container>
    );
};

export default Register;