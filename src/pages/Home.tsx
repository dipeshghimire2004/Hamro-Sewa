import React from 'react'
import HomePage from '../features/home/HomePage'
import ProductList from '../features/product/ProductList'

const Home:React.FC = () => {
  return (
    <div className=''>
        <HomePage/>
        <ProductList/>
    </div>
  )
}

export default Home