import { useState } from "react";
import Logo from "../../assets/ExpenseLogo.png";
import {Link} from 'react-router-dom'
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0F172A]/90 backdrop-blur-lg border-b border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
           
          <div className="flex items-center space-x-1">
             <img src={Logo} alt="ExpenseFlow Logo" className="w-15 h-15" />
            <span className="font-semibold text-lg text-white">
              ExpenseFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium">
              Home
            </Link>
            <a
              href="#features"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              How it Works
            </a>
            <a
              href="#benefits"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              Why Choose Us
            </a>
            <a
              href="#faq's"
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              FAQ's
            </a>
          </div>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
                to="/auth"
              className="text-slate-300 p-2 hover:text-white cursor-pointer hover:text-emerald-400 transition-colors text-md font-semibold"
            >
              Login
            </Link>
            <Link
              to="/auth"
              className="bg-emerald-500 hover:bg-emerald-400 p-2 rounded-md text-[#0F172A] font-semibold"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-400"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-emerald-500/20 mt-2 pt-4">
            {["Home", "Features", "How it works", "Why Choose Us", "FAQ's"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="block text-slate-400 hover:text-emerald-400 py-2 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </a>
              ),
            )}
            <div className="flex gap-3 pt-2">
              <Link
                to="/auth"
                className="text-slate-300 p-2 hover:text-white cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/auth"
                className="bg-emerald-500 hover:bg-emerald-400 p-2 rounded-md text-[#0F172A] font-semibold"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
