export const receiveMessageFromClient = (socket) => {

    //server listening to the client messages
    socket.on('MessageFromClient', (data) => {
        console.log(data, socket.id);
    })
}