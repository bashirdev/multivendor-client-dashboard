import React, { useEffect, useState } from 'react';
import { BiLogOutCircle } from "react-icons/bi";
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { getNav } from '../navigation';

const Sidebar = ({showSidebar, setShowsidebar}) => {
    const {role} = useSelector(state=> state.auth)
    const [allNav ,setAllName] = useState([]);
    const {pathname} = useLocation();
    useEffect(()=>{
        const navs=getNav(role)
        setAllName(navs) 
    },[role])

   
    return (
        <div >
           <div onClick={()=> setShowsidebar(false)} className={` fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#8b909480] top-0 left-0 z-10`}>
               
           </div>
 <div className={`w-[260px] fixed bg-[#e6e7fb] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%) transition-all] 
  ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}
 `}>
     <div className='h-[70px] flex justify-center items-center'>
         <Link to="/" className='w-[180px] h-[50px]'>
            <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="" srcset="" />
         </Link>
     </div>
     <div className='px-[16px]'>
        <ul>
            {
                allNav.map((n,i)=> <li 
                key={i}
                className=''
                >
                <Link  to={n.path} className={`flex justify-start items-center gap-2 hover:pl-4 transition-all w-full mb-1 ${pathname === n.path ? 'bg-blue-600 shadow-indigo-500/50 text-white duration-500 ' : 'text-[#030811] font-bold duration-200'} px-[12px] py-[9px]`} >

                    <span>{n.icon}</span>
                    <span>{n.title}</span>
                </Link>
                </li>)
            }
            <li>
                <button className='flex justify-start items-center gap-2 hover:pl-4 transition-all w-full mb-1 text-[#030811] font-bold duration-200 px-[12px] py-[9px]'>
                    <span><BiLogOutCircle /></span>
                    <span>Logout</span>
                </button>
            </li>
        </ul>

     </div>

 </div>
        </div>
    );
};

export default Sidebar;