import {
  TOGGLE_BOTTOM_NAV,
  CLOSE_BOTTOM_NAV,
  OPEN_BOTTOM_NAV,
  TOGGLE_CATEGORY,
} from '../constants/ui';

const initialState = {
  toggleBottomNav: false,
  element: '',
  title: '',
  icon: '',
  toggleCategory: false,
};

const UIReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_BOTTOM_NAV:
      return {
        ...state,
        toggleBottomNav: !state.toggleBottomNav,
        element: payload.elmt,
        title: payload.title,
        icon: payload.icon,
      };
    case OPEN_BOTTOM_NAV:
      return {
        ...state,
        toggleBottomNav: true,
        element: payload.elmt,
        title: payload.title,
        icon: payload.icon,
      };
    case CLOSE_BOTTOM_NAV:
      return {
        ...initialState,
      };
    case TOGGLE_CATEGORY:
      return {
        ...state,
        toggleCategory: !state.toggleCategory,
      };
    default:
      return state;
  }
};

export default UIReducer;
