import React from "react";
import { initSocketConnection ,disconnectSocket} from "../socketio"

function Socket() {

    useEffect(() => {
  initSocketConnection();
  
  return () => {
    disconnectSocket();
  }
    }, []);
    
  return (

  );
}
export default Socket;
