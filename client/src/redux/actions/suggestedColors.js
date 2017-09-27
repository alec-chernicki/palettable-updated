// @flow
import type { ColorType } from '../../constants/FlowTypes';

type ReceivePaletteAction = {
  type: 'RECEIVE_PALETTE',
  payload: Array<ColorType>
};
type RequestPaletteAction = {
  type: 'REQUEST_PALETTE',
  payload: null
};

export type SuggestedColorActions =
  | ReceivePaletteAction
  | RequestPaletteAction;

export const receivePalette = (
  sourcePalette:  Array<ColorType>
): ReceivePaletteAction => {
  return { type: 'RECEIVE_PALETTE', payload: sourcePalette };
};

// Handled by Sagas
export const requestPalette = (): RequestPaletteAction => {
  return { type: 'REQUEST_PALETTE', payload: null };
};
