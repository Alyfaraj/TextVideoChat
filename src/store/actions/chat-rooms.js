import firestore from '@react-native-firebase/firestore';
import {SET_CHAT_ROOMS} from './type';

export const createNewChat = reciver => {
  return (dispatch, getState) => {
    const {currentUser} = getState().auth;

    let channalId =
      reciver.id > currentUser.id
        ? reciver.id + '' + currentUser.id
        : currentUser.id + '' + reciver.id;

    firestore()
      .collection('MESSAGE_ROOMS')
      .doc(channalId)
      .set({
        channalId,
        users: [
          {
            id: currentUser.id,
            name: currentUser.name,
            image: currentUser.image,
          },
          {
            id: reciver.id,
            name: reciver.name,
            image: reciver.image,
          },
        ],
        latestMessage: {
          text: `chat created. Welcome!!`,
          createdAt: new Date().getTime(),
        },
      })
      .then(() => {
        // navigation.navigate('ChatRoom');
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const getMyRooms = () => {
  return (dispatch, getState) => {
    const {currentUser} = getState().auth;

    let rooms = [];
    firestore()
      .collection('MESSAGE_ROOMS')
      .onSnapshot(documentSnapshot => {
        documentSnapshot.docs.map(room => {
          if (
            room._data.users[0].id == currentUser.id ||
            room._data.users[1].id == currentUser.id
          ) {
            rooms.push(room._data);
          }
        });
        dispatch({type: SET_CHAT_ROOMS, payload: rooms});
        rooms = [];
      });
  };
};
