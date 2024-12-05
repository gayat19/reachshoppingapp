import {createSlice} from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState:[],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload);
        },
        updateProduct:(state,action)=>{
            const index = state.findIndex((product)=>product.id===action.payload.id);
            state[index]=state[index].quantity+1;
        },
        removeProduct:(state,action)=>{
            return state.filter((product)=>product.id!==action.payload.id);
        }

    }
});

export const{addProduct,updateProduct,removeProduct} = productSlice.actions;
export default productSlice.reducer;