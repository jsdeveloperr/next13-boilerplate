import React from 'react';

import { useUserAgent } from '@/libs/hooks/useUserAgent';

import { useProductService } from '../../hooks';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductContainer = () => {
  const { product } = useProductService();
  const { userAgent } = useUserAgent();

  return (
    <>
      <ProductItem products={product.products} userAgent={userAgent} />
    </>
  );
};
