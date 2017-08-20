import { createActions } from 'redux-actions';

export const { receivePalette, requestPalette } = createActions({
  RECEIVE_PALETTE: sourcePalette => sourcePalette,

  // Actions handled by sagas
  REQUEST_PALETTE: () => {},
});
