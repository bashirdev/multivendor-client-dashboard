import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './../../api/api';

export const add_Product=createAsyncThunk("product/add_Product", async(product, {rejectWithValue, fulfillWithValue})=>{
   console.log(product)
    try {
       const {data} =await api.post("/product-add", product, {withCredentials:true}) 
     
       return fulfillWithValue(data) 
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const get_products=createAsyncThunk('product/get_products', async({parPage,page,searchValue},{rejectWithValue,fulfillWithValue})=>{
    try {
        const {data} = await api.get(`/get-products?page=${page}&&parPage=${parPage}&&searchValue=${searchValue}`, {withCredentials:true})
        
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const get_product=createAsyncThunk('product/get_product', async(productId,{rejectWithValue,fulfillWithValue})=>{

    try {
        const {data} = await api.get(`/get-product/${productId}`, {withCredentials:true})
                                  
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const update_product=createAsyncThunk('product/update_product', async(updatedData,{rejectWithValue,fulfillWithValue})=>{
  console.log(updatedData)
    try {
        const {data} = await api.post(`/update-product`, updatedData,{withCredentials:true})
            console.log(data)                      
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const product_image_update=createAsyncThunk('product/product_image_update', async({oldImage,newImage,productId},{rejectWithValue,fulfillWithValue})=>{
  
    try {
        const formData=new FormData()
        formData.append('oldImage', oldImage)
        formData.append('newImage', newImage)
        formData.append('productId', productId)
        const {data} = await api.post(`/product-image-update`, formData,{withCredentials:true})
            console.log(data)                      
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const productReducer=createSlice({
    name:'product',
    initialState:{
        loader:false,
        successMessage:'',
        errorMessage:'',
        products:[],
        product:'',
        totalProduct:0,
      

    },
    reducers:{
        messageClear:(state,_)=>{
            state.errorMessage=""
        }
    },
    extraReducers:(builder)=>{
          builder
          .addCase(add_Product.pending, (state,{payload})=>{
            state.loader=true
        })
        .addCase(add_Product.rejected, (state,{payload})=>{
            state.loader=false;
            state.errorMessage=payload?.error;
            
        })
        .addCase(add_Product.fulfilled, (state,{payload})=>{
            state.loader=false;
            state.successMessage=payload.message;
        
        })
        .addCase(get_products.fulfilled, (state,{payload})=>{
            state.loader=false;
            state.totalProduct=payload.totalProduct;
            state.products=payload.products
    
        })
        .addCase(get_product.fulfilled, (state,{payload})=>{
            state.product=payload.product
        })
        .addCase(update_product.pending, (state,{payload})=>{
            state.loader=true
        })
        .addCase(update_product.rejected, (state,{payload})=>{
            state.loader=false;
            state.errorMessage=payload?.error;
            
        })
        .addCase(update_product.fulfilled, (state,{payload})=>{
            state.loader=false;
            state.product=payload.product
            state.successMessage=payload.message;

        })
        .addCase(product_image_update.fulfilled, (state,{payload})=>{
         
            state.product=payload.product
            state.successMessage=payload.message;

        })
    }
})

export const {messageClear} =productReducer.actions;
export default productReducer.reducer
