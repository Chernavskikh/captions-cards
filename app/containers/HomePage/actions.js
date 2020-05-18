export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

// Actions
export function getData() {
  return {
    type: FETCH_DATA,
  };
}

export function dataLoaded(res) {
  return {
    type: FETCH_SUCCESS,
    payload: res,
  };
}

export function dataError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}
