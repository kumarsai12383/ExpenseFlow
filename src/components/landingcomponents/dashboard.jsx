import DashboardImg from "../../assets/Dashboard.png";
function Dashboard() {
  return (
    <section id="dashboard" className="w-full py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
              Dashboard Overview
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white leading-tight">
              Everything You Need To
              <span className="text-emerald-400"> Track Your Finances</span>
            </h2>

            <p className="mt-6 text-lg text-slate-400 leading-8">
              ExpenseFlow gives you a complete overview of your finances through
              beautiful charts, real-time analytics, income tracking, expense
              categorization, and monthly insights—all from a single dashboard.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  📊
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Interactive Analytics
                  </h4>

                  <p className="text-slate-400">
                    Monitor daily, weekly, and monthly spending using beautiful
                    charts.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  💳
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Income & Expense Tracking
                  </h4>

                  <p className="text-slate-400">
                    Record every transaction and organize them into meaningful
                    categories.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  📈
                </div>

                <div>
                  <h4 className="text-white font-semibold">
                    Smart Financial Insights
                  </h4>

                  <p className="text-slate-400">
                    Understand where your money goes and improve your spending
                    habits.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full"></div>
            <div className="absolute inset-0 blur-3xl bg-emerald-500/10 rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden border border-slate-700 shadow-2xl float 5s ease-in-out infinite">
              <img
                src={DashboardImg}
                alt="ExpenseFlow Dashboard"
                className="w-[620px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Dashboard;