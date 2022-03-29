import React from "react";
import JoinForm from "./Join/JoinForm";
import Conference from "./Conference";
import { useEffect } from "react";
import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore
} from "@100mslive/react-sdk";
import Footer from './Components/Control/Footer';
import Container from "./Components/Whiteboard/ui/Container/Container";

{isConnected ? <Room /> : <JoinForm /> } 
 export default function App() {
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected]);

  return (
    <div className="App">
  
      {isConnected ? (
        <>
        <Conference />
        <Footer />
        <Container/>
        </>
        
      ) : (
        <JoinForm />
      
      )}
    </div>
  );
}
  

