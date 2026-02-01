
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { Login } from './Components/Home/Login';
import BecomeADriverForm from './Pages/BecomeADriver';

function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/Become-a-driver' element={<BecomeADriverForm/>} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
