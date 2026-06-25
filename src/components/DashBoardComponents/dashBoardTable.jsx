function DashboardExpenseTable({ latestFiveExpenses }) {
  return (
    <>
      {latestFiveExpenses && (
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-emerald-400 mb-2">
            Recent 5 Expenses
          </h3>
          <div className="overflow-x-auto no-scrollbar rounded-md ">
            <table className="min-w-full  rounded-lg border border-emerald-400">
              <thead className="bg-gray-800 text-emerald-400 border-emerald-400">
                <tr className="text-left">
                  <th className="py-4 px-4">Expense Title</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Amount</th>
                  <th className="py-4 px-4">Date</th>
                  <th className="py-4 px-4">Note</th>
                </tr>
              </thead>
              <tbody className="bg-gray-700 divide-y text-white border-emerald-400">
                {latestFiveExpenses?.map((row, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4">{row.title}</td>
                    <td className="py-2 px-4">{row.category}</td>
                    <td className="py-2 px-4">₹ {row.amount}</td>
                    <td className="py-2 px-4">{row.date.split("T")[0]}</td>
                    <td className="py-2 px-4">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
        
      
    </>
  );
}
export default DashboardExpenseTable;
