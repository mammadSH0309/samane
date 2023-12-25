import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../components/NotFound";
import TwiiterPage from "../pages/TwiiterPage";
import TelegramPage from "../pages/TelegramPage";
import KhabarPage from "../pages/KhabarPage";
import OstanNamaPage from "../pages/OstanNamaPage";
import MainPage from "../pages/MainPage";
import RasadPage from "../pages/RasadPage";
import Revayat from "../pages/Revayat";




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
                element : <MainPage/>,
                children:[
                    {
                        path : 'twitter/' ,
                        element : <TwiiterPage/>
        
                    },
                    {
                        path : 'telegram/' ,
                        element : <TelegramPage/>
        
                    },
                ]

            },
            
            {
                path : 'ostanNama',
                element : <OstanNamaPage/>
            },
            {
                path : 'revayat',
                element : <Revayat/>
            },
            // {
            //     path : 'khabar/' ,
            //     element : <KhabarPage/>

            // },
            {
                path : 'rasad/' ,
                element : <RasadPage/>

            },
           

            
           
        ]
    },
    {
        path : '*',
        element : <NotFound/>
    }
])