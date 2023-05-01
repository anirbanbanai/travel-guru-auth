import React from 'react';
import { Link } from 'react-router-dom';

const SubBlog = ({main}) => {

    return (
        <div className='bg-slate-100 p-3 m-3 rounded-2xl hover:-rotate-6 transition ease-in duration-300  hover:border-4 hover:bg-slate-200'>
            <p className='text-3xl font-semibold'>{main.name}</p>
            <p className='text-xl'>{main.location}</p>
            {/* <p>{main.description}</p> */}
            <img className=' mx-auto w-[250px] h-[180px]' src={main.img} alt="" />
            <Link to={`/blog/${main.id}`}><button  className='btn btn-warning mt-2'>Show details</button></Link>
        </div>
    );
};

export default SubBlog;