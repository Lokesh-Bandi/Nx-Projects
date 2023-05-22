export const sendMessageEvent = (socket, eventName, data, toClient) => {
    socket.emit('NewMessage', {...data, toClient})
}