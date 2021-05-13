const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.json({ message: `${err}` });
  }
});

//post
router.post("/", async (req, res) => {
  const post = new Todo({
    title: req.body.title,
    done: req.body.done,
  });

  post
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: `${err}` });
    });
});

//delete
router.post("/:postId", async (req, res) => {
  try {
    const removed = await Todo.remove({
      _id: req.params.postId,
    });
    res.json(removed);
  } catch (err) {
    res.json({ message: `${err}` });
  }
});
module.exports = router;
