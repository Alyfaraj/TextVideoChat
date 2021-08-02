import {
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USERS_LOADIND,
} from '../actions/type';

const initialState = {
  users: [],
  error: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      };
    case GET_USERS_LOADIND:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
};
