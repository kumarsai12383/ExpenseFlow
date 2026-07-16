import DataTable from "./IncomeTable";
import { GetIncome } from "../../../supaApi/data";
import AddIncomeForm from "./addincome";
import { useState, useEffect } from "react";
import Loading from "../../Loading";
function IncomePage({ user }) {
  const [IncomeData, setIncomeData] = useState([]);
  const [showAddIncomeForm, setShowAddIncomeForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isEditing, setEditing] = useState(false);
  const [selectedIncome, setSelectedIncome] = useState(null);
  const fetchIncome = async () => {
    const userId = user?.id;
    setLoading(true);
    if (userId) {
      const Income = await GetIncome(userId);
      setIncomeData(Income || []);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchIncome();
  }, []);
  return (
    <>
      <div className="flex-1 px-2 ">
        <div>
          <h2 className="text-2xl text-emerald-400 font-bold mb-4">Income</h2>
          <p className="text-gray-600">
            Here you can view and manage all your income. You can add new income
            sources, categorize them, and track your financial growth over time.
          </p>
        </div>
        <button
          onClick={() => setShowAddIncomeForm(!showAddIncomeForm)}
          className="mt-4 px-4 py-2 bg-emerald-400 text-white rounded hover:bg-emerald-500"
        >
          {showAddIncomeForm ? "Close" : "Add New Income"}
        </button>
        {showAddIncomeForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="bg-gray-800 p-6 rounded-lg flex relative w-full max-w-md gap-2">
              <AddIncomeForm
                user={user}
                onIncomeAdded={fetchIncome}
                isEditing={isEditing}
                selectedIncome={selectedIncome}
              />
              <button
                onClick={() => setShowAddIncomeForm(false)}
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
          <Loading />
        ) : (
          <div className="mt-4">
            <DataTable
              data={IncomeData}
              onIncomeDeleted={fetchIncome}
              setEditing={setEditing}
              setSelectedIncome={setSelectedIncome}
              setShowAddIncomeForm={setShowAddIncomeForm}
            />
          </div>
        )}
      </div>
    </>
  );
}
export default IncomePage;
