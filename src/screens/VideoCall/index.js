import React, {useEffect, useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {taggleVideoCallActive} from '../../store/actions/private-chat';

const VideoCall = ({navigation, route}) => {
  const [videoCall, setVideoCall] = useState(true);
  const {roomId} = route.params;
  const dispatch = useDispatch();

  const rtcProps = {
    token:
      '006ddb63cfefec64b40b5e059247902ab42IABwAAtqMIKU4TiI3PIVrgub+kp/UsfJhcIczccDAVDBeNxmASoAAAAAEADjKAaA/OAMYQEAAQD84Axh',
    channel: 'VIDCHAT',
    appId: 'ddb63cfefec64b40b5e059247902ab42',
  };

  const callbacks = {
    EndCall: () => {
      handelTaggleVideoIcon('false');
      navigation.pop();
    },
  };

  // when user open video call
  useEffect(() => {
    handelTaggleVideoIcon('true');
  }, []);

  const handelTaggleVideoIcon = value => {
    dispatch(taggleVideoCallActive(roomId, value));
  };

  return videoCall ? (
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default VideoCall;
