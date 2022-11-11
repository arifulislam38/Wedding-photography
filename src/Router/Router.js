import { createBrowserRouter } from "react-router-dom";
import Update from "../Items/udate/Update";
import Main from "../Layouts/Main/Main";
import AddService from "../Pages/AddService/AddService";
import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProtectedPage from "../Pages/ProtectedPage/ProtectedPage";
import Register from "../Pages/Register/Register";
import Reviews from "../Pages/Reviews/Reviews";
import ServiceDetails from "../Pages/serviceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                element:<Services></Services>
            },
            {
                path: '/service/:id',
                loader: ({params})=> fetch(`https://wedding-photography-123.vercel.app/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/reviews',
                element: <ProtectedPage><Reviews></Reviews></ProtectedPage>
            },
            {
                path: '/update/:id',
                loader: async({params})=>await fetch(`https://wedding-photography-123.vercel.app/update/${params.id}`),
                element: <Update></Update>
            },
            {
                path: '/addservice',
                element: <ProtectedPage><AddService></AddService></ProtectedPage>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
    
    
    
]);


export default router;