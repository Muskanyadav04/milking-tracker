"use client";

import { useState } from "react";

export default function MilkModal({ onSave, onClose }) {

  const [milk, setMilk] = useState("");

  const handleSave = async () => {
    const milkValue = Number(milk);

    if (!milk || milkValue <= 0) {
      alert("Please enter a valid milk quantity!");
      return;
    }

    // Call onSave from parent and wait
    if (typeof onSave === "function") {
      await onSave(milkValue); // send number
    }

    // Close modal after saving
    if (typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2 text-gray-800 text-center">
          Enter Milk Quantity (Litres)
        </h2>
        <input
          type="number"
          placeholder="Example: 10"
          value={milk}
          onChange={(e) => setMilk(e.target.value)}
          className="border border-gray-300 w-full p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition"
        >
          Save Session
        </button>
      </div>
    </div>
  );
}