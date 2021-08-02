import {combineReducers} from 'redux';
import auth from './auth';
import chatRooms from './chat-rooms';
import privateChat from './private-chat';
import users from './users';

export default combineReducers({
  users,
  auth,
  chatRooms,
  privateChat,
});
