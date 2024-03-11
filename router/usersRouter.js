//external imports
const express = require("express");

//internal imports
const {getUsers} = require("../controller/usersController");
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const router = express.Router();

//users page
router.get("/",decorateHtmlResponse('user'),getUsers);

module.exports = router;