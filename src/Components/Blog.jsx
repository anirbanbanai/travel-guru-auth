import React from 'react';
import log from './images/Sajek.png'
import log1 from './images/Sreemongol.png'
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";
import SubBlog from './SubBlog';

const Blog = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='grid grid-cols-3'>
            <div className='col-span-1'>
                <h2>COxs Bazar</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut perferendis eum, eaque minus veritatis deserunt possimus distinctio. Reiciendis assumenda sint tempore non modi obcaecati repudiandae repellat rem! A, soluta?</p>
            </div>
            <div className='col-span-2 grid grid-cols-2'>
                {
                    data.map(m => <SubBlog main={m} key={m.id}></SubBlog>)
                }
            </div>
        </div>
    );
};

export default Blog;