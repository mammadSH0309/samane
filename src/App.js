import { Input } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setUser } from "./slices/accountSlice";



function App() {
  const navigate = useNavigate()
  const [isauth , setIsAuth ] = useState(localStorage.getItem('user'))

  useEffect(()=>{
    navigate('/login')
  })

  useEffect(()=> {
    if(isauth){
      navigate('/login')
    }
  }, [isauth])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
