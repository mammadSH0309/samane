import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import { ConfigProvider, Layout } from 'antd';
import { Provider } from 'react-redux';
import { store } from './query/Store';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
<ConfigProvider 
  theme={{
    token: {
      fontFamily :'khameneiiRegular',
    },
    
  }}>
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
</ConfigProvider>
  </Provider>
);
