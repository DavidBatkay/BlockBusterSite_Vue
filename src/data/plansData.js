const plansData = [
  {
    name: "Free Plan",
    price: "Free",
    features: ["A few free movies and TV shows*.", "No account sharing."],
    note: "Other movie rentals for 24 hours are priced separately*",
    classes: "border-gray-300 bg-white h-72",
    textColor: "text-gray-800",
    buttonDisabled: "bg-gray-400 text-gray-700 cursor-not-allowed",
    buttonEnabled: "bg-gray-600 text-white hover:bg-gray-700",
  },
  {
    name: "Standard",
    price: "$9.99/Month",
    features: [
      "Access to all movies and TV shows",
      "Shared account for up to 3 people",
    ],
    classes: "border-blue-400 bg-blue-50 h-80 shadow-lg hover:shadow-xl",
    textColor: "text-blue-800",
    buttonDisabled: "bg-blue-400 text-blue-800 cursor-not-allowed",
    buttonEnabled: "bg-blue-600 text-white hover:bg-blue-700",
  },
  {
    name: "Superstar",
    price: "$19.99/Month",
    features: [
      "VIP access with early episodes and movies.",
      "Up to 5 people per account.",
    ],
    classes:
      "border-yellow-400 bg-yellow-50 h-96 shadow-xl hover:scale-105 hover:shadow-2xl",
    textColor: "text-yellow-800",
    buttonDisabled: "bg-yellow-400 text-yellow-800 cursor-not-allowed",
    buttonEnabled: "bg-yellow-500 text-white hover:bg-yellow-600",
  },
];
export default plansData;
