import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
function LineChart({ expensesData }) {
    
   const dailyTotals = {};

expensesData.forEach((item) => {
  const day = new Date(item.created_at).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
    }
  );

  dailyTotals[day] =
    (dailyTotals[day] || 0) + item.amount;
});
const labels = Object.keys(dailyTotals).slice(-7);
const data = Object.values(dailyTotals).slice(-7);

    const chartData = {
        labels,
        datasets: [
            {
                label: "Daily Expenses",
                data,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
               
            },
        ],
    };

    return (
        <div className="overflow-x-auto no-scrollbar rounded-md">
            <Line data={chartData} />
        </div>
    );
}
export default LineChart;