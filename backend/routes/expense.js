const express = require('express');
const router = express.Router();

// Load Expense model
const Expense = require('../models/Expense');

// @route GET api/expense/test
// @description tests expense route
// @access Public
router.get('/test', (req, res) => res.send('expense route testing!'));

// @route GET api/expense
// @description Get all expense
// @access Public
router.get('/', (req, res) => {
    Expense.find()
        .then(expenses => res.json(expenses))
        .catch(err => res.status(404).json({ noexpensesfound: 'No Expenses found' }));
    }
);

