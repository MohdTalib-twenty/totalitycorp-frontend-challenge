
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Screens/Home';
import LogIn from './Screens/LogIn';
import Signup from './Screens/Signup';
import { CartProvider } from './Components/ContextReducer';
import Cart from './Screens/Cart';
import Shipping from './Screens/Shipping';
function App() {
  return (
   <CartProvider>
    <BrowserRouter>
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/shipping' element={<Shipping/>}/> 
      </Routes>
   </BrowserRouter>
   </CartProvider>
  );
}

export default App;
