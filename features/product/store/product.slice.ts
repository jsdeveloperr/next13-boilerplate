import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import type { RootState } from '@/store/store';

import { ProductResponse } from '../types';

export interface ProductState {
  product: ProductResponse;
}

const initialState: ProductState = {
  product: {} as ProductResponse,
};

// slice
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchAllSucceeded(state, action: PayloadAction<ProductResponse>) {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.product,
      };
    },
  },
});

// Actions
export const productActions = {
  fetchAll: createAction(`${productSlice.name}/fetchAll`),
  fetchAllSucceeded: productSlice.actions.fetchAllSucceeded,
};

// Selectors
export const selectProduct = (state: RootState) => state.product.product;

// Reducer
export default productSlice.reducer;
