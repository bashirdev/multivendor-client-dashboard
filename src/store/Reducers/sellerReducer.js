import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from './../../api/api';

export const seller_active_deactive=createAsyncThunk('seller/seller_active_deactive', async(state,{rejectWithValue, fulfillWithValue})=>{
    try {
        const {data} = await api.post('/seller-active-deactive', state, {withCredentials:true})
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
export const get_seller_request=createAsyncThunk('seller/get_seller_request', async({parPage,page,searchValue},{rejectWithValue, fulfillWithValue})=>{
    try {
        const {data} = await api.get(`/get-seller-request?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,  {withCredentials:true})
        return fulfillWithValue(data)
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
export const sellerReducer=createSlice({
    name:'seller',
    initialState:{
        loader:false,
        errorMessage:'',
        successMessage:'',
        sellers:[],
        totalSeller:0

    },
    reducers:{
        messageClear:(state,_)=>{
            state.errorMessage = '';
        }
    }, 
    extraReducers:(builder=>{
        builder
        .addCase(seller_active_deactive.pending, (state,{payload})=>{
            state.loader=true;
        })
        .addCase(seller_active_deactive.rejected, (state,{payload})=>{
            state.loader=false;
            state.errorMessage = payload?.error;
        })
        .addCase(seller_active_deactive.fulfilled, (state,{payload})=>{
            state.loader=false;
            state.successMessage=payload.message;
            state.sellers= payload.serllers
        })
        .addCase(get_seller_request.fulfilled, (state,{payload})=>{
            state.loader=false;
            state.successMessage=payload.message;
            state.sellers= payload.serllers
        })
    })
})

export const {messageClear} = sellerReducer.actions
export default sellerReducer.reducer
