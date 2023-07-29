const express = require("express");
const authController = require("../controller/authController");
const blogController = require("../controller/blogController");
const auth = require("../middlewares/auth");
const commentController = require("../controller/commentController");

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

//blog CRUD

//create
router.post("/blog", auth, blogController.create);

//read all blog OR get all
router.get("/blog/all", auth, blogController.getAll);

//read/Get blogs by id
router.get("/blog/:id", auth, blogController.getById);

//update
router.put("/blog", auth, blogController.update);

//delete
router.delete("/blog/:id", auth, blogController.delete);

//comment

//create comment
router.post("/comment", auth, commentController.create);

//read comments by blog id
router.get("/comment/:id", auth, commentController.getById);

// router.get("/test1", auth, (req, res, next) => {
//   res.status(200).json({ cookies: req.cookies });
// });

module.exports = router;
