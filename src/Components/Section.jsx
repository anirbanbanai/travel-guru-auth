import React from 'react';
import re from './images/Rectangle 26.png'
import re2 from './images/Rectangle 27.png'
import re3 from './images/Rectangle 28.png'

const Section = () => {
    return (
        <div className='flex items-center'>
           {/* <div>
            <h2 className='text-4xl font-semibold'>Lets starts Coxs Bazar</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum,</p>
           </div> */}
           <div className='grid grid-cols-3 items-center justify-center'>
            <div><img className='p-4 hover:-rotate-90 
            duration-1000 hover:border-2 rounded-xl' src={re} alt="" /></div>
            <div><img className='p-4 hover:-rotate-90 hover:border-4 transition ease-linear duration-1000 hover:border-yellow-400 rounded-xl' src={re2} alt="" /></div>
            <div><img className='p-4 hover:backdrop-hue-rotate-180  hover:border-2 duration-1000 rounded-xl' src={re3} alt="" /></div>
            <div><img className='p-4 hover:-rotate-1  hover:border-2 rounded-xl' src={re3} alt="" /></div>
            <div>
                <img className='p-4 hover:-rotate-45 transition ease-in duration-700   hover:border-2 rounded-xl' src={re} alt="" />
                
                </div>
            <div><img className='p-4 hover:-rotate-1  hover:border-2 rounded-xl' src={re2} alt="" /></div>
            <div><img className='p-4 hover:-rotate-1  hover:border-2 rounded-xl' src={re3} alt="" /></div>
            <div><img className='p-4 hover:-rotate-12
            transition ease-in duration-150  hover:border-2 rounded-xl' src={re} alt="" /></div>
            <div><img className='p-4 hover:-rotate-1  hover:border-2 rounded-xl' src={re2} alt="" /></div>
            <div><img className='p-4 hover:-rotate-1  hover:border-2 rounded-xl' src={re3} alt="" /></div>
            <div><img className='p-4 hover:-rotate-1  hover:border-2 rounded-xl' src={re} alt="" /></div>
            <div><img className='p-4 hover:-rotate-3 
            transition ease-in duration-700  hover:border-2 rounded-xl' src={re2} alt="" /></div>
            {/* <div><img src={re2} alt="" /></div>
            <div><img src={re3} alt="" /></div> */}
           </div>
        </div>
    );
};

export default Section;