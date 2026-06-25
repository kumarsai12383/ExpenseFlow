
import { Plus, Tag, BarChart3, Wallet } from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Plus,
      title: "Add Expenses",
      description: "Quickly log your daily expenses with just a few taps. Add amount, category, and notes.",
    },
    {
      step: "02",
      icon: Tag,
      title: "Categorize Spending",
      description: "Organize expenses into categories like food, transport, shopping, and more for better tracking.",
    },
    {
      step: "03",
      icon: BarChart3,
      title: "Analyze Reports",
      description: "View detailed analytics and charts to understand your spending patterns and trends.",
    },
    {
      step: "04",
      icon: Wallet,
      title: "Save More Money",
      description: "Make informed decisions based on insights and achieve your financial goals faster.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">How It Works</span>
          <h2 className="text-4xl font-bold text-white">Four Simple Steps to Financial Freedom</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Start managing your finances in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative">
                <div className="p-6 h-full bg-[#1E293B] border-emerald-500/15 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-900/30 transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/50">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-5xl font-bold text-emerald-500/10 select-none">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-3 w-6 h-0.5 bg-gradient-to-r from-emerald-500/40 to-emerald-500/10 z-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;