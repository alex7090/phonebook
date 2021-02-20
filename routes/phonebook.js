const PB = require('../controllers/phonebooksController');
const express = require('express');
const router = express.Router();

// Get pages for user login/signup
router.get('/phonebook', PB.getEntries);
router.post('/phonebook', PB.createEntry);
router.put('/phonebook', PB.updateEntry);

module.exports = router;