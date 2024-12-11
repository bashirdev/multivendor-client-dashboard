import React from 'react';
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Pagination = ({pageNumber,setPageNumber,totalItem,parPage,showItem}) => {
    let totalPage= Math.ceil(totalItem / parPage) // 10
    
    let startPage = pageNumber // 1
    let dif= totalPage - pageNumber // 9

    if(dif <= showItem){

        //showItem 3 value added
        startPage = totalPage - showItem; //7
        
        // startPage =7
    }
    
let endPage= startPage < 0 ? showItem : showItem + startPage;

if(startPage <= 0){
    startPage = 1
    console.log(startPage)
}

const createBtn=()=>{
  const btns= []
  for(let i=startPage; i < endPage; i++){
    btns.push(
        <li onClick={()=> setPageNumber(i)  } className={`${pageNumber === i ? 'bg-indigo-300 shadow-lg shadow-indigo-300/50 text-white' : 'bg-slate-300 hover:bg-indigo-400 shadow-lg hover:shadow-indigo-500/50 hover:text-white text-[#000000]'} w-[33px] h-[33px]  rounded-full flex justify-center items-center cursor-pointer`}>{i}</li>
    )
  }
  return btns
}
    return (
        <ul className="flex gap-3">
              { pageNumber > 1 && <li onClick={() => setPageNumber(pageNumber - 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer'>
            <MdOutlineKeyboardDoubleArrowLeft />
            </li>}{
                createBtn()
            }
            {
                pageNumber < totalPage && <li onClick={() => setPageNumber(pageNumber + 1)} className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-[#000000] cursor-pointer'>
                    <MdOutlineKeyboardDoubleArrowRight  />
                </li>
            }
        </ul>
    );
}

export default Pagination;