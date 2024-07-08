require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketIO = require('socket.io');
const Message = require('./models/messageModel');
const itemRoutes = require('./routes/item');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const sessionRoutes = require('./routes/session');

// Express app
const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: '*',
  },
});

mongoose.set('strictQuery', false);

// Middleware
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Socket.io configuration
io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('joinSession', ({ session, user }) => {
    socket.join(session);
    console.log(`${user} joined session: ${session}`);
  });

  socket.on('sendMessage', async (message) => {
    const newMessage = new Message(message);
    await newMessage.save();
    console.log(newMessage);
    io.to(message.session).emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});
app.get('/api/messages/:session', async (req, res) => {
  const { session } = req.params;
  try {
    const messages = await Message.find({ session }).sort({ createdAt: -1 }).exec();
    res.json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Routes
app.use('/api/message', messageRoutes);
app.use('/api/item', itemRoutes);
app.use('/auth/user', userRoutes);
app.use('/api/session', sessionRoutes);

// Connect to DB and start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    server.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
