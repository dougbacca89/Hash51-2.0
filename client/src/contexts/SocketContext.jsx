import io from "socket.io-client";
import React, { useContext, createContext } from "react";

const SocketContext = createContext();

const socket = io();

const SocketContextProvider = ({ children }) => (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );

export { SocketContext, SocketContextProvider };
