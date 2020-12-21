const express = require("express");
const router = express.Router();
const Player = require("../models/Player");

//GET ALL PLAYERS
router.get("/", async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET ONE PLAYER
router.get("/:playerId", async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    res.json(player);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETE ONE PLAYER
router.delete("/:playerId", async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.playerId);
    res.json(player);
  } catch (error) {
    res.json({ message: error });
  }
});

//UPDATE ONE PLAYER
router.patch("/:playerId", async (req, res) => {
  try {
    const player = await Player.findOneAndUpdate(
      { _id: req.params.playerId },
      {
        $set: req.body,
      }
    );
    res.send("Done!");
  } catch (error) {
    res.json({ message: error });
  }
});

//ADD ONE PLAYER
router.post("/", async (req, res) => {
  const player = new Player({
    name: req.body.name,
    natFiveOwned: req.body.natFiveOwned,
    creationDate: req.body.creationDate,
  });

  try {
    const addPlayer = await player.save();
    res.json(addPlayer);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
