 function Stats() {
  const stats = [
    { label: "Total Users", value: "50,000+" },
    { label: "Expenses Tracked", value: "2M+" },
    { label: "Monthly Savings Generated", value: "₹15Cr+" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

  return (
    <section className="py-16 bg-[#111827] border-y border-emerald-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;