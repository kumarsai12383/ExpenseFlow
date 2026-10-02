# 💸 ExpenseFlow

ExpenseFlow is a modern expense management web application that helps users track their income, expenses, and overall financial health through an intuitive dashboard, interactive charts, and real-time analytics.

Built using **React**, **Tailwind CSS**, and **Supabase**, ExpenseFlow provides a clean, responsive interface with secure authentication and cloud-based data storage.

---

## 🚀 Live Demo

> http://expense-flow-peach-seven.vercel.app

---



# ✨ Features

## Authentication

- Secure Email & Password Authentication
- Google OAuth Login
- Protected Dashboard Routes
- Persistent User Sessions

---

## Dashboard

- Total Income
- Total Expenses
- Current Balance
- Total Transactions
- Recent Transactions
- Responsive Sidebar Navigation
- Mobile Offcanvas Navigation

---

## Expense Management

- Add Expense
- View Expenses
- Edit Expense
- Delete Expense
- Categorize Expenses
- Notes Support

---

## Income Management

- Add Income
- View Income
- Edit Income
- Delete Income

---

## Analytics

- Expense Distribution (Pie Chart)
- Monthly Expense Report (Bar Chart)
- Daily Expense Trend (Line Chart)
- Category-wise Analysis

---

## Profile

- User Information
- Personal Details
- Account Information

---

## Settings

- Theme Section (Ready for Future)
- Currency Preference
- Notifications
- Security Information
- Logout

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Tailwind CSS
- Chart.js
- React ChartJS 2

## Backend

- Supabase

## Authentication

- Supabase Authentication
- Google OAuth

## Database

- PostgreSQL (Supabase)

## Deployment

- Vercel

---

# 📂 Folder Structure

```
src
│
├── assets
│
├── components
│   ├── landingcomponents
│   └── DashBoardComponents
│
├── context
│
├── pages
│
├── supaApi
│
├── utils
│
├── App.jsx
└── main.jsx
```

---

# 📊 Database Schema

## Expenses Table

| Column | Type |
|----------|--------|
| id | int |
| title | text |
| amount | numeric |
| category | text |
| note | text |
| user_id | uuid |
| created_at | timestamptz |

---

## Income Table

| Column | Type |
|----------|--------|
| id | int |
| title | text |
| amount | numeric |
| source | text |
| note | text |
| user_id | uuid |
| created_at | timestamptz |

---

# 🔒 Authentication Flow

```
User

↓

Login / Google OAuth

↓

Supabase Authentication

↓

Protected Route

↓

Dashboard
```

---

# 📈 Dashboard Overview

The dashboard provides users with a quick overview of their financial status through:

- Total Income
- Total Expenses
- Remaining Balance
- Recent Transactions
- Monthly Expense Report
- Expense Distribution Chart

---

# 🎯 Future Improvements

- Dark / Light Theme
- Export Transactions as PDF
- Budget Planning
- Savings Goals
- Monthly Reports
- Multi Currency Conversion
- Email Notifications
- Recurring Expenses
- Search & Filters

---

# ⚙ Installation

Clone the repository

```bash
git clone https://github.com/yourusername/ExpenseFlow.git
```

Move into project

```bash
cd ExpenseFlow
```

Install dependencies

```bash
npm install
```

Run development server

```bash
npm run dev
```

---

# 🌍 Environment Variables

Create a `.env` file.

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL

VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

---

# 🚀 Deployment

Deploy using Vercel.

Create a `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Update your Supabase OAuth Redirect URLs.

---

# 📚 What I Learned

- React Component Architecture
- React Router Nested Routes
- Context API
- CRUD Operations
- Supabase Authentication
- Google OAuth
- PostgreSQL Database
- Chart.js Integration
- Responsive Dashboard Design
- State Management
- Protected Routes
- Local Storage
- API Integration

---

# 👨‍💻 Author

**Kumarsai Makthala**

GitHub: https://github.com/kumarsai12383

LinkedIn: https://linkedin.com/in/kumarsai-makthala

Portfolio: https://kumarsai.dev

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
