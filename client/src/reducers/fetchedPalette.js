import {
  REQUEST_PALETTE, RECEIVE_PALETTE, INVALIDATE_PALETTE, RECEIVE_PALETTE_FAILED
} from '../constants/ActionTypes';

const DEFAULT_PALETTE =  ['#598987','#678F8D','#77A88D','#FFD000','#FF6670']

const initialState = {
  fetchFailed: false,
  isFetching: false,
  didInvalidate: false,
  colors: [],
};

export function fetchedPalette(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PALETTE:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    case RECEIVE_PALETTE:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        colors: action.colors.map(color => `#${color}`),
      };
    case INVALIDATE_PALETTE:
      return {
        ...state,
        didInvalidate: true,
      };
    case RECEIVE_PALETTE_FAILED:
      return {
        ...state,
        fetchFailed: true,
        isFetching: false,
        didInvalidate: false,
        colors: DEFAULT_PALETTE
      };
    default:
      return state;
  }
}
