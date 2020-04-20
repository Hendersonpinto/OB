import { SHOW_MODAL } from "../actions/types";

const INITIAL_STATE = {
  show: false,
};

export default (state = INITIAL_STATE, action) => {
  if (action.type === SHOW_MODAL) {
    return { ...state, show: !state.show, paid: false };
  }
  return state;
};
