import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom';
import OnSale from './pages/OnSale';
import NewArrival from './pages/NewArrival';
import Brands from './pages/Brands';
import Shop from './pages/Shop';
import Home from './pages/Home';

function App() {
  

  return (
    <Routes>
       <Route path="/" element={<Home />} /> 
      <Route path='/shop' element={<Shop/>}/>
      <Route path="/on-sale" element={<OnSale/>}/>
      <Route path='/new-arrival' element={<NewArrival/>}/>
      <Route path='brands' element={<Brands/>}/>
    </Routes>
  )
}

export default App
