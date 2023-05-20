import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContextProvider";

export const useSocket = () => {
    return useContext(SocketContext);
}
export default useSocket;