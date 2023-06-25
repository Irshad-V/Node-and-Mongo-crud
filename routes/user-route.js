const express = require("express");
const router = express.Router();
const { getAllUser, signUp, login } = require("../controllers/user-controller");


router.get("/", getAllUser);
router.post("/signUp", signUp)
router.post("/login", login)




module.exports = router;