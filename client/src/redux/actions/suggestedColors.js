// @flow
import { RECEIVE_PALETTE, REQUEST_PALETTE } from './ActionTypes';

type ReceivePaletteAction = {
  type: typeof RECEIVE_PALETTE,
  payload: ColorType[],
};

type RequestPaletteAction = {
  type: typeof REQUEST_PALETTE,
  payload: null,
};

export type SuggestedColorActions = ReceivePaletteAction | RequestPaletteAction;

export const receivePalette = (palette: ColorType[]): ReceivePaletteAction => {
  return { type: RECEIVE_PALETTE, payload: palette };
};

export const requestPalette = (): RequestPaletteAction => {
  return { type: REQUEST_PALETTE, payload: null };
};
