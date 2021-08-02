import {SET_CHAT_ROOMS} from '../actions/type';

const initialState = {
  rooms: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CHAT_ROOMS:
      return {
        ...state,
        rooms: action.payload,
      };

    default:
      return state;
  }
};
