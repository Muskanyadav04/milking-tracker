export default function MilkAnimation({running}){

if(!running) return null;

return(

<div className="flex flex-col items-center mt-8">

<div className="text-5xl animate-bounce">
🥛
</div>

<p className="text-green-700 font-semibold mt-2">
Milking in progress...
</p>

</div>

)

}