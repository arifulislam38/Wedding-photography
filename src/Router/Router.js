import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import ProtectedPage from "../Pages/ProtectedPage/ProtectedPage";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";

const router = createBrowserRouter([
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
        element: <ProtectedPage><Services></Services></ProtectedPage>
    }
]);


export default router;