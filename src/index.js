import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

import { router } from './router';
import { ConfigProvider, Switch } from 'antd';
import { Provider } from 'react-redux';
import { store } from './query/Store';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import TwiiterPage from './pages/TwiiterPage';
import TelegramPage from './pages/TelegramPage';
import OstanNamaPage from './pages/OstanNamaPage';
import Revayat from './pages/Revayat';
import RasadPage from './pages/RasadPage';
import MainPage from './pages/MainPage';
import AkhbarCityPage from './pages/AkhbarCityPage';
import LahzeNegarPage from './pages/LahzeNegarPage';
import HotNews from './pages/HotNews';
import LiveNews from './pages/LiveNews';
import EkhtesasNews from './pages/EkhtesasNews';




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

    <Route path='/dashboard' element={<DashboardPage/>}>
      <Route index element={<MainPage/>}/>
      
      <Route path='khabar'>
      <Route  element={<LahzeNegarPage/>} index/>
      {/* <Route index element={<LahzeNegarPage/>}/> */}
     
      
      <Route path='hotnews' element={<HotNews/>}/>
      <Route path='livenews' element={<LiveNews/>}/>
      <Route path='ekhtesasnews' element={<EkhtesasNews/>}/>
      
      

      </Route>


      <Route path='twitter' element={<TwiiterPage/>}/>
      <Route path='telegram' element={<TelegramPage/>}/>
      <Route path='ostanNama/' element={<OstanNamaPage/>}>
       
       <Route path=':city' element={<AkhbarCityPage/>}/>
       
      </Route>
      <Route path='revayat' element={<Revayat/>}/>
      <Route path='rasad' element={<RasadPage/>}/>
    </Route>
    <Route path='*' element={(<h1>not found</h1>)}/> 
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