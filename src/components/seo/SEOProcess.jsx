import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const steps = [
  "SEO Audit",
  "Strategy Planning",
  "Optimization",
  "Monitoring",
  "Growth Reports",
];


export default function SEOProcess(){

return (

<section className="py-24">

<Container>


<Reveal className="text-center">

<p className="
text-sm
uppercase
tracking-[0.35em]
text-yellow-500
">
Process
</p>


<h2 className="
mt-6
text-4xl
font-black
text-white
md:text-6xl
">

Our SEO
<span className="text-yellow-500">
 {" "}Workflow
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
rounded-3xl
border
border-white/10
bg-white/5
p-6
text-center
"
>

<div className="
text-3xl
font-black
text-yellow-500
">

0{index+1}

</div>


<p className="
mt-4
font-semibold
text-white
">

{step}

</p>


</div>

))}


</div>


</Container>


</section>

);

}