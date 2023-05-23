export const receiveMessageFromClient = (socket) => {

    //server listening to the client messages
    socket.on('NewMessage', (data) => {
        console.log(data, socket.id);
        socket.broadcast.to(global.socket[data.toClient]).emit( 'NewMessage', {isUser: false, msg :data.message} );
    })
}