import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { PropagateLoader } from "react-spinners";
import { messageClear, seller_login } from '../../store/Reducers/authReducer';
import { overrideStyle } from '../../utils/utils';

const Login = () => {
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const {loader, errorMessage, successMessage} = useSelector(state=> state.auth)
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
            dispatch(seller_login(state))
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
                 <h2 className='text-xl mb-3 font-bold '>Welcome to Ecommerce</h2>
                 <p className='text-sm mb-3 font-medium '>Please Login your account</p>
                 <form onSubmit={handleOnSubmit}>
                    
                     <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="email">Email</label>
                        <input onChange={inputHandler} value={state.email} className='py-2 px-3 outline-none border border-slate-700 bg-transparent rounded-md' type="email" name='email' placeholder='email' id='email' required />
                     </div>
                     <div className='flex flex-col w-full gap-1 mb-3'>
                        <label htmlFor="password">Password</label>
                        <input onChange={inputHandler} value={state.password} className='py-2 px-3 outline-none border border-slate-700 bg-transparent rounded-md' type="password" name='password' placeholder='password' id='password' required />
                     </div>
                   

                     <button type='submit' disabled={loader ? true : false} className='py-3 px-7 bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg rounded-md mb-3'>
                      {loader ?  <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Sign In"}
                     </button>
                 <div className='flex items-center mb-3 gap-3 justify-center'>
                      <p>Do'nt Have an account ? <Link className='font-bold' to='/register'>Sign Up</Link></p>
                 </div>
                 <div className="w-full flex  justify-center items-center mb-3">
                   <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                   <div className="w-[10%] flex justify-center items-center">
                    <span className='pb-1'>Or</span>
                   </div>
                   <div className="w-[45%] bg-slate-700 h-[1px]"></div>
                 </div>

                 <div className="flex justify-center items-center gap-3">
                    <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center items-center cursor-pointer overflow-hidd135'>
                        <span><FaGoogle /></span>  
                    </div>
                    <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center items-center cursor-pointer overflow-hidden'>
                        <span><FaFacebookF /></span>  
                    </div>
                 </div>
                 </form>
            </div>
         </div>
        </div>
    );
};

export default Login;