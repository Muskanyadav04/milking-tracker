"use client";

import { useRouter } from "next/navigation";
import Stats from "../components/Stats";
import MilkChart from "../components/MilkChart";

export default function Home() {

const router = useRouter();

return (

<div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-10">

<h1 className="text-5xl font-bold text-green-700 mb-6">
🐄 Milking Tracker
</h1>

<p className="text-gray-600 mb-10">
Track milking sessions while playing calming music
</p>

<div className="flex gap-4 mb-12">

<button
onClick={()=>router.push("/session")}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
>
Start Milking
</button>

<button
onClick={()=>router.push("/history")}
className="border border-green-600 text-green-700 px-6 py-3 rounded-xl"
>
View History
</button>

</div>

{/* Statistics Cards */}
<Stats/>

{/* Milk Production Chart */}
<MilkChart/>

</div>

);

}