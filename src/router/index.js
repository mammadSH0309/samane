import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import DashboardPage from "../pages/DashboardPage";
import NotFound from "../components/NotFound";

import TelegramPage from "../pages/TelegramPage";
import KhabarPage from "../pages/KhabarPage";
import OstanNamaPage from "../pages/OstanNamaPage";
import MainPage from "../pages/MainPage";
import RasadPage from "../pages/RasadPage";
import Revayat from "../pages/Revayat";
import TwitterPage from "../pages/TwitterPage";
import LahzeNegarPage from "../pages/LahzeNegarPage";
import HotNews from "../pages/HotNews";
import LiveNews from "../pages/LiveNews";
import PrivateNews from "../pages/PrivateNews";
import InstagramPage from "../pages/InstagramPage";
import BalePage from './../pages/BalePage';
import RubikaPage from "../pages/RubikaPage";
import EitaaPage from "../pages/EitaaPage";




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
                        element : <TwitterPage/>
        
                    },
                    {
                        path : 'telegram/' ,
                        element : <TelegramPage/>
        
                    },
                    {
                        path : 'instagram/' ,
                        element : <InstagramPage/>
        
                    },
                    {
                        path : 'bale/' ,
                        element : <BalePage/>
        
                    },
                    {
                        path : 'rubika/' ,
                        element : <RubikaPage/>
        
                    },
                    {
                        path : 'eitaa/' ,
                        element : <EitaaPage/>
        
                    },
                ]

            },
            
            {
                path : 'ostanNama/',
                
                element : <OstanNamaPage/>,
               
                  // and the action
                  
                
            },
            {
                path : 'khabar/',
                
                element : <LahzeNegarPage/>,
              children:[
                    {
                        path : 'hotnews/' ,
                        element : <HotNews/>
        
                    },
                    {
                        path : 'livenews/' ,
                        element : <LiveNews/>
        
                    },
                    {
                        path : 'privatenews/' ,
                        element : <PrivateNews/>
        
                    }
                ]
                  // and the action
                  
                
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