require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');

// Create express app
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(http, {
    cors: {
      origin: '*', // Allow all origins
    }
  });

mongoose.set('strictQuery', false);

// Middleware
app.use(express.json());
app.use(cors())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Mongoose model for messages
const messageSchema = new mongoose.Schema({
  text: String,
  createdAt: Date,
  user: {
    _id: Number,
    name: String,
    avatar: String,
  },
});

const Message = mongoose.model('Message', messageSchema);

// Socket.io configuration
io.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('sendMessage', async (message) => {
    const newMessage = new Message(message);
    await newMessage.save();
    io.emit('receiveMessage', message);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.get('/api/messages', async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 }).exec();
  res.json(messages);
});

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
