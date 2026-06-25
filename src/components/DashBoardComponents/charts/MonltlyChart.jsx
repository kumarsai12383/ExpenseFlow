import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function MonthlyChart({ expensesData }) {
  const monthlyTotals = {};
  expensesData?.forEach((item) => {
    const month = new Date(item.created_at).toLocaleString("default", {
      month: "short",
    });

    monthlyTotals[month] = (monthlyTotals[month] || 0) + item.amount;
  });
  const labels = Object.keys(monthlyTotals).slice(-6);

  const data = Object.values(monthlyTotals).slice(-6);
  

  const chartData = {
    labels,
    datasets: [
      {
        label: "Monthly Expenses",
        data,
        backgroundColor: ["rgba(16, 185, 129, 0.7)"],
        borderColor: ["rgba(16, 185, 129, 1)"],
        borderRadius: 8,
        maxBarThickness: 45,
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="overflow-x-auto no-scrollbar rounded-md ">
        <Bar data={chartData} />
      </div>
    </>
  );
}
export default MonthlyChart;
