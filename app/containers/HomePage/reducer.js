/*
 *
 * CapCards reducer
 *
 */
import {
  FETCH_TAGS_DATA,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_ERROR,
  FETCH_CAPTIONS_DATA,
  FETCH_CAPTIONS_SUCCESS,
  FETCH_CAPTIONS_ERROR,
} from './actions';

export const initialState = {
  tags: [],
  captions: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
function captionCardsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TAGS_DATA: {
      const newState = {
        ...state,
        loading: true,
      };

      return newState;
    }
    case FETCH_TAGS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        tags: [...action.payload],
      };

      return newState;
    }

    case FETCH_TAGS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    case FETCH_CAPTIONS_DATA: {
      const newState = {
        ...state,
        loading: true,
      };

      return newState;
    }
    case FETCH_CAPTIONS_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        captions: [...action.payload],
      };

      return newState;
    }

    case FETCH_CAPTIONS_ERROR: {
      return { ...state, error: action.error, loading: false };
    }

    default:
      return state;
  }
}

export default captionCardsReducer;
