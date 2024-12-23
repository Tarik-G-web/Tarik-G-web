"use client"
import Link from "next/link"
import Nav from "./Nav"
import { useEffect, useState } from "react"
import Button  from "./Button";

import { IoMenu,IoClose } from "react-icons/io5";


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
     {/* for mobile*/}
     <Nav containerStyles={`${menuOpened ? "flex items-start flex-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-0 w-60" : 
      "flex items-start fles-col justify-center fixed top-20 p-12 bg-white rounded-lg transition-all duration-500 shadow-md right-[-100%] w-60"}`}
       linkStyles={"capitalize cursor-pointer my-4 relative transition-all"} />
      {/*icons & buttons*/}
      <div className="flexCenter">
    <div className="hidden lg:block">
      < Button
       
      type="button"
      title="Login"
      icon="/user.svg"
      variant="btn_secondary_rounded"
      
      /> 
    </div>
    {!menuOpened ? ( <IoMenu  className="lg:hidden inline-block cursor-pointer regular-24
    hover:text-secondary" onClick={toggleMenu}/>) : ( <IoClose className="lg:hidden
    inline-block cursor-pointer regular-24 hover:text-secondary" onClick={toggleMenu}/>)}
      </div>
     
    </div>
    </header>
  );
};

export default Header;
