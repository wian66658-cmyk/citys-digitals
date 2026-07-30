import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const projects = [
  "Luxury E-commerce",
  "Mobile Banking App",
  "SaaS Dashboard",
];


export default function DesignShowcase(){

return (

<section className="py-24">

<Container>

<Reveal className="text-center">

<p className="text-sm uppercase tracking-[0.35em] text-yellow-500">
Portfolio
</p>


<h2 className="
mt-6
text-4xl
font-black
text-white
md:text-6xl
">
Interface
<span className="text-yellow-500">
 {" "}Showcase
</span>
</h2>

</Reveal>


<div className="
mt-16
grid
gap-8
md:grid-cols-3
">

{projects.map((project,index)=>(

<Reveal key={project} delay={index*0.1}>

<div className="
h-72
rounded-3xl
border
border-white/10
bg-white/5
flex
items-center
justify-center
text-center
text-xl
font-bold
text-white
">

{project}

</div>

</Reveal>

))}

</div>


</Container>

</section>

);

}