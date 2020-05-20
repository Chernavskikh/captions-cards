export const FETCH_TAGS_DATA = 'FETCH_TAGS_DATA';
export const FETCH_TAGS_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_TAGS_ERROR = 'FETCH_ERROR';
export const FETCH_CAPTIONS_DATA = 'FETCH_CAPTIONS_DATA';
export const FETCH_CAPTIONS_SUCCESS = 'FETCH_CAPTIONS_SUCCESS';
export const FETCH_CAPTIONS_ERROR = 'FETCH_CAPTIONS_ERROR';

// Actions
export function getTagsData() {
  return {
    type: FETCH_TAGS_DATA,
  };
}

export function dataTagsLoaded(res) {
  return {
    type: FETCH_TAGS_SUCCESS,
    payload: res,
  };
}

export function dataTagsError(error) {
  return {
    type: FETCH_TAGS_ERROR,
    error,
  };
}

export function getCaptionsData() {
  return {
    type: FETCH_CAPTIONS_DATA,
  };
}

export function dataCaptionsLoaded(res) {
  return {
    type: FETCH_CAPTIONS_SUCCESS,
    payload: res,
  };
}

export function dataCaptionsError(error) {
  return {
    type: FETCH_CAPTIONS_ERROR,
    error,
  };
}
