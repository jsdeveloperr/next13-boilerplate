import { useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import { productActions, selectProduct } from '../store';
import { ProductResponse } from '../types';

export type ProductServiceOperators = {
  product: ProductResponse;
  fetchAllProduct: () => void;
};

export const useProductService = (): Readonly<ProductServiceOperators> => {
  const dispatch = useAppDispatch();

  return {
    product: useAppSelector(selectProduct),
    fetchAllProduct: useCallback(() => {
      dispatch(productActions.fetchAll());
    }, [dispatch]),
  };
};

export default useProductService;
