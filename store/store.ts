import createSagaMiddleware, { Task } from '@redux-saga/core';
import { configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';

import productReducer from '@/features/product/store/product.slice';
import { Env } from '@/libs/helpers/Env';
import userAgentReducer from '@/libs/store/userAgent/userAgent.slice';

import { rootSaga } from './rootSaga';

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: {
      product: productReducer,
      userAgent: userAgentReducer,
    },
    devTools: Env.isReduxLogger(),
    middleware: getDefaultMiddleware =>
      Env.isReduxLogger()
        ? getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware).concat(logger)
        : getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const reduxWrapper = createWrapper(makeStore, { debug: Env.isReduxLogger() });

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
