import { NavLink } from "react-router-dom"
import { links } from "./links"
type TPropsType = {
    activeMenu : boolean,
    onToggelMenu : React.Dispatch<React.SetStateAction<boolean>>
}
export default function MobileNav({activeMenu,onToggelMenu} : TPropsType) {
    return (
        <nav className="md:hidden w-screen h-screen bg-white z-10 absolute top-[60px] left-0" id="navbar">
            <ul className="flex flex-col gap-3 items-center pt-6">
                {links.map(([id, title, url]) => (
                    <li key={id} onClick={() => onToggelMenu(!activeMenu)}>
                        <NavLink to={url} className={`text-md font-medium text-black ease-in duration-200`}>{title}</NavLink>
                       
                    </li>
                ))}
            </ul>
        </nav>
    )
}


