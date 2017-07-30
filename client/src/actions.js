import removeDuplicatesFrom from './utils/removeDuplicatesFrom';
import updateUrlWith from './utils/updateUrlWith';
import isHex from './utils/isHex';
import PaletteAPI from './api/PaletteAPI';

// TODO: This is getting out of hand, implement redux-actions to handle some of this
import {
  CONTINUE_ONBOARDING, COMPLETE_ONBOARDING, RESTART_ONBOARDING, DISLIKE_COLOR,
  CHANGE_COLOR_TEXT, EDIT_COLOR_TEXT, RESET_COLOR_NAME, TOGGLE_COLOR_PICKER,
  ADD_COLOR, REMOVE_COLOR, CHANGE_COLOR,
  REQUEST_PALETTE, RECEIVE_PALETTE, RECEIVE_PALETTE_FAILED,
  INVALIDATE_PALETTE, CLOSE_ALL_COLOR_PICKERS,
} from './constants/ActionTypes';

export function continueOnboarding() {
  return {
    type: CONTINUE_ONBOARDING,
  };
}

export function completeOnboarding() {
  return {
    type: COMPLETE_ONBOARDING,
  };
}

export function removeColor(color) {
  return {
    type: REMOVE_COLOR,
    id: color.id,
  };
}

export function addColor(color) {
  return {
    type: ADD_COLOR,
    color,
  };
}

export function changeColor(color) {
  return {
    type: CHANGE_COLOR,
    color,
  };
}

export function dislikeColor(color) {
  return {
    type: DISLIKE_COLOR,
    color: color.color,
  };
}

export function toggleColorPicker(color) {
  return {
    type: TOGGLE_COLOR_PICKER,
    id: color.id,
  };
}

export function restartOnboarding() {
  return {
    type: RESTART_ONBOARDING,
  };
}

export function closeAllColorPickers() {
  return {
    type: CLOSE_ALL_COLOR_PICKERS,
  };
}

// TODO: Fix these weird names
export function changeColorText(color, text) {
  return {
    type: CHANGE_COLOR_TEXT,
    id: color.id,
    text,
  };
}

export function editColorText(color, text) {
  return {
    type: EDIT_COLOR_TEXT,
    id: color.id,
    text,
  };
}

export function resetColorName(color) {
  return {
    type: RESET_COLOR_NAME,
    color,
  };
}

function requestPalette(currentColors) {
  return {
    type: REQUEST_PALETTE,
    currentColors,
  };
}

function receivePalette(palette) {
  return {
    type: RECEIVE_PALETTE,
    colors: palette,
  };
}

function receivePaletteFailed() {
  return {
    type: RECEIVE_PALETTE_FAILED,
  };
}

export function invalidatePalette() {
  return {
    type: INVALIDATE_PALETTE,
  };
}

export function continueOnboardingIfNeeded() {
  return (dispatch, getState) => {
    const { onboarding: { step } } = getState();
    // FIXME: This checking logic is scattered around and gross
    if (step < 3 && step >= 0) {
      dispatch(continueOnboarding());
    } else if (step === 3) {
      dispatch(completeOnboarding());
    }
  };
}

function fetchInitialPalette() {

}

function fetchPalette(colors, dislikedColors) {
  return dispatch => {
    dispatch(requestPalette(colors));
    const flattenedColors = colors.map(color => color.color);

    if (colors.length <= 1 ) {
      return PaletteAPI.getRandom()
      .then(({ data }) => {
        dispatch(receivePalette(data));
      })
      .catch(() => {
        dispatch(receivePaletteFailed())
      });
    }

    return PaletteAPI.getWithColors(flattenedColors, dislikedColors)
      .then(({ data }) => {
        dispatch(receivePalette(data));
      })
      .catch(() => {
        dispatch(receivePaletteFailed())
      });
  };
}

function shouldFetchPalette(state) {
  const { colors, isFetching, didInvalidate } = state.fetchedPalette;
  if (colors.length === 0) {
    return true;
  } else if (isFetching) {
    return false;
  }
  return didInvalidate;
}

export function fetchColorFromPaletteIfNeeded() {
  return (dispatch, getState) => {
    const state = getState();
    const { dislikedColors, colors } = state.shownPalette;

    // Calls the server for a new palette if current one has been invalidated
    if (shouldFetchPalette(state)) {
      return dispatch(
        fetchPalette(colors, dislikedColors)
      ).then(() => {
        const color = getState().fetchedPalette.colors[0];
        return Promise.resolve(color);
      });
    }

    // Otherwise pulls from the last fetched palette that has been cached
    const color = removeDuplicatesFrom(colors, getState().fetchedPalette.colors);
    return Promise.resolve(color);
  };
}

export function addColorIfValid() {
  return (dispatch, getState) => {
    const { shownPalette: { colors }, onboarding } = getState();
    // TODO: This conditional is so so gross, fix pls
    if (colors.length < 5 && (onboarding.isCompleted || (onboarding.step <= 1 || onboarding.step > 3))) {
      return dispatch(
        fetchColorFromPaletteIfNeeded()
      ).then(color => {
        dispatch(addColor(color));
      }).then(() => {
        updateUrlWith(getState().shownPalette.colors.colors);
      })
      .then(() => {
        dispatch(continueOnboardingIfNeeded());
      });
    }
    return false;
  };
}

export function restartOnboardingAndUpdate() {
  return (dispatch, getState) => {
    dispatch(restartOnboarding());
    const { shownPalette: { colors } } = getState();
    updateUrlWith(colors);
  };
}

export function changeColorIfValid() {
  return (dispatch, getState) => {
    const { shownPalette: { colors }, onboarding } = getState();
    if (onboarding.isCompleted || (onboarding.step === 2 || onboarding.step > 3)) {
      dispatch(invalidatePalette());
      dispatch(dislikeColor(colors[colors.length - 1]));

      return dispatch(
        fetchColorFromPaletteIfNeeded()
      )
      .then(color => dispatch(changeColor(color)))
      .then(() => {
        updateUrlWith(getState().shownPalette.colors);
      })
      .then(() => {
        dispatch(continueOnboardingIfNeeded());
      });
    }
    return false;
  };
}

export function removeColorIfValid() {
  return (dispatch, getState) => {
    const { shownPalette: { colors }, onboarding } = getState();
    updateUrlWith(colors);
    if (colors.length > 1 && (onboarding.isCompleted || onboarding.step >= 3)) {
      dispatch(invalidatePalette());
      dispatch(removeColor(...colors.slice(-1)));
      dispatch(continueOnboardingIfNeeded());
      updateUrlWith(getState().shownPalette.colors);
    }
  };
}

export function loadPaletteFromURLIfValid(palette) {
  return (dispatch) => {
    const onboardingFinished = localStorage.getItem('onboardingCompletedPreviously');

    if (palette) {
      const formattedPalette = palette.split('-').filter((color) => isHex(color));

      if (formattedPalette.length > 1) {
        for (let i = 0; i < formattedPalette.length; i++) {
          dispatch(addColor(`#${formattedPalette[i]}`));
        }

        return dispatch(completeOnboarding());
      }
    }
    if (onboardingFinished) {
      dispatch(completeOnboarding());
    }
    return dispatch(addColorIfValid());
  };
}
