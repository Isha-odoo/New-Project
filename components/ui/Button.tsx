"use client";

import { ReactNode } from "react";

interface Props{
    children:ReactNode;
    onClick?:()=>void;
}

export default function Button({
children,
onClick
}:Props){

return(

<button

onClick={onClick}

className="rounded-full bg-[#A56A3F] px-8 py-4 text-white text-lg shadow-lg hover:scale-105"

>

{children}

</button>

)

}
