import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ expenseCategory }) {
  const Food = expenseCategory
    .filter((item) => item.category === "Food")
    .reduce((sum, item) => sum + item.amount, 0);
  const Transport = expenseCategory
    .filter((item) => item.category === "Transport")
    .reduce((sum, item) => sum + item.amount, 0);
  const Entertainment = expenseCategory
    .filter((item) => item.category === "Entertainment")
    .reduce((sum, item) => sum + item.amount, 0);
  const Shopping = expenseCategory
    .filter((item) => item.category === "Shopping")
    .reduce((sum, item) => sum + item.amount, 0);
  const Bills = expenseCategory
    .filter((item) => item.category === "Bills")
    .reduce((sum, item) => sum + item.amount, 0);
  const Others = expenseCategory
    .filter((item) => item.category === "Others")
    .reduce((sum, item) => sum + item.amount, 0);
  const data = {
    labels: [
      "Food",
      "Transport",
      "Entertainment",
      "Shopping",
      "Bills",
      "Others",
    ],
    datasets: [
      {
        label: "Expenses Distribution",
        data: [Food, Transport, Entertainment, Shopping, Bills, Others],
        backgroundColor: [
          "rgba(16, 185, 129, 0.9)", // Food
          "rgba(59, 130, 246, 0.9)", // Transport
          "rgba(245, 158, 11, 0.9)", // Shopping
          "rgba(239, 68, 68, 0.9)", // Bills
          "rgba(168, 85, 247, 0.9)", // Entertainment
          "rgba(20, 184, 166, 0.9)", // Health
          "rgba(236, 72, 153, 0.9)", // Education
          "rgba(107, 114, 128, 0.9)", // Other
        ],
        borderColor: [
          "rgba(16, 185, 129, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(245, 158, 11, 1)",
          "rgba(239, 68, 68, 1)",
          "rgba(168, 85, 247, 1)",
          "rgba(20, 184, 166, 1)",
          "rgba(236, 72, 153, 1)",
          "rgba(107, 114, 128, 1)",
        ],
        plugins: {
          legend: {
            labels: {
              color: "#ffffff",
            },
          },
        },
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div className="flex items-center justify-center w-fit h-96">
      <Pie data={data} />
    </div>
  );
}
export default PieChart;
