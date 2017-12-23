// @flow
import type { SuggestedColorActions } from '../actions/suggestedColors';
import { RECEIVE_PALETTE, REQUEST_PALETTE } from '../actions/ActionTypes';

type State = ColorType[];

const defaultState = [];

export default function reducer(
  state: State = defaultState,
  action: SuggestedColorActions
): State {
  switch (action.type) {
    case RECEIVE_PALETTE:
      return action.payload;

    case REQUEST_PALETTE:
      return state;

    default:
      return state;
  }
}
