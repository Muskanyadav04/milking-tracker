"use client";

import { useState } from "react";

export default function MilkModal({ onSave }) {

const [milk, setMilk] = useState("");

return (

<div className="fixed inset-0 bg-black/40 flex items-center justify-center">

<div className="bg-white p-6 rounded-2xl shadow-xl w-80">

<h2 className="text-xl font-bold mb-4 text-gray-800">
Enter Milk Quantity (Litres)
</h2>

<input
type="number"
placeholder="Example: 10"
value={milk}
onChange={(e)=>setMilk(e.target.value)}
className="border border-gray-300 w-full p-2 rounded mb-4 text-black focus:outline-none focus:ring-2 focus:ring-green-500"
/>

<button
onClick={()=>onSave(milk)}
className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full transition"
>
Save Session
</button>

</div>

</div>

);
}