// @flow
import shortId from 'shortid';
import type { LikedColorsActions } from '../actions/likedColors';
import type { ColorType } from '../../constants/FlowTypes';
import {
  ADD_LIKED_COLOR,
  ADD_LIKED_COLORS,
  REMOVE_LIKED_COLOR,
  CHANGE_LIKED_COLOR,
} from '../actions/ActionTypes';

type State = ColorType[];

const initialState = [];

export default function reducer (
  state: State = initialState,
  action: LikedColorsActions
): State {
  switch (action.type) {
    case ADD_LIKED_COLOR:
      const newLikedColor: ColorType = {
        ...action.payload,
        id: shortId.generate(),
      };

      return [...state, newLikedColor];

    case ADD_LIKED_COLORS:
      const colorsWithIds: ColorType[] = action.payload.map(color => {
        return {
          ...color,
          id: shortId.generate(),
        };
      });

      return [...state, ...colorsWithIds];

    case CHANGE_LIKED_COLOR:
      const { color, newHexCode } = action.payload;

      return state.map(likedColor => {
        if (likedColor.id !== color.id) {
          return likedColor;
        }

        return {
          ...likedColor,
          hexCode: newHexCode
        };
      });

    case REMOVE_LIKED_COLOR:
      const { id } = action.payload;

      return state.filter(color => {
        return color.id !== id;
      });

    default:
      return state;
  }
};

export const likedColorsEpic = (action$, store) => {

};
