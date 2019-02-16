import { TOGGLE_SIDEBAR_VISIBILITY } from './../actions/ui';

const initialState = {
  isSidebarVisible: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR_VISIBILITY:
      return { ...state, isSidebarVisible: !state.isSidebarVisible };
    default:
      return state;
  }
};
