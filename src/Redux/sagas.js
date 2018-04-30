import { fork } from 'redux-saga/effects';
import robots from 'components/Employee/sagas';

function* rootSaga() {
  yield fork(robots);
}

export default rootSaga;
