export const receiveMessageFromClient = (socket) => {

    //server listening to the client messages
    socket.on('NewMessage', (data) => {
        console.log(data, socket.id);
    })
}