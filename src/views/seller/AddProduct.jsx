import React, { useEffect, useState } from 'react';
import { IoMdCloseCircle, IoMdImages } from "react-icons/io";

import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { PropagateLoader } from 'react-spinners';
import { get_category } from '../../store/Reducers/categoryReducer';
import { add_Product, messageClear } from '../../store/Reducers/productReducer';
import { overrideStyle } from '../../utils/utils';

const AddProduct = () => {
    const {categorys} = useSelector(state=> state.category)
    const { loader,successMessage,errorMessage } = useSelector(state => state.product)
    const dispatch=useDispatch()

     useEffect(()=>{
      
            dispatch(get_category({parPage:'',page:'',searchValue:''}))
         
     },[])

    const [state, setState] = useState({
        name: "",
        description: '',
        discount: '',
        price: "",
        brand: "",
        stock: ""
    
    })

    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState([])
    const [searchValue, setSearchValue] = useState('') 
    

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categorys)
        }

    }
    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const [images, setImages] = useState([])
    const [imageShow, setImageShow] = useState([])
    const imageHandle=(e)=>{
         const files =e.target.files;
         const length= files.length;
         if(length > 0){

             setImages([...images, ...files])
             let imageUrl = []
            for(let i=0; i < length; i++){
               imageUrl.push({url:URL.createObjectURL(files[i])})
               setImageShow([...imageShow, ...imageUrl])
            }
         }
       
    }

    const  changeImage=(img,index)=>{
        if(img){
            let tempUrl= imageShow;
            let tempImages= images;
            tempImages[index] = img;
            tempUrl[index] ={url:URL.createObjectURL(img)}
            setImageShow([...tempUrl])
            setImages([...tempImages])
        }
    }

     const deleteAnImage=(index=> {
    
        const filterImage=images.filter((item, i)=> i !== index)
        const filterImageUrl=imageShow.filter((item, i)=> i !== index)
        setImages(filterImage)
        setImageShow(filterImageUrl)
     })
     
     useEffect(()=>{
        setAllCategory(categorys)
     
    },[categorys])
    // console.log(imageShow)
  const add=(e)=>{
     e.preventDefault()
     const formData=new FormData();
     formData.append('name', state.name)
     formData.append('description', state.description)
     formData.append('discount', state.discount)
     formData.append('price', state.price)
     formData.append('brand', state.brand)
     formData.append('stock', state.stock)
     formData.append('shopName', 'EasyShop')
     formData.append('category', category)
     for(let i=0; i<images.length; i++){
        formData.append('images', images[i])
     }
     dispatch(add_Product(formData))
  }

  useEffect(() => {

    if (successMessage) {
        toast.success(successMessage)
        dispatch(messageClear()) 
        setState({
            name: "",
            description: '', 
            discount: '',
            price: "",
            brand: "",
            stock: ""
        }) 
        setImageShow([])
        setImages([])
        setCategory('')

    }
    if (errorMessage) {
        toast.error(errorMessage)
        dispatch(messageClear())
    }


},[successMessage,errorMessage])

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product</h1>
                    <Link to='/seller/dashboard/products' className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-sm px-7 py-2 my-2'>All Product</Link> 
                </div>
<div>
    <form onSubmit={add}>
        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="name">Product Name</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" name='name' id='name' placeholder='Product Name' />
            </div>  
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="brand">Product Brand</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.brand} type="text" name='brand' id='brand' placeholder='Brand Name' />
            </div>  
        </div>
        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1 relative'>
                <label htmlFor="category">Product Category</label>
                <input readOnly onClick={()=> setCateShow(!cateShow)} className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]'
                 onChange={inputHandle} 
                 value={category} 
                 type="text" 
                
                 id='category' 
                 placeholder='--select category--' />
                 <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${cateShow ? 'scale-100' :'scale-0' }`}>
                     <div className="w-full px-4 py-2 fixed ">
                        <input value={searchValue} onChange={categorySearch} type="text" name="" id="" placeholder='search' className='px-3 py-1 w-full focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden ' />
                     </div>
                     <div className="pt-14 "></div>
                     <div className="flex justify-start items-start flex-col h-[200px] overflow-x-scrool">
                         {
                            allCategory.map((c,i) => <span key={c._id} className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`} onClick={()=> {
                                setCateShow(false)
                                setCategory(c.name)
                                setSearchValue('')
                                setAllCategory(categorys)
                            }}>{c.name}</span>)
                         }
                     </div>
                 </div>
            </div>  
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="stock">Product Stock</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.stock} type="text" name='stock' id='stock' placeholder='Product Stock' />
            </div>  
            
        </div>
        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="price">Price</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.price} type="number" name='price' id='price' placeholder='price' />
            </div>  
            <div className='flex flex-col w-full gap-1'>
                <label htmlFor="discount">Discount</label>
                <input className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.discount} type="number" name='discount' id='discount' placeholder='discount by %' />
            </div>   
        </div>
        <div className='flex flex-col w-full gap-1 mb-5'>
                <label htmlFor="description" className='text-[#d0d2d6]'>Description</label>
                <textarea className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#6a5fdf] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.description} name='description' id='description' placeholder='Description' cols="10" rows="4"></textarea> 
                
            </div> 
            <div className="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4">
            {imageShow.map((img,i)=> <div className='h-[180px] relative'>
                 <label htmlFor={i}>
                    <img className='w-full h-full rounded-sm' src={img.url} alt="" srcset="" />
                 </label>
                 <input type="file" name="" id={i} className='hidden' onChange={(e)=> changeImage(e.target.files[0],i )} />
               <span className='absolute top-2 right-2 z-10 shadow-md cursor-pointer p-2 text-red-600' onClick={()=> deleteAnImage(i)} ><IoMdCloseCircle /></span>
            </div>)}
                 <label htmlFor="image" className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 border-red-500 w-full text-[#d0d2d6]'>
                     <span> <IoMdImages /> </span>
                     <span>Select Image</span>
                 </label>
                 <input className='hidden' onChange={imageHandle} multiple type="file" id='image' />
            </div>
            <div className='flex'>
            <button disabled={loader ? true : false}  className='bg-red-500 w-[280px] hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3'>
            {
               loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle} /> : 'Add Product'
            } 
            </button>
             
            </div>
    </form>
</div>
            </div>
            
        </div>
    );
};
export default AddProduct;