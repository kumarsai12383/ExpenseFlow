
import { TrendingUp, PieChart, FolderTree, FileText, Target, Cloud } from "lucide-react";

function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Expense Tracking",
      description: "Automatically categorize and track all your expenses with intelligent insights.",
    },
    {
      icon: PieChart,
      title: "Spending Analytics",
      description: "Visualize your spending patterns with beautiful, interactive charts and graphs.",
    },
    {
      icon: FolderTree,
      title: "Category Management",
      description: "Organize expenses into custom categories for better financial visibility.",
    },
    {
      icon: FileText,
      title: "Monthly Reports",
      description: "Get detailed monthly reports to understand where your money is going.",
    },
    {
      icon: Target,
      title: "Budget Planning",
      description: "Set budgets for different categories and get alerts when you're close to limits.",
    },
    {
      icon: Cloud,
      title: "Secure Cloud Sync",
      description: "Your data is securely synced across all devices with bank-level encryption.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Features</span>
          <h2 className="text-4xl font-bold text-white">Everything You Need to Manage Money</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Powerful features designed to give you complete control over your finances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="p-8 bg-[#1E293B] border-emerald-500/15 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-900/30 transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Features;