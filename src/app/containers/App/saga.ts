import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './slice';
import { getAppData as GET_APP_DATA_API } from '../../../apis';

function* fetchAppData() {
  const data = yield axios
    .get(GET_APP_DATA_API)
    .then(response => response.data);

  if (data) {
    yield put(actions.setData(data));
  }
}

export default function* appSaga() {
  yield takeLatest(actions.fetchData.type, fetchAppData);
}
