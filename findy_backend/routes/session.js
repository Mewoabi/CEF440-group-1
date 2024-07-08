const express = require('express');
const Session = require('../models/sessionModel'); // Adjust the path
const router = express.Router();

// Route to get or create a session between two users
router.post('/getOrCreateSession', async (req, res) => {
  const { user1, user2 } = req.body;
  console.log(user1, user2);
  try {
    let session = await Session.findOne({ participants: { $all: [user1, user2] } });
    if (!session) {
      session = new Session({ participants: [user1, user2] });
      await session.save();
    }
    res.status(201).json(session);
    console.log(session)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
