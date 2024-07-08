const express = require('express');
const Message = require('../models/messageModel');
const router = express.Router();
const socketIO = require('socket.io');
const server = require('../server'); // Adjust the path

const io = socketIO(server);

router.post('/', async (req, res) => {
  const { session, sender, content } = req.body;
  console.log(session, sender, content);
  try {
    const message = new Message({ session, sender, content });
    await message.save();
    io.to(session).emit('receiveMessage', message);
    res.status(201).json(message);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/:session', async (req, res) => {
  const { session } = req.params;
  try {
    const messages = await Message.find({ session }).sort({ createdAt: -1 }).exec();
    res.json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
