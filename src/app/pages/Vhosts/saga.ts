import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './slice';
import { ContainerState } from './types';
import { makeDataIsFetchedSelector } from './selectors';
import { getVhosts as GET_VHOSTS_API } from '../../../apis';

function* fetchVhostsData() {
  const dataAlreadyFetched = yield select(makeDataIsFetchedSelector);

  if (!dataAlreadyFetched) {
    const data: ContainerState = yield axios
      .get(GET_VHOSTS_API)
      .then(response => response.data);

    if (data) {
      yield put(actions.setData(data));
    }
  }
}

export default function* vhostsSaga() {
  yield takeLatest(actions.fetchData.type, fetchVhostsData);
}
