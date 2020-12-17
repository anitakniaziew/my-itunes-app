import { select, takeLatest } from 'redux-saga/effects';
import { incrementCount } from './counterSlice';

async function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
};

export function* onIncrementCount() {
  console.log('onIncCount');
  yield wait(1000);
  console.log('state after onIncrementCOunt', (yield select()));
}

export function* counterSaga() {
  yield takeLatest(incrementCount.type, onIncrementCount);
}
