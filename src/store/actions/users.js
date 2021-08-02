import firestore from '@react-native-firebase/firestore';
import {getMyRooms} from './chat-rooms';
import {AUTHTICATION, GET_USERS_LOADIND, GET_USERS_SUCCESS} from './type';

export const getUsers = () => {
  return dispatch => {
    // loading will be true value
    dispatch({type: GET_USERS_LOADIND});
    let users = [];
    const subscriber = firestore()
      .collection('users')
      .orderBy('name', 'desc')
      .onSnapshot(documentSnapshot => {
        documentSnapshot.docs.map(user => {
          users.push(user._data);
        });
        // users will take new data and loading == false
        dispatch({type: GET_USERS_SUCCESS, payload: users});
        // auth me with random user from list
        const rondamNumber = Math.floor(Math.random() * users.length);
        dispatch({type: AUTHTICATION, payload: users[rondamNumber]});
        dispatch(getMyRooms());
        users = [];
      });
    return () => subscriber();
  };
};
