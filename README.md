# TextVideoChat

This is a mobile application I built for interview task , using React-Native (v0.64.2).

Application has two screens: one for messages rooms and one for chat. Users list on frist screen predefined in the firebase DB and when running application 
current user data will select be rondam from users list and show alert with username .

# Getting Started
<h3>Installing</h3>
<h6>- clone repo </h6>
<h6>- npm i</h6>
<h6>- cd ios </h6>
<h6>- pod instll</h6>
<h6>- cd..</h6>
<h5>npm run ios / npm run android</h5>


# Features

<h3>* Redux</h3>
<h5>For global state management</h5>


<h3>* Firebase (Firestore)</h3>
<h5>For real-time DB</h5>
<p>
firestore includes three collections  MESSAGE_ROOMS , USERS main collections and MESSAGES collection inside evey MESSAGE_ROOM collection . 
MESSAGE_ROOMS's object include MESSAGES collection , last message , channalId and video_call(true/false).
</p>


<h3>* React Navigation v5</h3>

<h3>* agora-rn-uikit</h3>
<h5> Integrate video calling with (agoraIO) into application with built in UI Elements.</h5>



