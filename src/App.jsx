 import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';

const App =() => {
   

  return (
    <>
       <Routes>
       <Route path="/" element={<Home />} />
      </Routes>

    </>
  ) ;
}

export default App ;
