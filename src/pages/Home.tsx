import React from 'react'
import HomePage from '../features/home/HomePage'
import ProductList from '../features/product/ProductList'
import TopSelling from '../features/product/TopSelling'
import DressStyle from '../features/product/DressStyle'

const Home:React.FC = () => {
  return (
    <div className=''>
        <HomePage/>

        <ProductList/>
        <h1 className='border-b-2'></h1>
        <TopSelling/>
        <DressStyle/>
    </div>
  )
}

export default Home