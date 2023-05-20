export const sendMessageEvent = (socket, eventName, data) => {
    socket.emit('MessageFromClient', {data : data})
}