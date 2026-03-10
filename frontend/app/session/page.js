"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Timer from "../../components/Timer";
import MilkModal from "../../components/MilkModal";
import MilkAnimation from "../../components/MilkAnimation";
import { saveSession } from "../../services/api";
import Swal from "sweetalert2";

export default function SessionPage(){

const [running,setRunning] = useState(false);
const [seconds,setSeconds] = useState(0);
const [showModal,setShowModal] = useState(false);

/* NEW RESET STATE */
const [reset,setReset] = useState(false);

const router = useRouter();

/* AUDIO */
const audioRef = useRef(null);


/* START SESSION */
const startSession = ()=>{

if(!audioRef.current){
audioRef.current = new Audio("/music.mp3");
audioRef.current.loop = true;
}

audioRef.current.play().catch(()=>{});

setRunning(true);

}


/* PAUSE SESSION */
const pauseSession = ()=>{

audioRef.current?.pause();
setRunning(false);

}


/* STOP SESSION */
const stopSession = ()=>{

audioRef.current?.pause();

if(audioRef.current){
audioRef.current.currentTime = 0;
}

setRunning(false);
setShowModal(true);

}


/* RESTART SESSION */
const restartSession = ()=>{

audioRef.current?.pause();

if(audioRef.current){
audioRef.current.currentTime = 0;
}

setRunning(false);
setSeconds(0);

/* TRIGGER TIMER RESET */
setReset(true);

setTimeout(()=>{
setReset(false);
},100);

}


/* SAVE MILK DATA */
const saveMilk = async(milk)=>{

await saveSession({
start_time:new Date(),
end_time:new Date(),
duration:seconds,
milk_quantity:milk
})

setShowModal(false);

Swal.fire({
title: "Session Saved!",
text: "Milk session stored successfully 🐄",
icon: "success",
confirmButtonColor: "#16a34a"
});

}


return(

<div className="min-h-screen bg-green-50 flex flex-col items-center justify-center text-gray-800">


{/* BACK BUTTON */}
<div className="absolute top-6 left-6">

<button
onClick={()=>router.push("/")}
className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
>
⬅ Back Home
</button>

</div>


{/* TITLE */}
<h1 className="text-4xl font-bold text-green-700 mb-10">
🐄 Milking Session
</h1>


{/* TIMER */}
<Timer running={running} setSeconds={setSeconds} reset={reset}/>


{/* MILK ANIMATION */}
<MilkAnimation running={running}/>


{/* BUTTONS */}
<div className="flex gap-4 mt-10 flex-wrap justify-center">

<button
onClick={startSession}
className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
>
Start
</button>

<button
onClick={pauseSession}
className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg"
>
Pause
</button>

<button
onClick={restartSession}
className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
>
Restart
</button>

<button
onClick={stopSession}
className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg"
>
Stop
</button>

</div>


{/* MODAL */}
{showModal && <MilkModal onSave={saveMilk}/>}

</div>

)

}