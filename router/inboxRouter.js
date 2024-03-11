// externel Imports
const express = require("express");

//internal Imports
const {getInbox} = require("../controller/inboxController");
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse')
const router = express.Router();

// inpox page
router.get('/',decorateHtmlResponse("inbox"), getInbox);

module.exports = router;