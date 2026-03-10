"use client";

import { useEffect, useState } from "react";
import { getSessions } from "../services/api";

export default function Stats(){

const [sessions,setSessions] = useState([]);

useEffect(()=>{
fetchSessions();
},[]);

const fetchSessions = async ()=>{
const res = await getSessions();
setSessions(res.data);
}

const totalMilk = sessions.reduce((acc,s)=> acc + Number(s.milk_quantity),0);

const totalSessions = sessions.length;

const totalTime = sessions.reduce((acc,s)=> acc + s.duration,0);

return(

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

<div className="bg-white shadow-lg p-6 rounded-xl text-center">
<h3 className="text-lg font-semibold text-gray-600">Total Sessions</h3>
<p className="text-3xl font-bold text-green-700">{totalSessions}</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl text-center">
<h3 className="text-lg font-semibold text-gray-600">Total Milk</h3>
<p className="text-3xl font-bold text-green-700">{totalMilk} L</p>
</div>

<div className="bg-white shadow-lg p-6 rounded-xl text-center">
<h3 className="text-lg font-semibold text-gray-600">Total Time</h3>
<p className="text-3xl font-bold text-green-700">
{Math.floor(totalTime/60)} min
</p>
</div>

</div>

)

}