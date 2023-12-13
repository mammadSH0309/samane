import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../components/NotFound";
import TwiiterPage from "../pages/TwiiterPage";
import TelegramPage from "../pages/TelegramPage";




export const router = createBrowserRouter([
    {
        path : '/',
        element: <App/>
    },
    {
        path : '/login',
        element : <LoginPage/>
    },
    {
        path : '/dashboard',
        element : <DashboardPage/>, 
        children : [
            {
                path : '' ,
                element : <></>

            },
            {
                path : 'twitter/' ,
                element : <TwiiterPage/>

            },
            {
                path : 'telegram/' ,
                element : <TelegramPage/>

            }
            
           
        ]
    },
    {
        path : '*',
        element : <NotFound/>
    }
])