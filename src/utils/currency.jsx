export const currencySymbol = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

export const getCurrency = () => {
  return localStorage.getItem("currency") || "INR";
};