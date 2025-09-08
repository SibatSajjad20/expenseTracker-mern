const Expense = require('../models/Expense');

const createExpense = async (req, res) => {
  try {
    const { title, amount, category, date } = req.body;
    
    const expense = await Expense.create({
      userId: req.user._id,
      title,
      amount,
      category,
      date
    });

    res.status(201).json({ success: true, expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ userId: req.user._id }).sort({ date: -1 });
    res.json({ success: true, expenses });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, amount, category, date } = req.body;

    const expense = await Expense.findOneAndUpdate(
      { _id: id, userId: req.user._id },
      { title, amount, category, date },
      { new: true, runValidators: true }
    );

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ success: true, expense });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findOneAndDelete({ _id: id, userId: req.user._id });

    if (!expense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ success: true, message: 'Expense deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createExpense, getExpenses, updateExpense, deleteExpense };