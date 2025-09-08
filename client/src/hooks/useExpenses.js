import { useState, useEffect } from 'react';
import { expensesAPI } from '../api/expenses';

export const useExpenses = (filters = {}) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });

  const fetchExpenses = async (params = {}) => {
    setLoading(true);
    try {
      const response = await expensesAPI.getExpenses({ ...filters, ...params });
      setExpenses(response.data.expenses);
      setPagination({
        page: response.data.page,
        totalPages: response.data.totalPages,
        total: response.data.total,
      });
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch expenses');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const createExpense = async (data) => {
    try {
      await expensesAPI.createExpense(data);
      fetchExpenses();
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to create expense');
    }
  };

  const updateExpense = async (id, data) => {
    try {
      await expensesAPI.updateExpense(id, data);
      fetchExpenses();
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to update expense');
    }
  };

  const deleteExpense = async (id) => {
    try {
      await expensesAPI.deleteExpense(id);
      fetchExpenses();
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to delete expense');
    }
  };

  return {
    expenses,
    loading,
    error,
    pagination,
    fetchExpenses,
    createExpense,
    updateExpense,
    deleteExpense,
  };
};