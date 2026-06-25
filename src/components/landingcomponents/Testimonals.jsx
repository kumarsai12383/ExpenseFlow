
import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      div: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmclMjBidXNpbmVzc3xlbnwxfHx8fDE3ODE3ODkzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "ExpenseFlow has completely transformed how I manage my finances. The insights are incredible and have helped me save over ₹50,000 this year!",
    },
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      div: "https://images.unsplash.com/photo-1749793716288-a5ab5ed3b0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc4MTYxMDk2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "As a business owner, tracking expenses is crucial. This app makes it effortless and the analytics help me make better financial decisions.",
    },
    {
      name: "Ananya Patel",
      role: "Marketing Manager",
      div: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwZXJzb24lMjBjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3ODE3ODkzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      text: "Beautiful interface, powerful features. I love how easy it is to visualize my spending patterns. Highly recommend to anyone serious about finances!",
    },
  ];

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="text-4xl font-bold text-white">Loved by Thousands</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            See what our users have to say about ExpenseFlow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-[#1E293B] border-emerald-500/15 hover:border-emerald-500/35 hover:shadow-xl hover:shadow-emerald-900/20 transition-all duration-300">
              <div className="space-y-6">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed">{testimonial.text}</p>

                <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                  <div className="w-12 h-12 ring-2 ring-emerald-500/30">
                    <img src={testimonial.div} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;