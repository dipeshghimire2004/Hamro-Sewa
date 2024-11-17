// import { useState } from 'react'
// import products from '../../utils/products'
// import ProductCard from '../../components/ProductCard'
// import { Link } from 'react-router-dom'


// const ProductList:React.FC=()=>{
//     const [showAllProducts, setShowAllProducts]=useState(false);

//     const displayAll=showAllProducts?products: products.slice(0,4);

//     return(
//         <div className='w-full  '>
//             <h1 className='flex justify-center items-center font-bold text-4xl'>NEW ARRIVALS</h1>
//             <div  className=' mx-4 mt-4 grid grid-cols-2 lg:grid-cols-4'>
//                 {displayAll.map((product, index)=>(
//                     <div key={product.id} className='product-card'>
//                         <Link to={`/product/${product.id}`}>                        
//                             <ProductCard
//                                 key={index}
//                                 name={product.name}
//                                 markedPrice={product.markedPrice}
//                                 // description={product.description}
//                                 imageUrl={product.imageUrl}
//                                 discount={product.discount}
//                                 sellingPrice={product.sellingPrice}
//                                 rating={product.rating}
//                             />
//                         </Link>
//                     </div>
                    
                    
//                 ))}
               
//             </div>
//             <div className='flex justify-center'>
                
//                 <button 
//                     onClick={()=>setShowAllProducts(!showAllProducts)}
//                     className='bg-transparent hover:bg-gray-100 border border-stone-200 rounded-full py-1 px-6 transition-all font-satoshi'>{showAllProducts?"Show less":"View All"}</button>
//             </div>
//         </div>
//     )
// }

// export default ProductList