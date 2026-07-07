"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";

export default function Home() {

const router=useRouter();

return(

<main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFF8EF] via-[#FFFDF8] to-[#F5EFE5]">

<div className="absolute inset-0 opacity-20">

<div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-yellow-300 blur-[120px]" />

<div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-orange-300 blur-[120px]" />

</div>

<div className="section fade">

<GlassCard>

<div className="text-center">

<p className="text-sm tracking-[8px] text-amber-700">

🪔 WELCOME

</p>

<h1 className="hero-title mt-5">

Our Sacred Space

</h1>

<p className="mt-6 subtitle text-lg">

Two Souls

<br/>

One Journey

<br/>

Infinite Growth

</p>

<p className="mt-8 text-xl italic text-[#8A6A43]">

"यत्र प्रेम तत्र भगवान्"

</p>

<p className="mt-3 text-gray-600">

Where there is love,

there is the Divine.

</p>

<div className="mt-10">

<Button

onClick={()=>router.push("/login")}

>

Enter Temple →

</Button>

</div>

</div>

</GlassCard>

</div>

</main>

)

}
