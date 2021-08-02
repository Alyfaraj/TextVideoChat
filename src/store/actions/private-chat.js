import firestore from '@react-native-firebase/firestore';
import {SET_PRIVATE_CHAT} from './type';

export const getPrivateChat = roomId => {
  return dispatch => {
    let messages = [];
    const subscriber = firestore()
      .collection('MESSAGE_ROOMS')
      .doc(roomId)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(documentSnapshot => {
        documentSnapshot.docs.map(message => {
          messages.push(message._data);
        });
        console.log('SET_PRIVATE_CHAT', messages);
        dispatch({type: SET_PRIVATE_CHAT, payload: messages});

        messages = [];
      });
    return () => subscriber();
  };
};

export const addNewMessage = (roomId, messageText) => {
  return (dispatch, getState) => {
    const {currentUser} = getState().auth;

    firestore()
      .collection('MESSAGE_ROOMS')
      .doc(roomId)
      .collection('MESSAGES')
      .add({
        messageText,
        createdAt: new Date().getTime(),
        user: {
          id: currentUser.id,
          displayName: currentUser.name,
          image: currentUser.image,
        },
      })
      .then(() => {});

    firestore()
      .collection('MESSAGE_ROOMS')
      .doc(roomId)
      .set(
        {
          latestMessage: {
            text: messageText,
            createdAt: new Date().getTime(),
          },
        },
        {merge: true},
      );
  };
};
