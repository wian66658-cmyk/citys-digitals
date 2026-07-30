import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const tools=[
"Figma",
"Adobe Creative Cloud",
"Framer",
"Illustrator",
"Photoshop",
];


export default function DesignTools(){

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

Design
<span className="text-yellow-500">
 Tools
</span>

</h2>

</Reveal>


<div className="
mt-12
flex
flex-wrap
justify-center
gap-5
">

{tools.map(tool=>(

<div
key={tool}
className="
rounded-full
border
border-yellow-500/20
bg-yellow-500/10
px-6
py-3
text-yellow-500
"
>

{tool}

</div>

))}

</div>


</Container>

</section>

);

}