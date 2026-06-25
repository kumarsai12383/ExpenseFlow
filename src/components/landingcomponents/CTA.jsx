
import { ArrowRight } from "lucide-react";

function CTABanner() {
  return (
    <section className="py-24 bg-[#111827] relative overflow-hidden">
      {/* Emerald glow orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400/8 rounded-full blur-3xl pointer-events-none" />

      {/* Emerald gradient border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
            Start your financial journey today
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Start Managing Your Finances{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">Today</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join thousands of users who are taking control of their money with ExpenseFlow.
            Start your journey to financial freedom today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-400 text-[#0F172A] font-semibold text-lg p-2 rounded-md flex items-center justify-center"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              size="lg"
              variant="outline"
              className="border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10 text-lg p-3 rounded-md"
            >
              View Demo
            </button>
          </div>
          <p className="text-sm text-slate-600">
            No credit card required &bull; Free forever &bull; Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
