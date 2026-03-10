"use client";

import { useEffect, useState } from "react";

export default function Timer({ running, setSeconds, reset }) {

const [localSeconds, setLocalSeconds] = useState(0);

/* TIMER */
useEffect(() => {

let interval;

if (running) {
interval = setInterval(() => {
setLocalSeconds(prev => prev + 1);
}, 1000);
}

return () => clearInterval(interval);

}, [running]);

/* SEND TIME TO PARENT */
useEffect(() => {
setSeconds(localSeconds);
}, [localSeconds, setSeconds]);

/* RESET TIMER */
useEffect(() => {
if(reset){
setLocalSeconds(0);
}
},[reset]);

const formatTime = () => {

const hrs = Math.floor(localSeconds / 3600);
const mins = Math.floor((localSeconds % 3600) / 60);
const secs = localSeconds % 60;

return `${hrs.toString().padStart(2,"0")}:${mins
.toString()
.padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;

};

return (

<h2 className="text-6xl font-bold text-green-700">
{formatTime()}
</h2>

);

}