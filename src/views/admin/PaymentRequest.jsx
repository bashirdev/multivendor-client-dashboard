import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";
function handleOnWheel({deltaY}){
    console.log('handleOnWeel', deltaY)
}

const outerElementType=forwardRef((props,ref)=>(
    <div ref={ref} onWheel={handleOnWheel} {...props} />
))

const PaymentRequest = () => {
//    const array= [1,2,3,4,5,6,7,8,9]
    const Row=({index, style})=>{
       return (
        <div style={style} className='flex text-xs font-medium text-white '>
           <div className='w-[25%] p-3 whitespace-nowrap'>{index + 1}</div>
           <div className='w-[25%] p-3 whitespace-nowrap'>$3458</div>
           <div className='w-[25%] p-2 whitespace-nowrap '>
             <span className=' px-[1px] py-[5px] bg-blue-300 rounded-sm '>pending</span>
           </div>
           <div className='w-[25%] p-2 whitespace-nowrap'>12 Jun 2023</div>
           <div className='w-[25%] p-2 whitespace-nowrap'>
             <button className='text-[#d0d2d3] bg-indigo-500 hover:shadow-indigo-500/50 cursor-pointer text-sm rounded-sm'>Confirm</button>
           </div>
        </div>
       )
    }

    return (
        <div className='px-2 lg:px-7 pt-5'>
          <div className="w-full p-4 bg-[#6a5fdf] rounded-md">
             <h2 className='text-xl font-medium pb-5  text-[#d0d2d6]'>Withdrawal request</h2>
             <div className='w-full'>
               <div className='w-full overflow-x-auto'>
                   <div className="flex bg-[#a7a3de] uppercase text-xs min-w-[340px] font-bold rounded-md">
                    <div className="w-[25%] p-2">No </div>
                    <div className="w-[25%] p-2">Amount </div>
                    <div className="w-[25%] p-2">Status </div>
                    <div className="w-[25%] p-2">Date </div>
                    <div className="w-[25%] p-2">Action </div>
                  
                   </div>
                   {
                    <List 
                     style={{minWidth:'340px'}}
                     className='List'
                     height={350}
                     itemCount={1000}
                     itemSize={35}
                     outerElementType={outerElementType}
            
                    >
                    {Row}

                    </List>
                   }
               </div>
             </div>
          </div>
            
        </div>
    );
};

export default PaymentRequest;