import { takeEvery, put } from 'redux-saga/effects';
import * as types from './constants';

function* getData(config) {
  yield put({ type: types.CHANGE_QUERY_CONFIG, data: { page: config.page } });
}

function* rootSagas() {
  yield takeEvery(types.ROBOTS_LOAD_SUCCESS, getData);
}

export default rootSagas;
