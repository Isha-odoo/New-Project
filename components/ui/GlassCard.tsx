import { ReactNode } from "react";

export default function GlassCard({

children

}:{

children:ReactNode

}){

return(

<div

className="glass rounded-[32px] p-8"

>

{children}

</div>

)

}
