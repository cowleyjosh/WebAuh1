const router = require("express").Router();

const Users = require("./userModel");
const authRequired = require("../auth/authMiddleware");

router.get("/users", authRequired, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.status(500).json({ message: "User not found" }));
});

module.exports = router;