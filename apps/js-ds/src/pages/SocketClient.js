import { socket } from "../socket/socket";
import {useEffect, useState} from 'react';
import styled from "@emotion/styled";

const StyledDiv = styled.div`
    height: 400px;
    width: 800px;
    background-color: teal;
    opacity: 0.8;
`;

export function SocketClient(){
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [currentTime, setCurrentTime] = useState('');
    
    useEffect(() => {

        function onConnect() {
            setIsConnected(true);
        }
      
        function onDisconnect() {
            setIsConnected(false);
        }

        function onServerResponse(response) {
            setCurrentTime(response.currentTime);
        }
    
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('CurrentTimeEvent', onServerResponse)
    
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        }
    }, []);

    return (
        <StyledDiv>
            {isConnected && <div>Helloo..! I'm a client</div>}
            {currentTime && <h2>{currentTime}</h2>}
        </StyledDiv>
    )
}


//npx nx serve js-ds --port 4502  (run command for socket client)