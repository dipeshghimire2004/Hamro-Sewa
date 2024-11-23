import React from 'react'
import { SlidersVertical } from 'lucide-react';
import { MdKeyboardArrowRight } from "react-icons/md";

const CategoryPage:React.FC = () => {
  return (
    <div>
        {/* sidebar */}
        <div className='w-1/4 border border-gray-500 rounded-2xl p-6'>
            <div className='max-h-7 flex justify-between pb-6 border-b-2'>
                <h1 className='font-extrabold'>Filters</h1>
                <SlidersVertical />
            </div>

            {/* products  use map while handeling api*/}
            <div className='border-b-2'>
                <div className='flex justify-between'>
                    <p>T-Shirts</p>
                    <MdKeyboardArrowRight />
                </div>
                <div className='flex justify-between'>
                    <p>Shirts</p>
                    <MdKeyboardArrowRight />
                </div>
            </div>
            {/* price range */}
            <div>
                <h1 className='font-bold'>Price</h1>
                <input type="range" />
            </div>


            {/* colors */}
            <div>
                <div>
                    <h1>Colors</h1>
                </div>
                <div className='border border-gray-600 rounded-full'>
                    1
                </div>
            </div>

            {/* size */}
            <div>
                <div>
                    <h1 className='font-bold'>Size</h1>
                </div>
                <div className='border border-gray-600 rounded-lg'>
                    xx-small
                </div>
            </div>

            <div>
                <div className='flex justify-between'>
                    <h1>Dress Style</h1>
                </div>
                <div className='flex justify-between'>
                    <p>Casual</p>
                    <MdKeyboardArrowRight />
                </div>
            </div>

        </div>
        <div>

        </div>
    </div>
  )
}

export default CategoryPage