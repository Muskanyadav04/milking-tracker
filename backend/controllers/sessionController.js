const Session = require("../models/Session");


// CREATE SESSION
exports.createSession = async (req, res) => {

  try {

    const session = new Session(req.body);

    await session.save();

    res.status(201).json(session);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// GET ALL SESSIONS
exports.getSessions = async (req, res) => {

  try {

    const sessions = await Session.find().sort({ created_at: -1 });

    res.json(sessions);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};