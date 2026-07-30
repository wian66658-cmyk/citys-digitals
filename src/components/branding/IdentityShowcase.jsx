import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const examples = [
  "Luxury Fashion Brand",
  "Corporate Identity",
  "Product Packaging",
];


export default function IdentityShowcase(){

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
Portfolio
</p>


<h2 className="
mt-6
text-4xl
font-black
text-white
md:text-6xl
">

Brand
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


{examples.map(example=>(

<div
key={example}
className="
h-72
flex
items-center
justify-center
rounded-3xl
border
border-white/10
bg-white/5
p-6
text-center
text-xl
font-bold
text-white
"
>

{example}

</div>

))}


</div>


</Container>


</section>

);

}