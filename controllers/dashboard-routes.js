const router = require("express").Router();
const { Post, User, Comment } = require("../models");
const authorize = require("../utils/authorize");

router.get("/", authorize, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id,{
      attributes: { exclude: ["password"] },
        include: [{ model: Post }],
  
    });
    const user = userData.get({ plain: true });
    res.render("user-home", {
      layout: "dashboard",
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/new-post", authorize , async (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/edit-post/:id", authorize, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    const post = postData.get({ plain: true });
     res.render("edit-post", {
      layout: "dashboard",
        post,
      });
  } catch (err) {
    res.redirect("login");
  }
});

module.exports = router;