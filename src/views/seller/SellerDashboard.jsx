import React from 'react';
import Chart from "react-apexcharts";
import { BsCart } from "react-icons/bs";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from 'react-router-dom';


const SellerDashboard = () => {
 
    const state={
        series:[
            {
              name: "Orders",
              data: [30, 40, 45, 50, 49, 60, 70, 91, 95, 50, 60,90]
            },
            {
              name: "Revenue",
              data: [50, 10, 45, 80, 49, 90, 50, 90, 95, 50, 60,75]
            },
            {
              name: "Sales",
              data: [10, 30, 55, 70, 10, 95, 50, 60,15,25,35,5]
            },
          ],
        options:{
            color:['#181ee8', "#181ee8"],
            plotOptions:{
                radius:30,
            },
            chart: {
                background:'transparent',
                foreColor:'#d0d2d6'
             
            },
            dataLabels:{
                enabled:false,
            },
            strock:{
                show:true,
                curve:['smooth', "straight", 'stepline'],
                lineCap:'butt',
                colors:'#f0f0f0',
                width:0.5,
                dashArray:0
            },

            xaxis: {
              categories: ['Jan', 'Fab', 'Mar', 'APl', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend:{
                position:'top'
            },
            responsive:[
                {
                    breakpoint:365,
                    yaxis: {
              categories: ['Jan', 'Fab', 'Mar', 'APl', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            options:{
                plotOptions:{
                    bar:{
                        horizontal:true
                    }
                },
                chart:{
                    height:"550px"
                }
            }
                }
            ]
          },
         
    };
  

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
                 <div className="flex justify-between items-center p-5 bg-[#f1eaea] rounded-md gap-3 ">
                    <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                         <h2 className='text-3xl font-bold '>$3434</h2>
                         <span className='text-md font-normal'>Totlal Sales</span>
                    </div>
                    <div className="rounded-full w-[40px] h-[47px] bg-[#fa0305] flex justify-center items-center text-xl">
                        <span className='text-[#fae8e8] shadow-lg'><MdCurrencyExchange /></span>
                    </div>
                 </div>
                    {/* 2nd card */}
                    <div className="flex justify-between items-center p-5 bg-[#f5ddfa] rounded-md gap-3 ">
                    <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                         <h2 className='text-3xl font-bold '>20</h2>
                         <span className='text-md font-normal'>Products</span>
                    </div>
                    <div className="rounded-full w-[40px] h-[47px] bg-[#940570] flex justify-center items-center text-xl">
                        <span className='text-[#fae8e8] shadow-lg'><MdProductionQuantityLimits /></span>
                    </div>
                 </div>

                    {/* 3rd card */}
                    <div className="flex justify-between items-center p-5 bg-[#e0fcec] rounded-md gap-3 ">
                    <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                         <h2 className='text-3xl font-bold '>100</h2>
                         <span className='text-md font-normal'> Orders</span>
                    </div>
                    <div className="rounded-full w-[40px] h-[47px] bg-[#fa0305] flex justify-center items-center text-xl">
                        <span className='text-[#fae8e8] shadow-lg'><BsCart /></span>
                    </div>
                 </div>
                 {/* 4th card */}
                 <div className="flex justify-between items-center p-5 bg-[#e7e5e5] rounded-md gap-3 ">
                    <div className="flex flex-col justify-start items-start text-[#5c5a5a]">
                         <h2 className='text-3xl font-bold '>4</h2>
                         <span className='text-md font-normal'>Pending orders</span>
                    </div>
                    <div className="rounded-full w-[40px] h-[47px] bg-[#fa0305] flex justify-center items-center text-xl">
                        <span className='text-[#fae8e8] shadow-lg'> <BsCart /> </span>
                    </div>
                 </div>
            </div>
          
         
          <div className="w-full flex flex-wrap mt-7">
           {/* chart area */}
             <div className="w-full lg:w-7/12 pr-3 ">
                 <div className="w-full bg-[#6a5fdf] p-4 rounded-md">
                 <Chart
                     options={state.options}
                     series={state.series}
                    type="bar"
                    width="100%"
                    height="350"
            />
                 </div>

             </div>
              {/* chart area End*/}
              {/* Recent seller Area */}
              <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
                 <div className="w-full bg-[#6a5fdf] p-4 rounded -md text-[#d0d2d6]">
                    <div className="flex justify-between  items-center">
                        <h2 className="font-semibold text-lg text-[#d0d2d6] pb-3">Recent Seller Massage</h2>
                        <Link to='/' className='font-semibold text-sm text-[#d0d2d6] '>View all</Link>
                    </div>
                     <div className="flex flex-col gap-2 pt-6 text-[#d0d2d6]">
                        <ol className="relative border-1 border-slate-600 ml-4 ">
                            <li className='mb-3 ml-6'>
                                <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" />
                                </div>
                                <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <Link className='text-md font-normal'>Admin</Link>
                                        <time datetime="" className='mb-1 text-sm  font-normal sm:order-last sm:mb-0' >2 day ago</time>
                                    </div>
                                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                                         How are you
                                    </div>
                                </div>
                            </li>
                            <li className='mb-3 ml-6'>
                                <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" />
                                </div>
                                <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <Link className='text-md font-normal'>Customer</Link>
                                        <time datetime="" className='mb-1 text-sm  font-normal sm:order-last sm:mb-0' >2 day ago</time>
                                    </div>
                                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                                         How are you
                                    </div>
                                </div>
                            </li>
                            <li className='mb-3 ml-6'>
                                <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#4c7fe2] rounded-full z-10'>
                                <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="" />
                                </div>
                                <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm">
                                    <div className="flex justify-between items-center mb-2">
                                        <Link className='text-md font-normal'>Seller</Link>
                                        <time datetime="" className='mb-1 text-sm  font-normal sm:order-last sm:mb-0' >2 day ago</time>
                                    </div>
                                    <div className="p-2 text-xs font-normal bg-slate-700 rounded-lg border-slate-800">
                                         How are you
                                    </div>
                                </div>
                            </li>
                        </ol>
                     </div>
                 </div>
              </div>
                {/* Recent seller Area End*/}
          </div>

          <div className="w-full p-4 bg-[#645fdf] mt-6 rounded-md" >
             <div className="flex justify-between items-center">
                 <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                 <Link className='font-semibold text-sm text-[#d0d2d6]'>View all</Link>
             </div>
             <div className="relative overflow-x-auto">
                <table className='w-full text-sm text-left text-[#d0d2d6]  border-slate-700'>
                <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                   <tr>
                        <th className='py-3 px-4' scope='col'>Order Id</th>
                        <th className='py-3 px-4' scope='col'>Price</th>
                        <th className='py-3 px-4' scope='col'>Payment Status</th>
                        <th className='py-3 px-4' scope='col'>Order Status</th>
                        <th className='py-3 px-4' scope='col'>Active</th>
                    </tr>
                   
                </thead>
                <tbody>
                {
                        [1,2,3,4,5].map((item, ind)=>(
                            <tr key={ind}>
                            <td  className='py-3 px-4 font-medium whitespace-nowrap '>#34344</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>$6522</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>Pending</td>
                        <td  className='py-3 px-4 font-medium whitespace-nowrap'>
                            <Link>View</Link>
                        </td>
                    </tr>
                        ))
                    }  
                </tbody>
                </table>
             </div>
          </div>

        </div>
    );
};


export default SellerDashboard;