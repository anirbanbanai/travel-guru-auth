import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const info = useLoaderData();
    console.log(info);
   
    return (
        <div>
            <h2>Your details come here</h2>
            <div>
                
              
            </div>
        </div>
    );
};

export default Details;<h2>Your details come here</h2>