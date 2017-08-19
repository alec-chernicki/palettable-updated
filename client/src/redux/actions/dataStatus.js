import { createActions } from 'redux-actions';

export const { requestPalette, setIsStale } = createActions({
  REQUEST_PALETTE: () => ({ isFetching: true }),
  SET_IS_STALE: isStale => ({ isStale }),
});
