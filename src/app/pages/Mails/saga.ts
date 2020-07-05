import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './slice';
import { Mail } from './types';
import { getMails as GET_MAILS_API } from '../../../apis';

function* fetchAppData() {
  const data: Mail[] = yield axios
    .get(GET_MAILS_API)
    .then(response => response.data);

  if (data) {
    yield put(actions.setSentMails(data));
  }
}

export default function* appSaga() {
  yield takeLatest(actions.fetchData.type, fetchAppData);
}
