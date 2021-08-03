import io from "socket.io-client";
import React, { useContext, createContext } from "react";
import { UserContext } from "./UserContext";

const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
const {userObj} = useContext(UserContext);
let socket = null;
if(userObj.username){
  socket = io();
  socket.on("message", (data) => {
    console.log(data);
  });
}

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export { SocketContext, SocketContextProvider };
