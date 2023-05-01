import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import lo from './images/Rectangle 1.png'

const Main = () => {
    return (
        <div className='w-full h-full op  min-h-screen' style={{ backgroundImage: `url("https://images.unsplash.com/photo-1590603740183-980e7f6920eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y294JTIwYmF6YXJ8ZW58MHx8MHx8&w=1000&q=80")` , opacity:'revert-layer' , height:"100vh", backgroundSize:"cover"}}>
             <Header></Header>
            <Outlet></Outlet>
        </div>


    );
};

export default Main;