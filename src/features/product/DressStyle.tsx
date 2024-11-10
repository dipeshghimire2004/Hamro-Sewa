import React from 'react'
import casual from '../../assets/images/casualmain.png'
import formal from '../../assets/images/Fomalmain.png'
import party from '../../assets/images/Partymain.png'
import gym from '../../assets/images/gymmain.png'


const DressStyle = () => {
  return (
    <div>
        <div className=' bg-gray-300 rounded-xl max-h-[866px] max-w-[1239px] '>
            <h1 className='pt-24 font-bold text-4xl text-center '>BROWSE BY DRESS STYLE</h1>
            <div className='space-y-1 mx-20 pb-20'>
                <div className='flex gap-2'>
                    <div className='max-h-[289px]'>
                        <img src={casual} alt="casual"  className='rounded-xl object-cover overflow-hidden ' />
                    </div>
                    <div className='max-h-[289px]'>
                        <img src={formal} alt="formal" className='rounded-xl object-cover overflow-hidden ' />
                    </div>
                </div>

                <div className='flex gap-2 '>
                    <div className='max-h-[289px]'>
                        <img src={party} alt="party"  className='rounded-xl object-cover overflow-hidden '/>
                    </div>
                    <div className='max-h-[289px]'>
                        <img src={gym} alt="gym" className='rounded-xl object-cover overflow-hidden ' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DressStyle