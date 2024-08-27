const express = require('express');
const router = express.Router();
const { getExpenses } = require('../controllers/expenseController');

// Get all expenses
router.get('/', getExpenses);

module.exports = router;
