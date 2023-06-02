import { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { socket } from '../socket/socket';

export const SocketContext = createContext({});
export const SocketContextProvider = ({children}) => {

    const [isConnected, setIsConnected] = useState(socket.connected);
	const dispatch = useDispatch();

    useEffect(() => {

        function onConnect() {
            setIsConnected(true);
        }
      
        function onDisconnect() {
            setIsConnected(false);
        }

        const onRecieveMessage = (response) => {
            console.log("response :",response);
            dispatch({type: 'NEW_MESSAGE', ...response})
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('NewMessage', onRecieveMessage);
    
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('NewMessage', onRecieveMessage);
        }
    }, []);

   
    
    return <SocketContext.Provider value={{isConnected, socket}}>
        {children}
    </SocketContext.Provider>
}
