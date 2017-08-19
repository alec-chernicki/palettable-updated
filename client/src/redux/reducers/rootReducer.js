import { combineReducers } from 'redux';
import dataStatus from './dataStatus';
import suggestedColors from './suggestedColors';
import likedColors from './likedColors';
import dislikedColors from './dislikedColors';

const rootReducer = combineReducers({
  dataStatus,
  likedColors,
  dislikedColors,
  suggestedColors,
});

export default rootReducer;
