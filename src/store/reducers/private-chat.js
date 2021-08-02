import {SET_PRIVATE_CHAT} from '../actions/type';

const initialState = {
  messages: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRIVATE_CHAT:
      return {
        ...state,
        messages: action.payload,
      };

    default:
      return state;
  }
};
