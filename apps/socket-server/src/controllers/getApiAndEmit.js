export const getApiAandEmit = (socket) => {
    const response = new Date();
    socket.emit('CurrentTimeEvent', {currentTime : response});
}