import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News";
import Category from "../pages/Home/Category/Catagory";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/Terms/Terms";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>

            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/terms',
                element: <Terms/>
            }
        ]
    },
    {
        path: '/category',
        element: <Main />,
        children: [
            // {
            //     path: '/',
            //     element: <Category />,
            //     loader: ()=>fetch('http://localhost:3000/news')
            // },
            {
                path: ':id',
                element: <Category />,
                loader: ({params})=>fetch(`http://localhost:3000/categories/${params.id}`)
            }
            
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
])