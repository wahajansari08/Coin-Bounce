const express = require("express");
const authController = require("../controller/authController");
const auth = require("../middlewares/auth");

const router = express.Router();

//testing

router.get("/test", (req, res) => res.json({ msg: "Working!" }));

//user

//register
router.post("/register", authController.register);

//login
router.post("/login", authController.login);

//logout
router.post("/logout", auth, authController.logout);

//refresh
router.get("/refresh", authController.refresh);

//blog
//CRUD
//create
//read all blog
//read blogs by id
//update
//delete

//comment
//create comment
//read comments by blog id

module.exports = router;
