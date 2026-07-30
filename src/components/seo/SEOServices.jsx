import {
  Search,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";


const services = [

  {
    icon: Search,
    title:"Keyword Strategy",
    description:
      "Finding valuable search opportunities that connect your business with customers.",
  },

  {
    icon: Globe,
    title:"Technical SEO",
    description:
      "Improving website structure, indexing, and search engine performance.",
  },

  {
    icon: Zap,
    title:"Performance Optimization",
    description:
      "Making your website faster and improving user experience.",
  },

  {
    icon: BarChart3,
    title:"SEO Reporting",
    description:
      "Tracking rankings, traffic, and growth with clear insights.",
  },

];


export default function SEOServices(){

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
Our SEO Services
</p>


<h2 className="
mt-6
text-4xl
font-black
text-white
md:text-6xl
">

Strategies Built For
<span className="text-yellow-500">
 {" "}Growth
</span>

</h2>


</Reveal>



<div className="
mt-16
grid
gap-8
md:grid-cols-2
">


{services.map((item,index)=>{

const Icon=item.icon;


return (

<Reveal
key={item.title}
delay={index*0.1}
>

<GlassCard className="p-8">


<div className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-yellow-500/10
text-yellow-500
">

<Icon size={28}/>

</div>



<h3 className="
mt-8
text-2xl
font-bold
text-white
">

{item.title}

</h3>



<p className="
mt-4
leading-7
text-gray-400
">

{item.description}

</p>


</GlassCard>


</Reveal>

);

})}


</div>


</Container>


</section>

);

}