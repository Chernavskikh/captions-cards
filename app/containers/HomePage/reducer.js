/*
 *
 * CapCards reducer
 *
 */
import { FETCH_DATA, FETCH_SUCCESS, FETCH_ERROR } from './actions';

export function fetchPosts() {
  return {
    type: FETCH_DATA,
  };
}

export const initialState = {
  tags: [],
  captions: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
function captionCardsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      const newState = {
        ...state,
        loading: true,
      };

      return newState;
    }
    case FETCH_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        tags: [...action.payload],
      };

      return newState;
    }

    case FETCH_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    default:
      return state;
  }
}

export default captionCardsReducer;
