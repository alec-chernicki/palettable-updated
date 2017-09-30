// @flow
import type { ColorType } from '../../constants/FlowTypes';
import {
  ADD_LIKED_COLOR,
  ADD_LIKED_COLORS,
  REMOVE_LIKED_COLOR,
  CHANGE_LIKED_COLOR,
} from './ActionTypes';

type AddLikedColorAction = {
  type: typeof ADD_LIKED_COLOR,
  payload: ColorType
};

type AddLikedColorsAction = {
  type: typeof ADD_LIKED_COLORS,
  payload: ColorType[]
};

type RemoveLikedColorAction = {
  type: typeof REMOVE_LIKED_COLOR,
  payload: ColorType
};

type ChangeLikedColorAction = {
  type: typeof CHANGE_LIKED_COLOR,
  payload: { color: ColorType, newHexCode: string }
};

export type LikedColorsActions =
  | ChangeLikedColorAction
  | AddLikedColorAction
  | AddLikedColorsAction
  | RemoveLikedColorAction

export const addLikedColor = (
  color: ColorType
): AddLikedColorAction => {
  return { type: ADD_LIKED_COLOR, payload: color };
};

export const addLikedColors = (
  colors: ColorType[]
): AddLikedColorsAction => {
  return { type: ADD_LIKED_COLORS, payload: colors };
};

export const removeLikedColor = (
  color: ColorType
): RemoveLikedColorAction => {
  return { type: REMOVE_LIKED_COLOR, payload: color };
};

export const changeLikedColor = (
  { color, newHexCode } : { color: ColorType, newHexCode: string }
): ChangeLikedColorAction => {
  return { type: CHANGE_LIKED_COLOR, payload: { color, newHexCode }}
};





export const likeColor = (
  color: ColorType
): AddLikedColorAction => {
  return { type: ADD_LIKED_COLOR, payload: color };
};

export const changeColor = (
  { color, newHexCode } : { color: ColorType, newHexCode: string }
): ChangeLikedColorAction => {
  return { type: 'CHANGE_COLOR', payload: { color, newHexCode }}
};

export const removeColor = (
  color: ColorType
): RemoveLikedColorAction => {
  return { type: 'REMOVE_COLOR', payload: color };
};
