const express = require("express");
const router = express.Router();
const getAllUser  = require("../controllers/user-controller");

router.get("/", getAllUser);
router.post("/")




module.exports =router;
