import {AUTHTICATION} from '../actions/type';

const initialState = {
  currentUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHTICATION:
      alert(action.payload.name);
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
