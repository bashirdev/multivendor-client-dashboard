import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PropagateLoader } from "react-spinners";
import { admin_login, messageClear } from '../../store/Reducers/authReducer';
import { overrideStyle } from '../../utils/utils';
const AdminLogin = () => {
    const dispatch =useDispatch()
    const navigate=useNavigate()
    const {loader, errorMessage, successMessage}  = useSelector(state => state.auth)
    
  const [state, setState] = useState({
    email:'',
    password:'',
  })
    const inputHandler=(e)=>{
        e.preventDefault();
        setState((prev)=>(
            {
                ...prev,
                [e.target.name] : e.target.value
            }
        ))
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        dispatch(admin_login(state))
        
    }

    useEffect(() => {
      if(errorMessage){
     
        toast.error(errorMessage)
        dispatch(messageClear())
      }
      if(successMessage){
        toast.success(successMessage)
        dispatch(messageClear())
        navigate('/')
      }
    },[errorMessage, dispatch, successMessage, navigate]);

 


    return (
        <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
         <div className="w-[350px] text-[#ffffff] p-2">
            <div className="bg-[#6f68d1] p-4 rounded-md ">
             <div className='h-[70px] flex justify-center items-center'>
                 <div className='w-[180px] h-[50px]'>
                    <img className='w-full h-full' src="http://localhost:3000/images/logo.png" alt="Logo" srcset="" />
                 </div>
             </div>
                 <form onSubmit={handleOnSubmit}>
                    
                     <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input onChange={inputHandler} value={state.email} className='py-2 px-3 outline-none border border-slate-700 bg-transparent rounded-md' type="email" name='email' placeholder='email' id='email' required />
                     </div>
                     <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">Password</label>
                        <input onChange={inputHandler} value={state.password} className='py-2 px-3 outline-none border border-slate-700 bg-transparent rounded-md' type="password" name='password' placeholder='password' id='password' required />
                     </div>
                   

                     <button disabled={loader ? true : false} className='py-3 px-7 bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg rounded-md mb-3'>
                      {loader ?  <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Login"}
                     </button>
                
                 </form>
            </div>
         </div>
        </div>
    );
};

export default AdminLogin;