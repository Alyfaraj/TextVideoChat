import React, {useState} from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import {Text} from 'react-native';

const VideoCall = ({navigation}) => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    token:
      '006ddb63cfefec64b40b5e059247902ab42IABQxlDc0odAPpEnSSJ95gddactpLt/5qkVmAdAOY1rNXVDyQxIAAAAAEAC2CAMvfZ0KYQEAAQB8nQph',
    channel: 'CHATVID',
    appId: 'ddb63cfefec64b40b5e059247902ab42',
  };
  const callbacks = {
    EndCall: () => navigation.pop(),
  };
  return videoCall ? (
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  ) : (
    <Text onPress={() => setVideoCall(true)}>Start Call</Text>
  );
};

export default VideoCall;
