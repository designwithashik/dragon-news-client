import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <><h2>Wait a bit</h2>
            <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>

        </>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate replace state={{from: location}} to='/login'/>
    );
};

export default PrivateRoute;

/**
 * ----------------------
 * STEPS
 * ----------------------
 * 1. Check If user is logged in or not;
 * 2. if user is logged in, then allow them to visit the site
 * 3. else redirect to log In Page
 * 4. set the private route to routes
 */