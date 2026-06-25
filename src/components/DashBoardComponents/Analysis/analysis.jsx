import {GetIncome, GetExpenses } from "../../../supaApi/data";
import { useState, useEffect } from "react";
import PieChart from "../charts/Piechart";
import Loading from "../../Loading";
import MonthlyChart from "../charts/MonltlyChart";
import LineChart from "../charts/lineChart";
import { getCurrency, currencySymbol } from "../../../utils/currency";

function Analytics({ user }) {
  const currency = getCurrency();
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState([
    { category: "", amount: 0 },
  ]);

  const [loading, setLoading] = useState(false);
  const fetchExpenses = async () => {
    setLoading(true);
    const userId = user?.id;
    if (userId) {
      const expensesData = await GetExpenses(userId);
      const incomeData = await GetIncome(userId);
      setIncome(incomeData || []);
      setExpenses(expensesData || []);
      setLoading(false);
    }
  };
  useEffect(() => {
    const expenseCategories = [
      ...expenses.map((expense) => ({
        category: expense.category,
        amount: expense.amount,
      })),
    ];
    setExpenseCategory(expenseCategories);
  }, [expenses]);
  useEffect(() => {
    fetchExpenses();
  }, [user]);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loading />
        </div>
      ) : (
        <div className="flex-1 p-4 ">
          <div>
            <h2 className="text-2xl font-bold mb-4">Analytics</h2>
            <p className="text-gray-600">
              Here you can view and analyze your financial data. You can track
              your income and expenses, visualize trends, and gain insights into
              your spending habits over time.
            </p>
          </div>
          <div className="p-4 rounded-lg border  border-emerald-400/20 w-auto sm:w-[900px] h-auto sm:h-[500px] mt-5 ">
            <h3 className="text-lg font-semibold mb-2">Daily Expenses</h3>
            <LineChart expensesData={expenses} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
            <div className="border p-3 mb-4 border-emerald-400/20 h-auto">
              <h3 className="text-lg font-semibold mb-2">
                Expense Distribution
              </h3>
              <PieChart expenseCategory={expenseCategory} />
            </div>
            <div className="border p-3 mb-4 border-emerald-400/20 h-auto">
              <h3 className="text-lg font-semibold mb-2  ">Monthly Overview</h3>
              <MonthlyChart expensesData={expenses} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            <div className="bg-slate-900 border border-emerald-400/20 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400">Total Expenses</p>
                  <h2 className="text-3xl font-bold text-red-400">
                    {currencySymbol[currency]} {expenses.reduce((sum, exp) => sum + exp.amount, 0)}
                  </h2>
                </div>
                <span className="text-4xl">💸</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-emerald-400/20 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400">Total Income</p>
                  <h2 className="text-3xl font-bold text-emerald-400">
                    {currencySymbol[currency]} {income.reduce((sum, inc) => sum + inc.amount, 0)}
                  </h2>
                </div>
                <span className="text-4xl">💰</span>
              </div>
            </div>
            <div className="bg-slate-900 border border-emerald-400/20 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400">Total Transactions</p>
                  <h2 className="text-3xl font-bold text-emerald-400">
                    {currencySymbol[currency]} {expenses.length + income.length}
                  </h2>
                </div>
                <span className="text-4xl">💸</span>
              </div>
            </div>
            <div className="bg-slate-900 border border-emerald-400/20 rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-400">Total Savings</p>
                  <h2 className="text-3xl font-bold text-emerald-400">
                    {currencySymbol[currency]} {income.reduce((sum, inc) => sum + inc.amount, 0) - expenses.reduce((sum, exp) => sum + exp.amount, 0)}
                  </h2>
                </div>
                <span className="text-4xl">💸</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Analytics;
