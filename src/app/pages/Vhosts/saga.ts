import { takeLatest, put, select, all, call } from 'redux-saga/effects';
import axios from 'axios';
import { actions } from './slice';
import { ContainerState, Vhost } from './types';
import {
  makeVhostsSelector,
  makeDomainErrorSelector,
  makeDirectoryErrorSelector,
} from './selectors';
import {
  getVhosts as GET_VHOSTS_API,
  makeGetVhostDirectory,
  makeGetVhostsDomain,
} from '../../../apis';

function* fetchVhostsData() {
  const data: ContainerState = yield axios
    .get(GET_VHOSTS_API)
    .then(response => response.data);

  if (data) {
    yield put(actions.setData(data));

    const vhosts: Vhost[] = yield select(makeVhostsSelector);

    yield all(vhosts.map(vhost => call(fetchDirectory, vhost.id)));
  }
}

function* fetchDirectory(vhostId: string) {
  try {
    yield axios.get(makeGetVhostDirectory(vhostId));
    yield call(fetchDomain, vhostId);
  } catch (e) {
    const selector = makeDirectoryErrorSelector(vhostId);
    const error = yield select(selector);
    yield put(actions.setVhostError({ vhostId, error }));
  }
}

function* fetchDomain(vhostId: string) {
  try {
    yield axios.get(makeGetVhostsDomain(vhostId), { timeout: 1000 });
  } catch (e) {
    const selector = makeDomainErrorSelector(vhostId);
    const error = yield select(selector);
    yield put(actions.setVhostError({ vhostId, error }));
  }
}

export default function* vhostsSaga() {
  yield takeLatest(actions.fetchData.type, fetchVhostsData);
}
