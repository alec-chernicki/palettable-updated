// @flow
import shortId from 'shortid';
import type { LikedColorsActions } from '../actions/likedColors';
import type { ColorType } from '../../constants/FlowTypes';

type State = ColorType[];

const initialState = [];

const likedColorsReducer = (state: State = initialState, action: LikedColorsActions): State => {
  switch (action.type) {
    case "ADD_LIKED_COLOR":
      const newLikedColor: ColorType = {
        ...action.payload,
        id: shortId.generate(),
      };

      return [...state, newLikedColor];

    case "ADD_LIKED_COLORS":
      const colorsWithIds = action.payload.map(color => {
        return {
          ...color,
          id: shortId.generate(),
        };
      });

      return [...state, ...colorsWithIds];

    case "CHANGE_LIKED_COLOR":
      return state.map(color => {
        if (color.id !== action.payload.color.id) {
          return color;
        }

        return {
          ...color,
          hexCode: action.payload.newHexCode
        };
      });

    case "REMOVE_LIKED_COLOR":
      return state.filter((color: ColorType) => {
        return color.id !== action.payload.id;
      });

    default:
      return state;
  }
};

export default likedColorsReducer;
