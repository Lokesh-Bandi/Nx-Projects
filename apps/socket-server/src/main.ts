/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express from 'express';
import http from 'http';
import {Server} from 'socket.io';
import { getApiAandEmit } from './controllers/getApiAndEmit';
import index from './routes/index';


const port = 4500;

const app = express();
app.use(index);

const server = http.createServer(app);

const io = new Server(server);

let interval;
io.on('connection', (socket) => {
    console.log('New Client Connected');
    if(interval){
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAandEmit(socket), 1000);
    socket.on('disconnect', () => {
        console.log('Client Disconnected');
    })
    clearInterval(interval);
})

server.listen(port, () => console.log('Listening on port 4500'));
