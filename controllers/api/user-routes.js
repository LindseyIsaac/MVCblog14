const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);
    req.session.save(() => {
      req.session.userID = userData.id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });
  console.log(userData)
    if (!userData) {
      res.status(400).json({ message: "Sorry but uh no user account found." });
      return;
    }
    
    const validPassword = await userData.checkPassword(req.body.password);
   console.log(validPassword)
    if (!validPassword) {
      res.status(400).json({ message: "Sorry but uh no user account found." });
      return;
    }

    req.session.save(() => {
      req.session.userID = userData.id;
      req.session.logged_in = true;
    res.json({ user, message: "YAY YOU GOT LOGGED IN!" });
    });
  } catch (err) {
    res.status(400).json({ message: "Sorry but uh no user account found." });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;