import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SubDetails = () => {
    const data = useLoaderData()
    // console.log(data.location)
    return (
        <div className='bg-yellow-400 m-14 rounded-2xl p-4 w-[50%] mx-auto'>
            <p className='text-2xl'>{data.name}</p>
            <p className='text-xl'>{data.location}</p>
            <img className='w-[400px] h-[350px] mx-auto' src={data.img} alt="" />
            <p>{data.description}</p>
        </div>
    );
};

export default SubDetails;