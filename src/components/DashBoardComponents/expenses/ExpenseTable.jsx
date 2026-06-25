import { DeleteExpense } from "../../../supaApi/data";
import { getCurrency, currencySymbol } from "../../../utils/currency";
function ExpenseTable({
  data,
  onExpenseAdded,
  setIsEditing,
  setSelectedExpense,
  setShowAddExpenseForm,
}) {
  const currency = getCurrency();
  async function handleDelete(expenseId) {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      await DeleteExpense(expenseId);
      await onExpenseAdded();
    }
  }

 
  return (
    <>
      {data?.length === 0 ? (
        <div className="text-center py-4 text-gray-400">No expenses found.</div>
      ) : (
        <div className="overflow-x-auto no-scrollbar rounded-md ">
          <table className="min-w-full  rounded-lg border border-emerald-400">
            <thead className="bg-gray-800 text-emerald-400 border-emerald-400">
              <tr className="text-left">
                <th className="py-4 px-4">Expense Title</th>
                <th className="py-4 px-4">Category</th>
                <th className="py-4 px-4">Amount</th>
                <th className="py-4 px-4">Date</th>
                <th className="py-4 px-4">Note</th>
                <th className="py-4 px-4">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-gray-700 divide-y text-white border-emerald-400">
              {data?.map((row, index) => (
                <tr key={index}>
                  <td className="py-2 px-4">{row.title}</td>
                  <td className="py-2 px-4">{row.category}</td>
                  <td className="py-2 px-4">{currencySymbol[currency]} {row.amount}</td>
                  <td className="py-2 px-4">{row.date.split("T")[0]}</td>
                  <td className="py-2 px-4">{row.note}</td>
                  <td className="py-2 px-4">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          setIsEditing(true);
                          setSelectedExpense(row);
                          setShowAddExpenseForm(true);
                        }}
                        className="bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-1 px-3 rounded"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded ml-2"
                        onClick={() => handleDelete(row.id)}
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
      )}
    </>
  );
}
export default ExpenseTable;
