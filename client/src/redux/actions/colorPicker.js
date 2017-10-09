// @flow
import {
  SET_ACTIVE_COLOR_PICKER_ID,
} from './ActionTypes'

type SetActiveColorPickerId = {
  type: typeof SET_ACTIVE_COLOR_PICKER_ID,
  payload: string
};

export type ColorPickerActions =
  | SetActiveColorPickerId

export const setActiveColorPickerId = (
  activeColorPickerId: string
): SetActiveColorPickerId => {
  return { type: SET_ACTIVE_COLOR_PICKER_ID, payload: activeColorPickerId };
};
