import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react'
import { Button } from 'antd';

function Toastify({title}) {

    const notify = () => toast(title, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  return (
   <div>
    <ToastContainer/>
   </div>
  )
}

export default Toastify