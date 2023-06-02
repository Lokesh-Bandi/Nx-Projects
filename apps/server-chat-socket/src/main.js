/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import express from 'express';
import * as path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import firebase from './firebase/firebase';
import login from './routes/loginRouter';
import { connectDB, databaseObject } from './database/mongoConnectivity';
import { listenAndDispatchMessageHandler } from './controllers/listenAndDispatchMessageHandler';
const cors = require('cors');
const bodyParser = require('body-parser');
global.socket = {};
const port = 5500;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/login', login);
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(cors());
connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

let interval;
io.on('connection', (socket) => {
  console.log('New Client Connected', socket.id);
  if (interval) {
    clearInterval(interval);
  }
  console.log(global.socket)
  listenAndDispatchMessageHandler(socket);
  socket.on('disconnect', () => {
    console.log('Client Disconnected');
  });
});

server.listen(port, () => console.log('Listening on port 5500'));
