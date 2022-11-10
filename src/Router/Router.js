import { createBrowserRouter } from "react-router-dom";
import Update from "../Items/udate/Update";
import Main from "../Layouts/Main/Main";
import AddService from "../Pages/AddService/AddService";
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
                loader: ({params})=> fetch(`http://localhost:5000/service/${params.id}`),
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/reviews',
                element: <Reviews></Reviews>
            },
            {
                path: '/update/:id',
                loader: async({params})=>await fetch(`http://localhost:5000/update/${params.id}`),
                element: <Update></Update>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            }
        ]
    }
    
    
    
]);


export default router;