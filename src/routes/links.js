const express = require("express");
const router = express.Router();
const Link = require("../models/Link");

//GET ALL LINKS
router.get("/", async (req, res) => {
  try {
    const links = await Link.find();
    res.json(links);
  } catch (error) {
    res.json({ message: error });
  }
});

//GET ONE LINK
router.get("/:linkId", async (req, res) => {
  try {
    const link = await Link.findById(req.params.linkId);
    res.json(link);
  } catch (error) {
    res.json({ message: error });
  }
});

//DELETE ONE LINK
router.delete("/:linkId", async (req, res) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.linkId);
    res.json(link);
  } catch (error) {
    res.json({ message: error });
  }
});

//UPDATE ONE LINK
router.patch("/:linkId", async (req, res) => {
  try {
    const link = await Link.findOneAndUpdate(
      { _id: req.params.linkId },
      {
        $set: req.body,
      }
    );
    res.send("Done!");
  } catch (error) {
    res.json({ message: error });
  }
});

//ADD ONE LINK
router.post("/", async (req, res) => {
  const link = new Link({
    url: req.body.url,
    label: req.body.label,
    category: req.body.category,
  });

  try {
    const addLink = await link.save();
    res.json(addLink);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
