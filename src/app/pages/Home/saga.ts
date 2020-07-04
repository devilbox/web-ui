import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './slice';
import { ContainerState } from './types';
import { makeContainerIdsSelector, makeToolsIdsSelector } from './selectors';
import {
  getAppData as GET_APP_DATA_API,
  makeGetContainerData,
  makeGetToolsData,
} from '../../../apis';

function* fetchAppData() {
  const data: ContainerState = yield axios
    .get(GET_APP_DATA_API)
    .then(response => response.data);

  if (data) {
    yield put(actions.setData(data));

    const containerIds = yield select(makeContainerIdsSelector);
    const toolsIds = yield select(makeToolsIdsSelector);

    yield all(containerIds.map((id: string) => call(fetchContainerData, id)));
    yield all(toolsIds.map((id: string) => call(fetchToolData, id)));
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

function* fetchToolData(id: string) {
  const toolData = yield axios
    .get(makeGetToolsData(id))
    .then(response => response.data);

  if (toolData) {
    yield put(actions.setToolData(toolData));
  }
}

export default function* appSaga() {
  yield takeLatest(actions.fetchData.type, fetchAppData);
}
