import React from "react";
import Mute from "../../assets/mute.png";
import Unmute from "../../assets/unmute.png";
import {
  useHMSActions,
  useHMSStore,
  selectPeers,
  selectLocalPeer,
  selectIsLocalAudioEnabled,
  selectIsLocalVideoEnabled,
  selectIsLocalScreenShared
} from "@100mslive/hms-video-react";

const ControlBar = () => {
  const peers = useHMSStore(selectPeers);
  const hmsActions = useHMSActions();
  const localPeer = useHMSStore(selectLocalPeer);
  const isModerator = localPeer.roleName === "class";
  const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
  const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
  const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

  // Toggle options

  const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
  };
  const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
  };
  
  const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
  }

  return (
    
    <>
    <div className="fixed bottom-0 h-5 w-screen flex items-center justify-center z-10 mb-20">
     <>
{
isModerator ?        
<>
{
  isLocalAudioEnabled ? (
    <img src={Unmute} alt="mute" className="image h-5 w-5 rounded-lg" />
  ) : (
    <img src={Mute} alt="unmute" className="image h-5 w-5 bg-gray-900 rounded-lg" />
  )};

<button
  className="tracking-wider outline-none mr-2"
  onClick={toggleAudio}
  active={isLocalAudioEnabled}
>
  {<button
  className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-iwhite ml-2 bg-red-600"
  onClick={() => {
      hmsActions.endRoom(false, "reason") && hmsActions.leave();
  }}
>
    End
  </button>}

{isLocalScreenShared ? "Unshare" : "Share"}
  <button
    className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500 mr-2"
    onClick={toggleScreen}
    active={!isLocalScreenShared}
  >
      
  </button>

{isLocalVideoEnabled ? "Hide" : "Unhide"}
<button
  className="text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-indigo-500"
  onClick={toggleVideo}
>
  {/* code here */}
</button>
</> : null
}
    

  {/* End room buttom rendering */}

    <button
    className='text-xs uppercase tracking-wider bg-white py-1 px-2 rounded-lg shadow-lg text-iwhite ml-2 bg-red-600'
    // code here
  >
   End
  </button>
     </> 
   </div>
    </>
    
  );
};

const isLocalAudioEnabled = useHMSStore(selectIsLocalAudioEnabled);
const isLocalVideoEnabled = useHMSStore(selectIsLocalVideoEnabled);
const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

const toggleAudio = async () => {
    await hmsActions.setLocalAudioEnabled(!isLocalAudioEnabled);
};
const toggleVideo = async () => {
    await hmsActions.setLocalVideoEnabled(!isLocalVideoEnabled);
};
const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
}


export default ControlBar;
