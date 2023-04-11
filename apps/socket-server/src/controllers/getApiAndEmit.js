export const getApiAandEmit = (socket) => {
    const response = new Date();
    socket.emit('From API', response);
}