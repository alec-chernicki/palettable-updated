import removeDuplicatesFrom from './utils/removeDuplicatesFrom';
import updateUrlWith from './utils/updateUrlWith';
import isHex from './utils/isHex';
import PaletteAPI from './api/PaletteAPI';

// function fetchPalette(colors, dislikedColors) {
//   return dispatch => {
//     dispatch(requestPalette(colors));
//     const flattenedColors = colors.map(color => color.color);
//
//     if (colors.length <= 1 ) {
//       return PaletteAPI.getRandom()
//       .then(({ data }) => {
//         dispatch(receivePalette(data));
//       })
//       .catch(() => {
//         dispatch(receivePaletteFailed())
//       });
//     }
//
//     return PaletteAPI.getWithColors(flattenedColors, dislikedColors)
//       .then(({ data }) => {
//         dispatch(receivePalette(data));
//       })
//       .catch(() => {
//         dispatch(receivePaletteFailed())
//       });
//   };
// }

// export function fetchColorFromPaletteIfNeeded() {
//   return (dispatch, getState) => {
//     const state = getState();
//     const { dislikedColors, colors } = state.shownPalette;
//
//     // Calls the server for a new palette if current one has been invalidated
//     if (shouldFetchPalette(state)) {
//       return dispatch(
//         fetchPalette(colors, dislikedColors)
//       ).then(() => {
//         const color = getState().fetchedPalette.colors[0];
//         return Promise.resolve(color);
//       });
//     }
//
//     // Otherwise pulls from the last fetched palette that has been cached
//     const color = removeDuplicatesFrom(colors, getState().fetchedPalette.colors);
//     return Promise.resolve(color);
//   };
// }

// export function addColorIfValid() {
//   return (dispatch, getState) => {
//     const { shownPalette: { colors }} = getState();
//
//     // TODO: This conditional is so so gross, fix pls
//     if (colors.length < 5) {
//       return dispatch(
//         fetchColorFromPaletteIfNeeded()
//       ).then(color => {
//         dispatch(addColor(color));
//       }).then(() => {
//         updateUrlWith(getState().shownPalette.colors.colors);
//       });
//     }
//     return false;
//   };
// }
//
// export function changeColorIfValid() {
//   return (dispatch, getState) => {
//     const { shownPalette: { colors } } = getState();
//     if (true) {
//       dispatch(invalidatePalette());
//       dispatch(dislikeColor(colors[colors.length - 1]));
//
//       return dispatch(
//         fetchColorFromPaletteIfNeeded()
//       )
//       .then(color => dispatch(changeColor(color)))
//       .then(() => {
//         updateUrlWith(getState().shownPalette.colors);
//       })
//     }
//
//     return false;
//   };
// }
//
// export function removeColorIfValid() {
//   return (dispatch, getState) => {
//     const { shownPalette: { colors } } = getState();
//     updateUrlWith(colors);
//     if (colors.length > 1) {
//       dispatch(invalidatePalette());
//       dispatch(removeColor(...colors.slice(-1)));
//       updateUrlWith(getState().shownPalette.colors);
//     }
//   };
// }
//
// export function loadPaletteFromURLIfValid(palette) {
//   return (dispatch) => {
//     if (palette) {
//       const formattedPalette = palette.split('-').filter((color) => isHex(color));
//
//       if (formattedPalette.length > 1) {
//         for (let i = 0; i < formattedPalette.length; i++) {
//           dispatch(addColor(`#${formattedPalette[i]}`));
//         }
//
//       }
//     }
//     return dispatch(addColorIfValid());
//   };
// }
