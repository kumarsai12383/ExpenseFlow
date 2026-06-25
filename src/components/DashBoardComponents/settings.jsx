import { useState } from "react";
function Settings({ user }) {
    
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "INR",
  );
  const handleCurrency = (e) => {
    const selected = e.target.value;

    setCurrency(selected);

    localStorage.setItem("currency", selected);
  };
  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-gray-500">Manage your application preferences.</p>
      </div>

      {/* Appearance */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">Appearance</h2>
            <p className="text-sm text-gray-400 mt-1">
              Customize the look and feel of ExpenseFlow.
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-sm">
            Dark Mode
          </span>
        </div>

        <div className="mt-5 border-t border-gray-700 pt-5 flex justify-between items-center">
          <div>
            <h3 className="text-white font-medium">Theme</h3>
            <p className="text-gray-400 text-sm">
              Light mode will be available in a future update.
            </p>
          </div>

          <button
            disabled
            className="px-4 py-2 rounded-lg bg-gray-700 text-gray-400 cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>
      </div>

      {/* Currency */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-white">Currency</h2>
          <p className="text-sm text-gray-400 mt-1">
            Select your preferred currency for displaying income and expenses.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white font-medium">Default Currency</h3>
            <p className="text-gray-400 text-sm">
              This will be used throughout the application.
            </p>
          </div>

          <select
            value={currency}
            onChange={handleCurrency}
            className="bg-[#0F172A] border border-gray-600 text-white rounded-lg px-4 py-2 outline-none"
          >
            <option value="INR">🇮🇳 INR (₹)</option>
            <option value="USD">🇺🇸 USD ($)</option>
            <option value="EUR">🇪🇺 EUR (€)</option>
            <option value="GBP">🇬🇧 GBP (£)</option>
          </select>
        </div>
      </div>
      {/* Notifications */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-white">Notifications</h2>
          <p className="text-sm text-gray-400 mt-1">
            Manage reminder and notification preferences.
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-gray-700 pt-5">
          <div>
            <h3 className="text-white font-medium">Monthly Expense Reminder</h3>
            <p className="text-gray-400 text-sm">
              Receive a reminder at the end of every month.
            </p>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />

            <div
              className="
        w-11 h-6 bg-gray-600 rounded-full
        peer
        peer-checked:bg-emerald-500
        after:content-['']
        after:absolute
        after:top-[2px]
        after:left-[2px]
        after:bg-white
        after:h-5
        after:w-5
        after:rounded-full
        after:transition-all
        peer-checked:after:translate-x-5
        "
            ></div>
          </label>
        </div>
      </div>

      {/* Security */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 p-5">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-white">Security</h2>
          <p className="text-sm text-gray-400 mt-1">
            View your account and authentication details.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-gray-400">Email</span>
            <span className="text-white">{user?.email}</span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-gray-400">Authentication</span>
            <span className="text-emerald-400">
              {user?.app_metadata?.providers?.join(", ") || "Email/Password"}
            </span>
          </div>

          <div className="flex justify-between items-center border-b border-gray-700 pb-3">
            <span className="text-gray-400">User ID</span>
            <span className="text-white text-sm">
              {user?.id?.slice(0, 10)}...
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400">Email Verified</span>
            <span className="text-emerald-400">
              {user?.email_confirmed_at ? "Verified" : "Not Verified"}
            </span>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-950/20 border border-red-500 rounded-xl p-5">
        <div className="mb-5">
          <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
          <p className="text-sm text-gray-400 mt-1">
            These actions are irreversible. Proceed carefully.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white font-medium">Sign Out</h3>
              <p className="text-gray-400 text-sm">
                Sign out from your current session.
              </p>
            </div>

            <button
              // onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          </div>

          <hr className="border-gray-700" />

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-white font-medium">Delete Account</h3>
              <p className="text-gray-400 text-sm">
                Permanently delete your account and all data.
              </p>
            </div>

            <button
              disabled
              className="bg-gray-700 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
