// @flow
import type { ColorPickerActions } from '../actions/colorPicker';
import {
  SET_ACTIVE_COLOR_PICKER_ID
} from '../actions/ActionTypes';

type State = {
  +activeColorPickerId: string,
};

const initialState = {
  activeColorPickerId: '',
};

export default function reducer (
  state: State = initialState,
  action: ColorPickerActions
): State {
  switch (action.type) {
    case SET_ACTIVE_COLOR_PICKER_ID:
      return {
        ...state,
        activeColorPickerId: action.payload
      };

    default:
      return state;
  }
};
