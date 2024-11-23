// import './App.css'
import Navbar from './components/Header/Navbar'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import OnSale from './pages/OnSale';
import NewArrival from './pages/NewArrival';
import Brands from './pages/Brands';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Footer from './components/Footer';
import ProductDetail from './features/product/ProductDetails';
import Cart from './features/cart/Cart';
import Product from './pages/Product';
import CategoryPage from './pages/CategoryPage';
const App:React.FC=()=> {
  

  return (
    <Router>
      <Navbar/>
      <main className="p-6 dark:bg-gray-950 dark:text-white">
    <Routes>
       <Route path="/" element={<Home />} /> 
      <Route path='/shop' element={<Shop/>}/>
      <Route path="/on-sale" element={<OnSale/>}/>
      <Route path='/new-arrival' element={<NewArrival/>}/>
      <Route path='/brands' element={<Brands/>}/>

      <Route path="/register" element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>

      <Route path='/yourcart' element={<Cart/>}/>

      <Route path='/productform' element={<Product/>}/>
      
      <Route path='/categorypage' element={<CategoryPage/>}/>
    </Routes>
    </main>
    
    <Footer/>
    </Router>
  )
}

export default App
