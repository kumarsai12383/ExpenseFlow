import { useState, useEffect } from "react";
import { AddExpense, UpdateExpense } from "../../../supaApi/data";
function AddExpenseForm({ user, onExpenseAdded, isEditing, selectedExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [note, setNote] = useState("");
  const [issubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userId = user?.id;
    if (isEditing) {
      await UpdateExpense(
        selectedExpense.id,
        title,
        parseFloat(amount),
        category,
        note,
        setIsSubmitted
      );
    } else {
      await AddExpense(userId, title, parseFloat(amount), category, note, setIsSubmitted);
    }
    await onExpenseAdded();
    setTitle("");
    setAmount("");
    setCategory("");
    setNote("");
  };
  useEffect(() => {
    if (selectedExpense) {
      setTitle(selectedExpense.title);
      setAmount(selectedExpense.amount);
      setCategory(selectedExpense.category);
      setNote(selectedExpense.note);
    }
  }, [selectedExpense]);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-[400px] border border-gray-300 p-4 rounded-lg shadow-md"
      >
        {issubmitted && (
          <div className="flex justify-center items-center absolute top-0 text-center left-0 bg-emerald-400 text-emerald-900 p-2 rounded mb-4">
            Expense added successfully!
          </div>
        )}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-emerald-400"
          >
            Expense Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Enter expense title"
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
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-emerald-400"
          >
            Category
          </label>
          <select
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md  shadow-sm  sm:text-sm placeholder:text-emerald-400 border border-emerald-400 "
            required
          >
            <option className="text-emerald-400 bg-gray-800" value="">
              Select a category
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Food">
              Food
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Travel">
              Travel
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Bills">
              Bills
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Shopping">
              Shopping
            </option>
            <option
              className="text-emerald-400 bg-gray-800"
              value="Entertainment"
            >
              Entertainment
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Health">
              Health
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Education">
              Education
            </option>
            <option className="text-emerald-400 bg-gray-800" value="Other">
              Other
            </option>
          </select>
        </div>
        <div>
          <label
            htmlFor="note"
            className="block text-sm font-medium text-emerald-400"
          >
            Note
          </label>
          <textarea
            id="note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="mt-1 block w-full p-2 rounded-md  shadow-sm  sm:text-sm placeholder:text-emerald-400 border border-emerald-400 "
            placeholder="Enter a note about the expense"
          />
        </div>

        <button type="submit" className="bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded">
          {isEditing ? "Update Expense" : "Add Expense"}
        </button>
      </form>
    </>
  );
}
export default AddExpenseForm;
