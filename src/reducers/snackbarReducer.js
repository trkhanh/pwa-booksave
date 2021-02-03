import { SHOW_MESSAGE, HIDE_MESSAGE } from '../__constants__';

export const snackbarReducer = (state = '', action) => {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.message;

    case HIDE_MESSAGE:
      return '';
    default:
      return state;
  }
};