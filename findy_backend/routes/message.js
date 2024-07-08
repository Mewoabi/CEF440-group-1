const express = require('express');
const Message = require('../models/messageModel'); // Adjust the path
const router = express.Router();
const socketIO = require('socket.io');
const server = require('../server'); // Adjust the path

const io = socketIO(server);

router.post('/', async (req, res) => {
  const { session, sender, content } = req.body;
  try {
    const message = new Message({ session, sender, content });
    await message.save();
    // Emit the message to the session room
    io.emit('receiveMessage', message);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
