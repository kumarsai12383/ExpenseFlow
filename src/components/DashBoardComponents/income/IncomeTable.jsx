import { DeleteIncome } from "../../../supaApi/data";
import { getCurrency, currencySymbol } from "../../../utils/currency";
function DataTable({
  data,
  onIncomeDeleted,
  setEditing,
  setSelectedIncome,
  setShowAddIncomeForm,
}) {
  const currency = getCurrency();
  async function handleDeleteIncome(incomeId) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this income?",
    );
    if (confirmDelete) {
      await DeleteIncome(incomeId);
      await onIncomeDeleted();
    }
  }
  return (
    <>
      {data &&
        (data.length === 0 ? (
          <div className="text-center text-emerald-400 mt-4">
            No income data available.
          </div>
        ) : (
          <div className="overflow-x-auto no-scrollbar rounded-md ">
            <table className="min-w-full  rounded-lg border border-emerald-400">
              <thead className="bg-gray-800 text-emerald-400 border-emerald-400">
                <tr className="text-left">
                  <th className="py-4 px-4">Income Title</th>

                  <th className="py-4 px-4">Amount</th>
                  <th className="py-4 px-4">Date</th>

                  <th className="py-4 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-gray-700 divide-y text-white border-emerald-400">
                {data.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{row.title}</td>

                    <td className="py-2 px-4">
                      {currencySymbol[currency]} {row.amount}
                    </td>
                    <td className="py-2 px-4">{row.date.split("T")[0]}</td>

                    <td className="py-2 px-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => {
                            setEditing(true);
                            setSelectedIncome(row);
                            setShowAddIncomeForm(true);
                          }}
                          className="bg-emerald-400 hover:bg-emerald-700  text-white font-bold py-1 px-3 rounded"
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
                          onClick={() => handleDeleteIncome(row.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
    </>
  );
}
export default DataTable;
