import { useState } from "react";
import Logo from "../logo/Logo"
import Nav from "../nav/Nav"
import MobileNav from "../nav/MobileNav";
import { Link } from "react-router-dom";

type TPropsType = {
    activeMenu : boolean,
    onToggelMenu : React.Dispatch<React.SetStateAction<boolean>>
}

const HambergerIcon = ({activeMenu,onToggelMenu} : TPropsType) =>{
    
    return (
        <i className={`bi bi-list text-3xl ${activeMenu ? "md:inline-block" : "md:hidden"} cursor-pointer`}
        onClick={()=> onToggelMenu(!activeMenu)}
        ></i>
    )
}

const CloseIcon = ({activeMenu,onToggelMenu} : TPropsType) =>{
    
    return (
        <i className={`bi bi-x-lg text-3xl ${activeMenu ? "md:hidden" : "md:inline-block"} cursor-pointer`}
        onClick={()=> onToggelMenu(!activeMenu)}
        ></i>
    )
}


function Header() {
    const [toggleMobileMenu,setToggleMobileMenu] = useState<boolean>(false)

  return (
   <header className={`bg-primary text-white z-20 fixed top-0 w-full`}>
        <div className="container flex justify-between items-center h-[60px]">
            <Link to="/"><Logo/></Link>
            <Nav/>
            {toggleMobileMenu && <MobileNav activeMenu={toggleMobileMenu} onToggelMenu={setToggleMobileMenu}/>}
            {toggleMobileMenu ? 
                <CloseIcon 
                    activeMenu={toggleMobileMenu} onToggelMenu={setToggleMobileMenu} 
                /> 
                : 
                <HambergerIcon  
                    activeMenu={toggleMobileMenu} onToggelMenu={setToggleMobileMenu}
                />
            }
            
        </div>
   </header>
  )
}

export default Header