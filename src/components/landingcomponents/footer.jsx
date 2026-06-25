import Logo from "../../assets/ExpenseLogo.png";
function Footer() {
  return (
    <>
      <footer className=" border-t border-slate-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-0">
                <img src={Logo} alt="ExpenseFlow" className="w-10" />

                <h2 className="text-2xl font-bold text-white">ExpenseFlow</h2>
              </div>

              <p className="mt-5 text-slate-400 leading-7">
                Track expenses, manage income, and gain meaningful financial
                insights with a modern and intuitive dashboard.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-5">Quick Links</h3>

              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#home" className="hover:text-emerald-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="hover:text-emerald-400 transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#dashboard"
                    className="hover:text-emerald-400 transition"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-emerald-400 transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-5">Resources</h3>

              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-emerald-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-5">Connect</h3>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition"
                >
                  GitHub
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition"
                >
                  in
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-emerald-500 transition"
                >
                  X
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© 2026 ExpenseFlow. All rights reserved.</p>
            <div className="logo">
                Build by {" "}
                <a href="https://codelabs-by-kumarsai.netlify.app/" target="_blank" rel="noopener noreferrer">
              <em>
                <span
                  style={{ fontSize: 'larger', fontWeight: 'bolder', marginRight: '5px', color: '#dc3545' }}
                >
                  {'{'}
                </span>
                <span className="brand-name-1" style={{ fontSize: 'larger', fontWeight: 'bolder' }}>
                  Code
                </span>
                <span
                  className="brand-name-2 text-danger"
                  style={{
                    color: '#dc3545',
                    fontSize: 'larger',
                    fontWeight: 'bolder',
                    textDecoration: 'underline',
                    textDecorationColor: '#dc3545',
                    textUnderlineOffset: '3px'
                  }}
                >
                  Labs
                </span>
                <span style={{ fontSize: 'larger', fontWeight: 'bolder', marginLeft: '5px', color: '#dc3545' }}>{'}'}</span>
              </em>
              </a>
            </div>
           
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
