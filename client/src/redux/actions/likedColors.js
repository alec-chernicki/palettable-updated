// @flow
import type { ColorType } from '../../constants/FlowTypes';

type AddLikedColorAction = {
  type: 'ADD_LIKED_COLOR',
  payload: ColorType
};

type AddLikedColorsAction = {
  type: 'ADD_LIKED_COLORS',
  payload: Array<ColorType>
};

type RemoveLikedColorAction = {
  type: 'REMOVE_LIKED_COLOR',
  payload: ColorType
};

type ChangeLikedColorAction = {
  type: 'CHANGE_LIKED_COLOR',
  payload: { color: ColorType, newHexCode: string }
};

type LikeColorAction = {
  type: 'LIKE_COLOR',
  payload: ColorType
};

type RemoveColorAction = {
  type: 'REMOVE_COLOR',
  payload: ColorType
};

type ChangeColorAction = {
  type: 'CHANGE_COLOR',
  payload: { color: ColorType, newHexCode: string }
};

export type LikedColorsActions =
  | AddLikedColorAction
  | AddLikedColorsAction
  | RemoveLikedColorAction
  | ChangeLikedColorAction

export const addLikedColor = (
  color: ColorType
): AddLikedColorAction => {
  return { type: 'ADD_LIKED_COLOR', payload: color };
};

export const addLikedColors = (
  colors: Array<ColorType>
): AddLikedColorsAction => {
  return { type: 'ADD_LIKED_COLORS', payload: colors };
};

export const removeLikedColor = (
  color: ColorType
): RemoveLikedColorAction => {
  return { type: 'REMOVE_LIKED_COLOR', payload: color };
};

export const changeLikedColor = (
  { color, newHexCode } : { color: ColorType, newHexCode: string }
): ChangeLikedColorAction => {
  return { type: 'CHANGE_LIKED_COLOR', payload: { color, newHexCode }}
};

export const likeColor = (
  color: ColorType
): LikeColorAction => {
  return { type: 'LIKE_COLOR', payload: color}
};

export const removeColor = (
  color: ColorType
): RemoveColorAction => {
  return { type: 'REMOVE_COLOR', payload: color}
};

export const changeColor = (
  { color, newHexCode } : { color: ColorType, newHexCode: string }
): ChangeColorAction => {
  return { type: 'CHANGE_COLOR', payload: { color, newHexCode }}
};
