import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const info = useLoaderData();
    console.log(info);
    const match = info.find(m=> m.name === info.name);
    console.log(match)
    return (
        <div>
            <h2>Your details come here</h2>
            <div>
                {
                    // match.filter(m=><p>{m.country}</p>)
                }
                {
                    info.map(m=><div>
                        <p className='text-2xl'>{m.country}</p>
                        <img src={m.img} alt="" />
                        <h3 className='text-xl'>{m.description}</h3>
                        <p className='text-4xl'>{m.continent}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Details;<h2>Your details come here</h2>