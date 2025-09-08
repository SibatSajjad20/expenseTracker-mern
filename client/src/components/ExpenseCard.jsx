import { format } from 'date-fns';
import { Link } from 'react-router-dom';

const ExpenseCard = ({ expense, onDelete }) => {
  const categoryColors = {
    food: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    transport: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    entertainment: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
    utilities: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{expense.title}</h3>
        <span className="text-2xl font-bold text-gray-900 dark:text-white">${expense.amount}</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[expense.category] || categoryColors.other}`}>
            {expense.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {format(new Date(expense.date), 'MMM dd, yyyy')}
          </span>
        </div>
        <div className="flex space-x-2">
          <Link
            to={`/edit-expense/${expense._id}`}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm"
          >
            Edit
          </Link>
          <button
            onClick={() => onDelete(expense._id)}
            className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseCard;