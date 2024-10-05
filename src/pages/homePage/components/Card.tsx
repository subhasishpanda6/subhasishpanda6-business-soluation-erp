import { ReactNode } from "react"


type TPropsType = {
   children : ReactNode
}

function Card({children} : TPropsType) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 shadow-xl">
            {/* <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <img src={src} alt={alt} width="60px" height="60px" />
                </span>
            </div>
            
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
                {text}
            </p>
            <Link to="/" className="inline-block mt-3 rounded-md bg-primary hover:bg-primary-200 px-3 py-2 text-sm font-medium text-white ease-in duration-200">
                    Download
            </Link> */}
            {children}
            
        </div>
    )
}

export default Card