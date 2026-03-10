"use client";

import { useEffect, useState } from "react";
import { getSessions } from "../services/api";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

export default function MilkChart(){

const [sessions,setSessions] = useState([]);

useEffect(()=>{
fetchSessions();
},[]);

const fetchSessions = async ()=>{
const res = await getSessions();
setSessions(res.data);
}

const data = {
labels: sessions.map((s,i)=>`Session ${i+1}`),
datasets: [
{
label:"Milk (Litres)",
data: sessions.map(s=>s.milk_quantity),
backgroundColor:"#16a34a"
}
]
};

return(

<div className="bg-white p-6 rounded-xl shadow-lg mt-10">

<h2 className="text-xl font-bold mb-4 text-gray-700">
Milk Production Chart
</h2>

<Bar data={data} />

</div>

)

}