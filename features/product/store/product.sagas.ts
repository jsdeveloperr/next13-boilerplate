import { SagaIterator } from '@redux-saga/core';
import { call, put, takeEvery } from 'redux-saga/effects';

import { getProducts } from '../api';
import { ProductResponse } from '../types';
import { productActions } from './product.slice';

// Worker Sagas
export function* onGetProduct(): SagaIterator {
  const product: ProductResponse = yield call(getProducts);
  yield put(productActions.fetchAllSucceeded(product));
}

// Watcher Saga
export function* productWatcherSaga(): SagaIterator {
  yield takeEvery(productActions.fetchAll.type, onGetProduct);
}

export default productWatcherSaga;
