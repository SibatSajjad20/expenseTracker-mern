const express = require('express');
const { createExpense, getExpenses, updateExpense, deleteExpense } = require('../controllers/expenseController');
const verifyToken = require('../middlewares/auth');

const router = express.Router();

router.use(verifyToken); // All expense routes are protected

router.post('/', createExpense);
router.get('/', getExpenses);
router.put('/:id', updateExpense);
router.delete('/:id', deleteExpense);

module.exports = router;