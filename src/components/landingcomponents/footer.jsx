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
                  className="w-11 h-11 rounded-lg  flex items-center justify-center "
                >
                 <svg xmlns="http://www.w3.org/2000/svg"  height="29" width="29"    viewBox="0 0 512 512"><path fill="rgb(253, 253, 253)" d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>   </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg  flex items-center justify-center "
                >
                 <svg xmlns="http://www.w3.org/2000/svg" height="29" width="29" viewBox="0 0 448 512"><path fill="rgb(253, 253, 253)" d="M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"/></svg>
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-lg  flex items-center justify-center "
                >
                  <svg xmlns="http://www.w3.org/2000/svg"  height="29" width="29"  viewBox="0 0 512 512"><path fill="rgb(253, 253, 253)" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
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
