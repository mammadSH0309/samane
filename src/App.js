
import { useEffect, useState } from "react";

import { useNavigate} from "react-router-dom";




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
