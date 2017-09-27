// @flow
import type { ColorType } from '../../constants/FlowTypes';

type SetIsColorPickerActiveAction = {
  type: 'SET_IS_COLOR_PICKER_ACTIVE',
  payload: { color: ColorType, isColorPickerActive: boolean }
};

type AddLikedColorAction = {
  type: 'ADD_LIKED_COLOR',
  payload: { color: ColorType }
};

type AddLikedColorsAction = {
  type: 'ADD_LIKED_COLORS',
  payload: { colors: Array<ColorType> }
};

type RemoveLikedColorAction = {
  type: 'REMOVE_LIKED_COLOR',
  payload: { color: ColorType }
};

type changeLikedColorAction = {
  type: 'CHANGE_LIKED_COLOR',
  payload: { color: ColorType, newHexCode: string }
};

type LikeColorAction = {
  type: 'LIKE_COLOR',
  payload: { color: ColorType }
};

type RemoveColorAction = {
  type: 'REMOVE_COLOR',
  payload: { color: ColorType }
};

type ChangeColorAction = {
  type: 'CHANGE_COLOR',
  payload: { color: ColorType, newHexCode: string }
};

export type LikedColorsActions =
  | SetIsColorPickerActiveAction
  | AddLikedColorAction
  | AddLikedColorsAction
  | RemoveLikedColorAction
  | changeLikedColorAction

export const setIsColorPickerActive = (
  color: ColorType,
  isColorPickerActive: boolean
): SetIsColorPickerActiveAction => {
  return { type: 'SET_IS_COLOR_PICKER_ACTIVE', payload: { color, isColorPickerActive }};
};

export const addLikedColor = (
  color: ColorType
): AddLikedColorAction => {
  return { type: 'ADD_LIKED_COLOR', payload: { color }};
};

export const addLikedColors = (
  colors: Array<ColorType>
): AddLikedColorsAction => {
  return { type: 'ADD_LIKED_COLORS', payload: { colors }};
};

export const removeLikedColor = (
  color: ColorType
): RemoveLikedColorAction => {
  return { type: 'REMOVE_LIKED_COLOR', payload: { color }};
};

export const changeLikedColor = (
  { color, newHexCode } : { color: ColorType, newHexCode: string }
): changeLikedColorAction => {
  return { type: 'CHANGE_LIKED_COLOR', payload: { color, newHexCode }}
};

export const likeColor = (
  color: ColorType
): LikeColorAction => {
  return { type: 'LIKE_COLOR', payload: { color }}
};

export const removeColor = (
  color: ColorType
): RemoveColorAction => {
  return { type: 'REMOVE_COLOR', payload: { color }}
};

export const changeColor = (
  { color, newHexCode } : { color: ColorType, newHexCode: string }
): ChangeColorAction => {
  return { type: 'CHANGE_COLOR', payload: { color, newHexCode }}
};
