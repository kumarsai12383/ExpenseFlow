import { GetIncome, GetExpenses } from "../../supaApi/data";
import { useState, useEffect } from "react";
import PieChart from "./charts/Piechart";
import Loading from "../Loading";
import { getCurrency, currencySymbol } from "../../utils/currency";


import MonthlyChart from "./charts/MonltlyChart";
import DashboardExpenseTable from "./dashBoardTable";
function DashBoardHome({ user }) {

  const [expenses, setExpenses] = useState([]);
  const [expenseCategory, setExpenseCategory] = useState([
    { category: "", amount: 0 },
  ]);
  const currency = getCurrency();
  const [income, setIncome] = useState([]);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState(0);
  const [latestFiveExpenses, setLatestFiveExpenses] = useState([]);

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
    
    fetchExpenses();
  }, [user]);
  useEffect(() => {
    const expenseCategories = [
      ...expenses.map((expense) => ({
        category: expense.category,
        amount: expense.amount,
      })),
    ];
    setExpenseCategory(expenseCategories);
   
    const balance =
      income.reduce((sum, inc) => sum + inc.amount, 0) -
      expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const transactions = income.length + expenses.length;
    setBalance(balance);
    setTransactions(transactions);
    const latestFive = [...expenses]
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
      .slice(0, 5);
    setLatestFiveExpenses(latestFive);
  }, [income, expenses]);
  return (
    <>
      <div className="flex-1 p-4 ">
        <h2 className="text-2xl font-bold mb-4">
          Welcome to Your Dashboard{" "}
          <span className="text-emerald-400">{user?.user_metadata?.name}</span>
        </h2>

        <p className="text-gray-600">
          Here you can manage your expenses, view reports, and customize your
          settings.
        </p>
        {loading ? (
          <div className="flex items-center justify-center p-4">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <div className=" p-4 rounded-lg border border-emerald-400/20">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                Total Income
              </h3>
              <p className="text-2xl font-bold">
                {currencySymbol[currency]} {" "}
                {income.reduce((sum, inc) => sum + inc.amount, 0).toFixed(2)}
              </p>
            </div>
            <div className="border border-emerald-400/20 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                Total Expenses
              </h3>
              <p className="text-2xl font-bold">
                {currencySymbol[currency]} {" "}
                {expenses.reduce((sum, exp) => sum + exp.amount, 0).toFixed(2)}
              </p>
            </div>
            <div className="border border-emerald-400/20 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                Balance
              </h3>
              {balance <= 500 && balance > 0 ? (
                <p className="text-2xl font-bold text-red-600">
                  {currencySymbol[currency]}  {balance.toFixed(2)}
                </p>
              ) : balance <= 1000 && balance > 0 ? (
                <p className="text-2xl font-bold text-orange-500">
                  {currencySymbol[currency]}  {balance.toFixed(2)}
                </p>
              ) : balance < 0 ? (
                <p className="text-2xl font-bold text-red-800">
                  {currencySymbol[currency]}  {balance.toFixed(2)}
                </p>
              ) : (
                <p className="text-2xl font-bold text-emerald-400">
                  {currencySymbol[currency]}  {balance.toFixed(2)}
                </p>
              )}
            </div>
            <div className="border border-emerald-400/20 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-emerald-400 mb-2">
                Total Transactions
              </h3>
              <p className="text-2xl font-bold">{transactions}</p>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between mt-6">
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-emerald-400 mb-2 ">
              Expense Distribution
            </h3>
            <PieChart expenseCategory={expenseCategory} />
          </div>
          <div className="mt-6 items-center">
            <h3 className="text-xl font-semibold text-emerald-400 mb-2">
              Monthly Expense Report
            </h3>
            <MonthlyChart expensesData={expenses} />
          </div>
        </div>

        {latestFiveExpenses?.length > 0 ? (
          <DashboardExpenseTable latestFiveExpenses={latestFiveExpenses} />
        ) : (
          <p>No recent Expenses recorded</p>
        )}
      </div>
    </>
  );
}
export default DashBoardHome;
