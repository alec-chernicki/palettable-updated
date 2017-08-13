import { createActions } from 'redux-actions';

export const { receivePalette, requestPalette } = createActions({
  RECEIVE_PALETTE: sourcePalette => sourcePalette,
  REQUEST_PALETTE: () => {},
});
