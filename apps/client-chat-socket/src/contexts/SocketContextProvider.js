import { createContext, useEffect, useState } from 'react';
import { socket } from '../socket/socket';

export const SocketContext = createContext({});
export const SocketContextProvider = ({children}) => {

    const [isConnected, setIsConnected] = useState(socket.connected);

    useEffect(() => {

        function onConnect() {
            setIsConnected(true);
        }
      
        function onDisconnect() {
            setIsConnected(false);
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        // socket.on('CurrentTimeEvent', onServerResponse)
    
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        }
    }, []);
    
    return <SocketContext.Provider value={{isConnected, socket}}>
        {children}
    </SocketContext.Provider>
}
