import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const steps=[
"Research",
"Wireframing",
"Prototype",
"Testing",
"Final Design",
];


export default function UXProcess(){

return (

<section className="py-24">

<Container>

<Reveal className="text-center">

<h2 className="
text-4xl
font-black
text-white
md:text-6xl
">

Our UX
<span className="text-yellow-500">
 Process
</span>

</h2>

</Reveal>


<div className="
mt-16
grid
gap-6
md:grid-cols-5
">

{steps.map((step,index)=>(

<div
key={step}
className="
rounded-2xl
border
border-white/10
bg-white/5
p-6
text-center
text-white
"
>

<span className="text-yellow-500">
0{index+1}
</span>

<p className="mt-4 font-semibold">
{step}
</p>

</div>

))}

</div>


</Container>

</section>

);

}