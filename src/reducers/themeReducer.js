import { CHANGE_THEME } from '../__constants__/index';

export const themeReducer = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.theme;
    default:
      return state;
  }
};