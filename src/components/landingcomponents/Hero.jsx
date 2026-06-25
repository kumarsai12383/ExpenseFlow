
import { Play, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { Link } from "react-router-dom";
const pieData = [
  { name: "Food", value: 35, color: "#10B981" },
  { name: "Transport", value: 25, color: "#34D399" },
  { name: "Shopping", value: 20, color: "#6EE7B7" },
  { name: "Bills", value: 20, color: "#059669" },
];

const barData = [
  { month: "Jan", amount: 4500 },
  { month: "Feb", amount: 5200 },
  { month: "Mar", amount: 4800 },
  { month: "Apr", amount: 6100 },
  { month: "May", amount: 5500 },
  { month: "Jun", amount: 6800 },
];

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0F172A] pt-20 pb-32">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-0 w-72 h-72 bg-emerald-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              <TrendingUp className="w-4 h-4" />
              Smart Finance Tracking
            </div>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white">
                Track Every Rupee.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
                  Master Your Money.
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Manage expenses, visualize spending habits, and stay on top of your financial goals with real-time insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/auth" className="bg-emerald-500  hover:bg-emerald-400 text-[#0F172A] font-semibold text-lg p-2 rounded-md">
                Start Tracking Free
              </Link>
              <button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 rounded-md hover:text-white text-lg flex items-center px-6 py-3 rounded-md">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span>✓ No credit div required</span>
              <span>✓ Free forever plan</span>
            </div>
          </div>

          {/* Right - Dashboard Mockup */}
          <div className="relative">
            <div className="relative z-10 space-y-4">
              {/* Balance div */}
              <div className="p-6 bg-gradient-to-br from-emerald-500 to-emerald-700 border-0 shadow-2xl shadow-emerald-900/50">
                <div className="space-y-2">
                  <p className="text-sm text-emerald-100 opacity-90">Total Balance</p>
                  <p className="text-4xl font-bold text-white">₹54,230</p>
                  <div className="flex items-center gap-1.5 text-emerald-100 text-sm">
                    <TrendingUp className="w-4 h-4" />
                    +12.5% from last month
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Pie Chart div */}
                <div className="p-4 bg-[#1E293B] border-emerald-500/20 shadow-xl">
                  <p className="text-sm font-medium text-slate-300 mb-2">Category Split</p>
                  <ResponsiveContainer width="100%" height={140}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={55}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Bar Chart div */}
                <div className="p-4 bg-[#1E293B] border-emerald-500/20 shadow-xl">
                  <p className="text-sm font-medium text-slate-300 mb-2">Monthly Trend</p>
                  <ResponsiveContainer width="100%" height={140}>
                    <BarChart data={barData}>
                      <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#94A3B8" }} />
                      <YAxis hide />
                      <Bar dataKey="amount" fill="#10B981" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent blur-3xl -z-10 rounded-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;