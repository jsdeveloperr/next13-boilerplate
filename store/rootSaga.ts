import { all, fork } from 'redux-saga/effects';

import { productWatcherSaga } from '@/features/product/store/product.sagas';

export function* rootSaga() {
  yield all([fork(productWatcherSaga)]);
}

export default rootSaga;
