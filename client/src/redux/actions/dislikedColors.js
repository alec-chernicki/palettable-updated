// @flow
type AddDislikedColorAction = { type: 'ADD_DISLIKED_COLOR', payload: string };
type DislikedColorAction = { type: 'DISLIKE_COLOR', payload: string };

export type DislikedColorActions = AddDislikedColorAction | DislikedColorAction;

export const addDislikedColor = (color: string): AddDislikedColorAction => {
  return { type: 'ADD_DISLIKED_COLOR', payload: color };
};

// Handled by Sagas
export const dislikeColor = (color: string): DislikedColorAction => {
  return { type: 'DISLIKE_COLOR', payload: color };
};
