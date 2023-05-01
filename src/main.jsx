import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main.jsx';
import Home from './Components/Home.jsx';
import Section from './Components/Section.jsx';
import Blog from './Components/Blog.jsx';
import Details from './Components/Details.jsx';
import Header from './Components/Header.jsx';
import HiHead from './Components/HiHead.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import RRouterProvider from './Components/RRouterProvider.jsx';
import Booking from './Components/Booking.jsx';
import SubDetails from './Components/SubDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Main></Main>,
    children:[
      // {
      //   path:"/",
      //   element:<Home></Home>
      // },
      {
        path:"/",
        element:<Section></Section>
      },
      {
        path:"/blog",
        element:<Blog></Blog>,
        loader:()=>fetch`http://localhost:5000/new`
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/blog/:id",
        element:<SubDetails></SubDetails>,
        loader:({params})=>fetch(`http://localhost:5000/new/${params.id}`)
      }
      
    ]
  },
 {
  path:"/",
  element:<HiHead></HiHead>,
  children:[
    {
      path:"/details",
      element:<Details></Details>,
      loader: ()=> fetch(`https://travel-guru-anirbanbanai.vercel.app/new`)
    },
    {
      path:"/booking",
      element:<Booking></Booking>
    }
  ]
 }
])


ReactDOM.createRoot(document.getElementById('root')).render(
 <RRouterProvider>
    <RouterProvider router={router}></RouterProvider>
 </RRouterProvider>
)
