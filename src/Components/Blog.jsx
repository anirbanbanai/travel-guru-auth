import React from 'react';
import log from './images/Sajek.png'
import log1 from './images/Sreemongol.png'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const Blog = () => {
    return (
        <div>
            <h4 className='text-3xl'>This is blog</h4>
            <div className='grid grid-cols-4 items-center'>
                <div className='col-span-2 p-5 rounded-xl opacity-50text-center hover:bg-rose-400 '>
                    <h2 className='text-5xl font-bold '>Coxs Bazar</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fugit expedita officia veritatis ipsa! Commodi ullam ut fugit pariatur quisquam!</p>
                    <Link to='/booking' className='btn btn-warning'>Booking
                    <AiOutlineArrowRight className='text-2xl ml-2'/>
                    </Link>
                </div>
                <div className='col-span-1 hover:-rotate-3 transition ease-in duration-300 hover:border-4  rounded-xl'>
                    <img className='p-3 mx-auto' src={log} alt="" />
                    <Link to='/details'><h2 className='btn'>Coxx BAzar</h2></Link>
                </div>
                <div className='col-span-1 hover:-rotate-3 transition ease-in duration-300 hover:border-4  rounded-xl'>
                    <img className='p-3 mx-auto' src={log1} alt="" />
                    <Link to='/details'><h3 className='btn text-2xl text-red-500'>Sreemongol</h3></Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;