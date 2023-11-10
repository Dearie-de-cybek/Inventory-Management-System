const express = require('express');
const router = express.Router();

// Dashboard route
router.get('/', (req, res) => {
  res.render('Dashboard');
});



module.exports = router;
