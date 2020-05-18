/**
 * Gets the data of the user from Api
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { API_URL } from 'utils/constants';
import { dataLoaded, dataError, FETCH_DATA } from './actions';

/**
 * get data request/response handler
 */
export function* getCatsData() {
  const requestURL = `${API_URL}/caption/`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    yield put(dataLoaded(res.data));
  } catch (err) {
    yield put(dataError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* data() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(FETCH_DATA, getCatsData);
}
