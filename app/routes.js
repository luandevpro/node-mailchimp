var express    = require("express");
 router        = express.Router();
mainController = require("./controllers/main.controllers");

// export router
module.exports = router

router.get("/" , mainController.showHome)

router.post("/" , mainController.processHome)
