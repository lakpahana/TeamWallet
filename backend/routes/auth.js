const express = require("express");
const router = express.Router();

//post phone number
router.post("/phone", (req, res) => {

  res.send("Phone number");

});


module.exports = router;
