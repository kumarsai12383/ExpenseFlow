import { useEffect, useState } from "react";
import { AddIncome, UpdateIncome } from "../../../supaApi/data";
function AddIncomeForm({
  user,
  onIncomeAdded,
  setIsEditing,
  isEditing,
  selectedIncome,
  setSelectedIncome,
}) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [issubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = user?.id;
    if (isEditing) {
      await UpdateIncome(
        selectedIncome.id,
        title,
        parseFloat(amount),
        setIsSubmitted,
        setIsEditing,
        setSelectedIncome,
      );
      setIsSubmitted(true);
    } else {
      await AddIncome(
        userId,
        title,
        parseFloat(amount),
        setIsSubmitted,
        setIsEditing,
        setSelectedIncome,
      );
    }

    await onIncomeAdded();
    setTitle("");
    setAmount("");
  };

  useEffect(() => {
    if (selectedIncome) {
      setTitle(selectedIncome.title);
      setAmount(selectedIncome.amount);
    }
  }, [selectedIncome]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[400px] border border-gray-300 p-4 rounded-lg shadow-md"
      >
        {issubmitted && (
          <div className="flex justify-center items-center absolute top-10 text-center left-20 sm:left-30 bg-emerald-400 text-emerald-900 p-2 rounded mb-4">
            {isEditing
              ? "Income updated successfully!"
              : "Income added successfully!"}
          </div>
        )}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-emerald-400"
          >
            Income Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter income title"
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md  shadow-sm  sm:text-sm placeholder:text-emerald-400 border border-emerald-400 "
            required
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-emerald-400"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md  shadow-sm  sm:text-sm placeholder:text-emerald-400 border border-emerald-400 "
            required
          />
        </div>

        {isEditing ? (
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Update Income
          </button>
        ) : (
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Add Income
          </button>
        )}
      </form>
    </>
  );
}
export default AddIncomeForm;
