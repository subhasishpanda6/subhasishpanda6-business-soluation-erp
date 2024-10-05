import { NavLink } from "react-router-dom";
import { links } from "./links";


function Nav() {
    return (
        <nav className="hidden md:flex" id="navbar">
            <ul className="flex gap-5">
                {links.map(([id, title, url]) => (
                    <li key={id}>
                        <NavLink to={url} className={`text-md font-medium text-white ease-in duration-200`}>{title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}


export default Nav