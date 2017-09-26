// @flow
type ReceivePaletteAction = { type: 'RECEIVE_PALETTE', payload: string };
type RequestPaletteAction = { type: 'REQUEST_PALETTE', payload: null };

export type DislikedColorActions = ReceivePaletteAction | RequestPaletteAction;

export const receivePalette = (sourcePalette: string): ReceivePaletteAction => {
  return { type: 'RECEIVE_PALETTE', payload: sourcePalette };
};

// Handled by Sagas
export const requestPalette = (): RequestPaletteAction => {
  return { type: 'REQUEST_PALETTE', payload: null };
};
