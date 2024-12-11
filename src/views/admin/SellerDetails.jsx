import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { seller_active_deactive } from '../../store/Reducers/sellerReducer';

const SellerDetails = () => {
   const dispatch=useDispatch()
    const [status, setStatus] = useState(null)
   
    const handlePermission=(e)=>{
      e.preventDefault()
      dispatch(seller_active_deactive(status))
    }
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <h1 className='text-[20px] font-bold mb-3 '>Seller Request</h1>
            <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
                 <div className="w-full flex flex-wrap text-[#d0d2d6] gap-3">
                     <div className="w-3/12 flex justify-start items-start py-3">
                        <div>
                             <img className='w-full h-[230px]' src="http://localhost:3000/images/demo.jpg" alt="" srcset="" />
                        </div>
                     </div>
                     <div className="w-4/12 ">
                        <div className='px-0 md:px-5 py-2  '>
                         <div className='py-2 text-lg'>

                         <h2 >Basic Info</h2>
                         </div>     
                        <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md">
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Name: </span>
                             <span>Bashir Ahammed</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Email: </span>
                             <span>bashir@gmail.com</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Role: </span>
                             <span>Seller</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Status: </span>
                             <span>Active</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Payment Status: </span>
                             <span>Active</span>
                          </div>

                        </div>
                        </div>
                     </div>
                     <div className="w-4/12  ">
                        <div className='px-0 md:px-5 py-2'>
                         <div className='py-2 text-lg'>
                           <h2>Address</h2>
                         </div>
                        <div className="flex justify-between text-sm flex-col gap-2 p-4 bg-[#9e97e9] rounded-md">
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Shop Name: </span>
                             <span>Smart Dukan</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>Divission: </span>
                             <span>Cumilla</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>District: </span>
                             <span>Cumilla</span>
                          </div>
                          <div className="flex gap-2 font-bold text-[#010101]">
                             <span>State: </span>
                             <span>Chitagong</span>
                          </div>
                         

                        </div>
                        </div>
                     </div>
                    
                 </div>
                 <div>
                    <form onSubmit={handlePermission}>
                        <div className='flex gap-4 py-3'>
                            <select onChange={(e)=> setStatus(e.target.value)} name="" id="" className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6] '>
                                 <option value="">--Select Status--</option>
                                 <option value="active">Active</option>
                                 <option value="deactive">Deactive</option>
                            </select> 
                            <button className='bg-red-500 w-[170px]  hover:shadow-red-500/40 hover:shadow-md text-white rounded-md px-7 py-2  '>Submit</button>
                        </div>
                    </form>
                 </div>
            </div>
        </div>
    );
};

export default SellerDetails;