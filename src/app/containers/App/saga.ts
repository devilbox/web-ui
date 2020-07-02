import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './slice';
import { ContainerState } from './types';
import { makeContainerIdsSelector } from './selectors';
import {
  getAppData as GET_APP_DATA_API,
  makeGetContainerData,
} from '../../../apis';

function* fetchAppData() {
  const data: ContainerState = yield axios
    .get(GET_APP_DATA_API)
    .then(response => response.data);

  if (data) {
    yield put(actions.setData(data));

    const containerIds = yield select(makeContainerIdsSelector);

    yield all(containerIds.map((id: string) => call(fetchContainerData, id)));
  }
}

function* fetchContainerData(id: string) {
  const containerData = yield axios
    .get(makeGetContainerData(id))
    .then(response => response.data);

  if (containerData) {
    yield put(actions.setContainerData(containerData));
  }
}

export default function* appSaga() {
  yield takeLatest(actions.fetchData.type, fetchAppData);
}
