import express from "express";
import expressAsyncHandler from "express-async-handler";
import Bird from "../models/birdModel";

const router = express.Router();

// @desc Fetch all birds
// @route GET/ api/birds
router.get('/', expressAsyncHandler(async (req, res) => {
  const birds = await Bird.find({});

  res.json(birds);
}))

export default router;
