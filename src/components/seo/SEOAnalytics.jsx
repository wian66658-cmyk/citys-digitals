import {
  TrendingUp,
  Users,
  MousePointer,
  Target,
} from "lucide-react";

import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import GlassCard from "../ui/GlassCard";


const metrics = [
  {
    icon: TrendingUp,
    title: "Ranking Growth",
    description:
      "Improve your position on search engines and reach more potential customers.",
  },

  {
    icon: Users,
    title: "Organic Traffic",
    description:
      "Attract visitors actively searching for your products and services.",
  },

  {
    icon: MousePointer,
    title: "Better Conversions",
    description:
      "Turn website visitors into qualified business leads.",
  },

  {
    icon: Target,
    title: "Data Insights",
    description:
      "Track performance with meaningful analytics and reports.",
  },
];


export default function SEOAnalytics(){

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
Results
</p>


<h2 className="
mt-6
text-4xl
font-black
text-white
md:text-6xl
">

Measure What
<span className="text-yellow-500">
 {" "}Matters
</span>

</h2>


</Reveal>



<div className="
mt-16
grid
gap-8
md:grid-cols-2
">


{metrics.map((item,index)=>{

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