import { ReactNode } from "react";

type TPropsType = {
    as? : string,
    children : ReactNode
}
function Heading({as,children} : TPropsType) {
  switch(as){
    case "h1" :
        return (
            <h1 className="text-center font-bold text-4xl">{children}</h1>
        );
        break;

    case "h2" :
        return (
            <h2 className="text-slate-900 dark:text-white text-3xl font-medium tracking-tight">{children}</h2>
        );
        break;

    case "h3" :
        return (
            <h3 className="text-slate-900 dark:text-white text-2xl font-medium tracking-tight">{children}</h3>
        );
        break;

    case "h4" :
        return (
            <h4 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">{children}</h4>
        );
        break;

    default :
        return (
            <h6 className="">{children}</h6>
        );
        break;
  }
}

export default Heading