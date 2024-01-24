import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import { store } from './query/Store';
import DashboardPage from './pages/DashboardPage';

import TelegramPage from './pages/TelegramPage';
import OstanNamaPage from './pages/OstanNamaPage';
import Revayat from './pages/Revayat';
import RasadPage from './pages/RasadPage';
import MainPage from './pages/MainPage';
import AkhbarCityPage from './pages/AkhbarCityPage';
import LahzeNegarPage from './pages/LahzeNegarPage';
import LoginPage from './pages/LoginPage';
import HotNews from './pages/HotNews';
import LiveNews from './pages/LiveNews';

import InstagramPage from './pages/InstagramPage';
import BalePage from './pages/BalePage';
import TwitterPage from './pages/TwitterPage';
import PrivateNews from './pages/PrivateNews';
import { Navigate, RouterProvider } from 'react-router-dom/dist';
import { router } from './router/index';
import NotFound from './components/NotFound';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<ConfigProvider 
  theme={{
    token: {
      fontFamily :'khameneiiRegular',
    },
    
  }}>
    
  <BrowserRouter >
    <Routes>
    <Route path='login' element={<LoginPage/>}/>
    <Route path='/' element={<Navigate to={'/dashboard/'} />}/>
    <Route path='/dashboard' element={<DashboardPage/>}>

    <Route path='homepage' element={<MainPage/>}>
    <Route path='twitter' element={<TwitterPage/>}/>
    <Route path='telegram' element={<TelegramPage/>}/>
    <Route index path='instagram' element={<InstagramPage/>}/>
    <Route path='bale' element={<BalePage/>}/>
    </Route>
     

   

    
   
      
      
      <Route path='khabar'>
      <Route  element={<LahzeNegarPage/>} index/>
      
     
      
      <Route path='hotnews' element={<HotNews/>}/>
      <Route path='livenews' element={<LiveNews/>}/>
      <Route path='privatenews' element={<PrivateNews/>}/>
      
      

      </Route>


      

      <Route path='ostanNama/' element={<OstanNamaPage/>}>
       
       <Route path=':city' element={<AkhbarCityPage/>}/>
       
      </Route>
      <Route path='revayat' element={<Revayat/>}/>
      <Route path='rasad' element={<RasadPage/>}/>
    </Route>
    <Route path='*' element={<NotFound/>}/> 
    </Routes>
    

  </BrowserRouter>
</ConfigProvider>
  </Provider>
);






// root.render(
//   <Provider store={store}>
// <ConfigProvider 
//   theme={{
//     token: {
//       fontFamily :'khameneiiRegular',
//     },
    
//   }}>
//   <RouterProvider router={router}>
//       <LoginPage />
//   </RouterProvider>
// </ConfigProvider>
//   </Provider>
// );