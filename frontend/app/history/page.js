"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSessions } from "../../services/api";

export default function History(){

const [sessions,setSessions] = useState([]);
const router = useRouter();

useEffect(()=>{
getSessions().then(res=>{
setSessions(res.data)
})
},[])

return(

<div className="min-h-screen bg-green-50 p-10 text-gray-800">

<div className="flex justify-between items-center mb-8">

<h1 className="text-4xl font-bold text-green-700">
🐄 Milking History
</h1>

<button
onClick={()=>router.push("/")}
className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
>
⬅ Back Home
</button>

</div>

<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">

{sessions.length === 0 ? (

<p className="text-center text-gray-500">
No sessions recorded yet.
</p>

) : (

<table className="w-full border-collapse text-gray-800">

<thead>
<tr className="bg-green-100 text-green-900">

<th className="p-3 text-left">Date</th>
<th className="p-3 text-left">Duration</th>
<th className="p-3 text-left">Milk Produced</th>

</tr>
</thead>

<tbody>

{sessions.map((s)=>{

const minutes = Math.floor(s.duration/60)
const seconds = s.duration%60

return(

<tr key={s._id} className="border-b hover:bg-green-50">

<td className="p-3 text-gray-700">
{new Date(s.start_time).toLocaleDateString()}
</td>

<td className="p-3 text-gray-700">
{minutes}m {seconds}s
</td>

<td className="p-3 font-semibold text-green-700">
{s.milk_quantity} L
</td>

</tr>

)

})}

</tbody>

</table>

)}

</div>

</div>

)
}