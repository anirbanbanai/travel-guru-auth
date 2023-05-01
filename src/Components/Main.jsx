import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import lo from './images/Rectangle 1.png'

const Main = () => {
    return (
        <div className='w-full h-full op  min-h-screen' style={{ backgroundImage: `url("https://i.ibb.co/9ZsK9N6/Rectangle-1.png")` , opacity:'revert-layer' , height:"100%", backgroundSize:"cover"}}>
             <Header></Header>
            <Outlet></Outlet>
        </div>


    );
};

export default Main;