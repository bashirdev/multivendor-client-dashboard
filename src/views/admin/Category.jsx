import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaImage } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';

import Search from '../../components/Search';
import { categoryAdd, get_category, messageClear } from '../../store/Reducers/categoryReducer';
import { overrideStyle } from './../../utils/utils';
import Pagination from './../Pagination';
const Category = () => {
  
    const dispatch=useDispatch()
    const {loader,categorys, successMessage, errorMessage} = useSelector(state=> state.category)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchValue, setSearchValue]= useState('')
    const [parPage, setParpage] = useState(5)
    // const [state, setState] =useState(true)
    const [show, setShow] =useState(false)
    const [imageShow, setImage] = useState('')
    const [state, setState] = useState({
        name:'',
        image:''
    })
    const imageHandle = (e) => {
        let files = e.target.files 
       
        if (files.length > 0) {
            setImage(URL.createObjectURL(files[0]))
            setState({
                ...state,
                image: files[0]
            })
        }
    }

    const add_category=(e)=>{
        e.preventDefault();
        dispatch(categoryAdd(state))
        
    }

    useEffect(() => {
        if(errorMessage){
       
          toast.error(errorMessage)
          dispatch(messageClear())
        }
        if(successMessage){
          toast.success(successMessage)
          dispatch(messageClear())
          setState({
            name:'',
            image:''
          })
          setImage('')
        }
      },[errorMessage, dispatch, successMessage]);

      useEffect(()=>{
          const obj={
            parPage:parseInt(parPage),
            page:parseInt(currentPage),
            searchValue
          }
          dispatch(get_category(obj))
      },[parPage,currentPage,searchValue])


    return (
        <div className='px-2 lg:px-7 pt-5'>
        <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#6a5fdf] rounded-md">
             <h2 className='text-[#d0d2d6] font-semibold text-lg'>Category</h2>
             <button onClick={()=> setShow(!show)} className='bg-red-500 shadow-lg hover:shadow-red-500/40 px-4 py-2 cursor-pointer text-white rounded-sm text-sm'>Add</button>
        </div>
          <div className="flex flex-wrap w-full">
             <div className="w-full lg:w-7/12">
              <div className="w-full p-4 bg-[#6a5fdf] rounded-md ">
             <Search setParpage={setParpage} setSearchValue={setSearchValue} searchValue={searchValue} />
            {/* table data */}
             <div className="relative overflow-x-auto">
                <table className='w-full text-sm text-left text-[#d0d2d6]  border-slate-700'>
                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                   <tr>
                        <th className='py-3 px-4' scope='col'>NO</th>
                        <th className='py-3 px-4' scope='col'>IMAGE</th>
                        <th className='py-3 px-4' scope='col'>NAME</th>
                        <th className='py-3 px-4' scope='col'>ACTION</th>
                       
                    </tr>
                   
                </thead>
                <tbody>
                {
                  categorys?.map((item, ind)=>(
                            <tr key={ind}>
                            <td  className='py-3 px-4 font-medium whitespace-nowrap '>{ind+1}</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>
                            <img className='w-[45px] h-[45px]' src={`${item.image}`} alt="" />
                        </td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>{item.name}</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>
                            <div className="flex gap-2 justify-start items-center">
                                 <Link className='p-2 rounded-md bg-yellow-500/100' to={`/${item._id}`} > <FiEdit className='text-white ' /> </Link>
                                 <Link to='/' className='p-2 rounded-md bg-red-500/100'><MdOutlineDeleteOutline className='text-white' /></Link>
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
   <div className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${show ? 'right-0' : '-right-[340px]'} z-[9999] top-0 transition-all duration-500`}>
      <div className="w-full pl-5 ">
        <div className='bg-[#6a5fdf] h-screen lg:h-auto px-3 py-2 lg:rounded-md text-[#d0d2d6]'>
            <div className='flex justify-between items-center  mb-4'>
            <h2 className='text-[#d0d2d6] font-semibold text-xl mb-4 w-full text-center'>Add Category</h2>
             <div onClick={()=>  setShow(false)} className='block lg:hidden'>
             <IoMdCloseCircle />
             </div>
            </div>
             <form onSubmit={add_category}>
                <div className='flex flex-col w-full gap-1 mb-3'>
                    <label htmlFor="name">Category</label>
                    <input value={state.name} onChange={(e)=>setState({...state,name : e.target.value})} type="text" id='name' name="category_name" placeholder='Category name'
                     className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' />
                </div>
                <div>
                    <label htmlFor='image'  className='flex justify-center items-center flex-col h-[238px] cursor-pointer border border-dashed hover:border-red-500 w-full border-[#d0d2d6]'>
                     {imageShow ? <img id='image' className='w-full h-full' src={imageShow} alt='' /> : <>
                     <span><FaImage className='text-xl' /></span>
                     <span>Select Image</span>
                     </>}
                        
                    </label>
                    <input  onChange={imageHandle} type="file" name='image' id='image' className='hidden' />
                    <div className='mb-4'>
                    <button type='submit' disabled={loader ? true : false} className='py-3 px-7 bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg rounded-md mb-3'>
                      {loader ?  <PropagateLoader color="#fff" cssOverride={overrideStyle} /> : "Add Category"}
                     </button>
                    </div>
                </div>
             </form>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Category;