import { END } from 'redux-saga';

import { SagaStore } from '@/store/store';

const dispatchSSR = async (store: SagaStore, action: any) => {
  store.dispatch(action);
  store.dispatch(END);
  await store.sagaTask?.toPromise();
};

export default dispatchSSR;
