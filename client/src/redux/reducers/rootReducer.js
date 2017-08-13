import { combineReducers } from 'redux';
import dataStatus from './dataStatus';
import sourcePalette from './sourcePalette';
import shownPalette from './shownPalette';

const rootReducer = combineReducers({
  dataStatus,
  shownPalette,
  sourcePalette,
});

export default rootReducer;
