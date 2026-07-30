import Container from "../ui/Container";
import Reveal from "../ui/Reveal";


const strategies = [
  "Website Audit",
  "Keyword Research",
  "Content Optimization",
  "Technical Improvements",
];


export default function SEOStrategy(){

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

Our SEO
<span className="text-yellow-500">
 {" "}Strategy
</span>

</h2>


</Reveal>


<div className="
mt-16
grid
gap-6
md:grid-cols-4
">


{strategies.map((item,index)=>(

<div
key={item}
className="
rounded-3xl
border
border-white/10
bg-white/5
p-8
text-center
"
>

<span className="
text-3xl
font-black
text-yellow-500
">
0{index+1}
</span>


<p className="
mt-5
font-semibold
text-white
">
{item}
</p>


</div>

))}


</div>


</Container>


</section>

);

}