import React, { useState } from 'react';
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from 'react-router-dom';
import Pagination from './../Pagination';
const Sellers = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue]= useState('')
    const [perPage, setPerpage] = useState(5)
    const [state, setState] =useState(true)
    const [show, setShow] =useState(false)
    return (
        <div>
            <div className="w-full px-7 ">
                      <h1 className='text-[20px] font-bold mb-3 '>Seller</h1>
              <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
              <div className="flex justify-between items-center">
                 <select onChange={(e)=> setPerpage(parseInt(e.target.value))} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    
                 </select>
                 <input  type="text" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='search' className="px-4 py-2 bg-transparent focus:border-indigo-500 outline-none  border border-slate-700  rounded-md text-[#d0d2d6] " />
             </div>
            {/* table data */}
             <div className="relative overflow-x-auto">
                <table className='w-full text-sm text-left text-[#d0d2d6]  border-slate-700'>
                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                   <tr>
                        <th className='py-3 px-4' scope='col'>NO</th>
                        <th className='py-3 px-4' scope='col'>IMAGE</th>
                        <th className='py-3 px-4' scope='col'>NAME</th>
                        <th className='py-3 px-4' scope='col'>SHOP NAME</th>
                        <th className='py-3 px-4' scope='col'>PAYMENT STATUS</th>
                        <th className='py-3 px-4' scope='col'>EMAIL</th>
                        <th className='py-3 px-4' scope='col'>DIVISION</th>
                        <th className='py-3 px-4' scope='col'>DISTRICT</th>
                        <th className='py-3 px-4' scope='col'>ACTION</th>
                       
                    </tr>
                   
                </thead>
                <tbody>
                {
                        [1,2,3,4,5].map((item, ind)=>(
                            <tr key={ind}>
                            <td  className='py-3 px-4 font-medium whitespace-nowrap '>{ind+1}</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>
                            <img className='w-[45px] h-[45px]' src={`http://localhost:3000/images/category/${item}.jpg`} alt="" />
                        </td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Bashir Ahammed</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Easy</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>bashir@gmail.com</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Cumilla</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Titas</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>
                            <div className="flex gap-2 justify-start items-center">
                                 <Link className='p-2 rounded-md bg-yellow-500/100' to='/'><MdRemoveRedEye  className='text-white ' /></Link>
                                
                            </div> 
                        </td>
                    
                    </tr>
                        ))
                    }  
                </tbody>
                </table>
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
             {/* table data end */}
              </div>
             </div>
        </div>
    );
};

export default Sellers;