/* eslint-disable @typescript-eslint/no-unused-vars */
import { Store } from '@reduxjs/toolkit';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

import { Main } from '@/components/Layout/Main';
import { Meta } from '@/components/Layout/Meta';
import { ProductContainer } from '@/features/product';
import { productActions } from '@/features/product/store';
import dispatchSSR from '@/store/dispatchSSR';
import { reduxWrapper } from '@/store/store';

const ProductPage = () => {
  return (
    <Main meta={<Meta title="Next13 Boilerplate" description="Next13 Boilerplate" />}>
      <ProductContainer />
    </Main>
  );
};

export const getServerSideProps: GetServerSideProps = reduxWrapper.getServerSideProps(
  (store: Store) =>
    async (context: GetServerSidePropsContext): Promise<any> => {
      await dispatchSSR(store, productActions.fetchAll());
    },
);

export default ProductPage;
