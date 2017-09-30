// @flow
import type { ColorType } from '../../constants/FlowTypes';
import {
  RECEIVE_PALETTE,
  REQUEST_PALETTE
} from './ActionTypes';

type ReceivePaletteAction = {
  type: typeof RECEIVE_PALETTE,
  payload: Array<ColorType>
};

type RequestPaletteAction = {
  type: typeof REQUEST_PALETTE,
  payload: null
};

export type SuggestedColorActions =
  | ReceivePaletteAction
  | RequestPaletteAction;

export const receivePalette = (
  sourcePalette:  Array<ColorType>
): ReceivePaletteAction => {
  return { type: RECEIVE_PALETTE, payload: sourcePalette };
};

// Handled by Sagas
export const requestPalette = (): RequestPaletteAction => {
  return { type: REQUEST_PALETTE, payload: null };
};
