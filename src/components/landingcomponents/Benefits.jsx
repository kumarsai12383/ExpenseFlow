
import { Zap, BarChart2, Shield, Smartphone, Gauge, CloudUpload } from "lucide-react";

function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Get instant updates on your spending and financial health.",
    },
    {
      icon: BarChart2,
      title: "Beautiful Charts",
      description: "Visualize your data with stunning, interactive charts.",
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Bank-level security with encrypted data storage.",
    },
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Access your finances from any device, anywhere.",
    },
    {
      icon: Gauge,
      title: "Fast Performance",
      description: "Lightning-fast loading and smooth user experience.",
    },
    {
      icon: CloudUpload,
      title: "Cloud Backup",
      description: "Automatic backups ensure your data is never lost.",
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Benefits</span>
          <h2 className="text-4xl font-bold text-white">Why Choose ExpenseFlow?</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Built with the latest technology to provide you with the best experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 bg-[#1E293B] border-emerald-500/15 hover:border-emerald-500/35 hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                    <p className="text-sm text-slate-400">{benefit.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Benefits;
