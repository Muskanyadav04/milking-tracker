const express = require("express");

const router = express.Router();

const {
  createSession,
  getSessions
} = require("../controllers/sessionController");


router.post("/sessions", createSession);

router.get("/sessions", getSessions);


module.exports = router;