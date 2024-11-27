"use client"
import Link from "next/link"
import Nav from "./Nav"
import { useEffect, useState } from "react"

const Header = () => {
  
  const [active, setActive] = useState(false);
  const [menuOpened, setmenuOpened] = useState(false);
  const toggleMenu = () => setmenuOpened(!menuOpened);

  useEffect(()=>{
    const handleScroll = ()=> {
      //detect scroll
      setActive(window.scrollY > 40);
    };
    window.addEventListener("scroll",handleScroll);
    return () => {
      window.removeEventListener("scroll",handleScroll);
    }
  }, []);
  return (
    <header className={`${active ? "bg-white shadow-lg py-2 z-50":"bg-white py-3 z-50"} 
    fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200`}>
    <div className="max-padd-container flexBetween">
      {/* logo */}
      <Link href={"/"} className="flexCenter py-3"><img src={"./logo.svg"} alt="logo" height={99} width={133}></img></Link>
      {/* Nav*/}
      {/*for Desktop*/}
      <Nav containerStyles={"hidden lg:flex gap-x-10 items-start justify-center"} 
      linkStyles={"capitalize cursor-pointer my-4 relative transition-all"}/>
      {/*icons & buttons*/}
      <div>
      buttons
      </div>
     
    </div>
    </header>
  )
}

export default Header
