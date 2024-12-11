import React, { useState } from 'react';
import { BsArrowBarDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Pagination from '../Pagination';
const Orders= () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue]= useState('')
    const [perPage, setPerpage] = useState(5)
    const [state, setState] =useState(true)
    const [show, setShow] =useState(false)
    
    
    return (
        <div className='px-2 lg:px-7 pt-5'>
         <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
             <div className="flex justify-between items-center">
                 <select onChange={(e)=> setPerpage(parseInt(e.target.value))} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    
                 </select>
                 <input  type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='search' className="px-4 py-2 bg-transparent focus:border-indigo-500 outline-none  border border-slate-700  rounded-md text-[#d0d2d6] " />
             </div>
              
              <div className="relative mt-5 overflow-x-auto">
                 <div className="w-full text-sm text-left bg-[#6A5FDF]">
                    <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                       <div className="flex justify-between items-center">
                          <div className="py-3 w-[30%] font-bold ">Order id</div>
                          <div className="py-3 w-[13%] font-bold ">Price</div>
                          <div className="py-3 w-[18%] font-bold ">Payment Status</div>
                          <div className="py-3 w-[18%] font-bold ">Order Status</div>
                          <div className="py-3 w-[18%] font-bold ">Action</div>
                          <div className="py-3 w-[8%] font-bold "><BsArrowBarDown  /></div>
                       </div> 
                    </div>
                    <div className=" text-[#d0d2d6]">
                       <div className="flex justify-between items-start border-b border-slate-700">
                          <div className="py-3 w-[30%] font-medium whitespace-nowrap ">#343435</div>
                          <div className="py-3 w-[13%] font-medium">$654</div>
                          <div className="py-3 w-[18%] font-medium">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">
                          <Link to={`/admin/dashboard/order/details/${1}`}> View </Link>
                          </div>
                          <div className="py-3 w-[8%] font-medium cursor-pointer"><BsArrowBarDown onClick={()=> setShow(!show)} /></div>
                       </div> 
                       <div className={show ? ' border-b border-slate-700 bg-[#8288ed] transition-all  duration-700 ' : 'hidden'}>
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[17%] font-medium ">Pending</div>
                       </div> 
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[16.5%] font-medium ">Pending</div>
                       </div> 
                       </div>
                    </div>
                    <div className=" text-[#d0d2d6]">
                       <div className="flex justify-between items-start border-b border-slate-700">
                          <div className="py-3 w-[30%] font-medium whitespace-nowrap ">#343435</div>
                          <div className="py-3 w-[13%] font-medium">$654</div>
                          <div className="py-3 w-[18%] font-medium">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">
                          <Link to={`/admin/dashboard/order/details/${2}`}> View </Link>
                          </div>
                          <div className="py-3 w-[8%] font-medium cursor-pointer"><BsArrowBarDown onClick={()=> setShow(!show)} /></div>
                       </div> 
                       <div className={show ? ' border-b border-slate-700 bg-[#8288ed] transition-all  duration-700 ' : 'hidden'}>
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[17%] font-medium ">Pending</div>
                       </div> 
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[16.5%] font-medium ">Pending</div>
                       </div> 
                       </div>
                    </div>
                    <div className=" text-[#d0d2d6]">
                       <div className="flex justify-between items-start border-b border-slate-700">
                          <div className="py-3 w-[30%] font-medium whitespace-nowrap ">#343435</div>
                          <div className="py-3 w-[13%] font-medium">$654</div>
                          <div className="py-3 w-[18%] font-medium">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">
                              <Link to={`/admin/dashboard/order/details/${3}`}> View </Link>
                          </div>
                          <div className="py-3 w-[8%] font-medium cursor-pointer"><BsArrowBarDown onClick={()=> setShow(!show)} /></div>
                       </div> 
                       <div className={show ? ' border-b border-slate-700 bg-[#8288ed] transition-all  duration-700 ' : 'hidden'}>
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[17%] font-medium ">Pending</div>
                       </div> 
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[16.5%] font-medium ">Pending</div>
                       </div> 
                       </div>
                    </div>
                    <div className=" text-[#d0d2d6]">
                       <div className="flex justify-between items-start border-b border-slate-700">
                          <div className="py-3 w-[30%] font-medium whitespace-nowrap ">#343435</div>
                          <div className="py-3 w-[13%] font-medium">$654</div>
                          <div className="py-3 w-[18%] font-medium">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">Pending</div>
                          <div className="py-3 w-[18%] font-medium ">
                          <Link to={`/admin/dashboard/order/details/${4}`}> View </Link>
                          </div>
                          <div className="py-3 w-[8%] font-medium cursor-pointer"><BsArrowBarDown onClick={()=> setShow(!show)} /></div>
                       </div> 
                       <div className={show ? ' border-b border-slate-700 bg-[#8288ed] transition-all  duration-700 ' : 'hidden'}>
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[17%] font-medium ">Pending</div>
                       </div> 
                       <div className="flex justify-start items-start border-b border-slate-700">
                          <div className="py-3 w-[28.5%] font-medium whitespace-nowrap pl-2">#54434</div>
                          <div className="py-3 w-[12.5%] font-medium">$54</div>
                          <div className="py-3 w-[17%] font-medium">Pending</div>
                          <div className="py-3 w-[16.5%] font-medium ">Pending</div>
                       </div> 
                       </div>
                    </div>
                 </div>
              </div>

         <div className="flex w-full justify-end mt-4 bottom-4">
         <Pagination 
               pageNumber={currentPage} 
               setPageNumber={setCurrentPage}
               totalItem={50}
               parPage={perPage}
               showItem={3}
              /> 
         </div>
         </div>
           
        </div>
    );
};

export default Orders;