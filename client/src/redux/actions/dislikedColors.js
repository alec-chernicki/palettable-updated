// @flow
type AddDislikedColorAction = {
  type: 'ADD_DISLIKED_COLOR',
   payload: Object
 };
type DislikedColorAction = {
   type: 'DISLIKE_COLOR',
   payload: Object
 };

export type DislikedColorActions =
  | AddDislikedColorAction
  | DislikedColorAction;

export const addDislikedColor = (
  color: Object
): AddDislikedColorAction => {
  return { type: 'ADD_DISLIKED_COLOR', payload: color };
};

// Handled by Sagas
export const dislikeColor = (
  color: Object
): DislikedColorAction => {
  return { type: 'DISLIKE_COLOR', payload: color };
};
