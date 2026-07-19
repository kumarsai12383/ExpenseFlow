import ExpenseTable from "./ExpenseTable";
import { GetExpenses } from "../../../supaApi/data";
import AddExpenseForm from "./addexpense";
import { useState, useEffect } from "react";

import Loading from "../../Loading";
function ExpensePage({ user }) {
  const [expensesData, setExpensesData] = useState([]);
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const fetchExpenses = async () => {
    const userId = user?.id;
    setLoading(true);
    if (userId) {
      const expenses = await GetExpenses(userId);
      setExpensesData(expenses || []);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchExpenses();
  }, [user]);
  return (
    <>
      <div className="flex-1 px-2 ">
        <div>
          <h2 className="text-2xl text-emerald-400 font-bold mb-4">Expenses</h2>
          <p className="text-gray-600">
            Here you can view and manage all your expenses. You can add new
            expenses, categorize them, and track your spending habits over time.
          </p>
        </div>
        <button
          onClick={() => setShowAddExpenseForm(!showAddExpenseForm)}
          className="mt-4 px-4 py-2 bg-emerald-400 text-white rounded hover:bg-emerald-500"
        >
          {showAddExpenseForm ? "Close" : "Add New Expense"}
        </button>
        {showAddExpenseForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-gray-800 p-6 rounded-lg flex relative w-full max-w-md gap-2">
              <AddExpenseForm
                user={user}
                onExpenseAdded={fetchExpenses}
                isEditing={isEditing}
                selectedExpense={selectedExpense}
              />
              <button
                onClick={() => {
                  setShowAddExpenseForm(false);
                  setIsEditing(false);
                  setSelectedExpense(null);
                }}
                className="absolute  top-0 right-0  text-white  p-0"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {loading ? (
          <div className="">
            <Loading />
          </div>
        ) : (
          <div className="mt-4">
            <ExpenseTable
              data={expensesData}
              onExpenseAdded={fetchExpenses}
              setIsEditing={setIsEditing}
              setSelectedExpense={setSelectedExpense}
              setShowAddExpenseForm={setShowAddExpenseForm}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default ExpensePage;
