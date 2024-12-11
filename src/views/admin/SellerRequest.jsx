import React, { useEffect, useState } from 'react';
import { MdRemoveRedEye } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_seller_request } from '../../store/Reducers/sellerReducer';
import Search from './../../components/Search';
import Pagination from './../Pagination';
const SellerRequest = () => {
    const dispatch=useDispatch()
    const {sellers,totalSeller ,loader ,errorMessage, successMessage } = useSelector(state=> state.seller)
  
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue]= useState('')
    const [parPage, setParpage] = useState(5)
    const [state, setState] =useState(true)
    const [show, setShow] =useState(false)

  
    useEffect(()=>{
        const obj={
          parPage:parseInt(parPage),
          page:parseInt(currentPage),
          searchValue
        }
        dispatch(get_seller_request(obj))
    },[parPage,currentPage,searchValue])

    return (
        <div>
            <div className="w-full px-7 ">
             <h1 className='text-[20px] font-bold mb-3 '>Seller Request</h1>
              <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
              <div className="flex justify-between items-center">
                 <select onChange={(e)=> setParpage(parseInt(e.target.value))} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    
                 </select>
                 <Search setParpage={setParpage} setSearchValue={setSearchValue} searchValue={searchValue} />
             </div>
            {/* table data */}
             <div className="relative overflow-x-auto">
                <table className='w-full text-sm text-left text-[#d0d2d6]  border-slate-700'>
                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                   <tr>
                        <th className='py-3 px-4' scope='col'>NO</th>
                        <th className='py-3 px-4' scope='col'>NAME</th>
                        <th className='py-3 px-4' scope='col'>Email</th>
                        <th className='py-3 px-4' scope='col'>PAYMENT STATUS</th>
                        <th className='py-3 px-4' scope='col'>Status</th>

                        <th className='py-3 px-4' scope='col'>ACTION</th>
                       
                    </tr>
                   
                </thead>
                <tbody>
                {
                        [1,2,3,4,5].map((item, ind)=>(
                            <tr className='border-b border-slate-700' key={ind}>
                            <td  className='py-3 px-4 font-medium whitespace-nowrap '>{ind+1}</td>
                      
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Bashir Ahammed</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>bashir@gmail.com</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Inactive</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>
                            <div className="flex gap-2 justify-start items-center">
                                 <Link className='p-2 rounded-md bg-yellow-500/100' to={`/admin/dashboard/seller/details/${ind}`}><MdRemoveRedEye  className='text-white ' /></Link>
                                
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
                  parPage={parPage}
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



export default SellerRequest;