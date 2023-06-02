export const listenAndDispatchMessageHandler = (socket) => {

    //server listening to the client messages
    socket.on('NewMessage', (data) => {
        console.log(data, socket.id);
        socket.emit('NewMessage', {isUser: true, msg :data.message})
        socket.broadcast.to(global.socket[data.toClient]).emit( 'NewMessage', {isUser: false, msg :data.message});
    })
}