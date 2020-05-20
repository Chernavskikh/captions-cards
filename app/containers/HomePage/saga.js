/**
 * Gets the data of the user from Api
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { API_URL } from 'utils/constants';
import {
  dataTagsLoaded,
  dataTagsError,
  dataCaptionsLoaded,
  dataCaptionsError,
  FETCH_TAGS_DATA,
  FETCH_CAPTIONS_DATA,
} from './actions';

/**
 * get data request/response handler
 */
export function* getTagsData() {
  const requestURL = `${API_URL}/tag/`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    yield put(dataTagsLoaded(res.data.tags));
  } catch (err) {
    yield put(dataTagsError(err));
  }
}

export function* getCaptionsData() {
  const requestURL = `${API_URL}/caption/`;

  try {
    // Call our request helper (see 'utils/request')
    const res = yield call(request, requestURL);
    yield put(dataCaptionsLoaded(res.data.captions));
  } catch (err) {
    yield put(dataCaptionsError(err));
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
  yield takeLatest(FETCH_TAGS_DATA, getTagsData);
  yield takeLatest(FETCH_CAPTIONS_DATA, getCaptionsData);
}
