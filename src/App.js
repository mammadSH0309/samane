import { Input } from "antd";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";



function App() {
  
  const [isAuth , setIsAuth] = localStorage.getItem('user') || ''
  const navigate = useNavigate()
  
  useEffect(()=> {
   if (isAuth){
      navigate('/dashboard')
    }else {
      navigate('/login')
    }
  })
  
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
