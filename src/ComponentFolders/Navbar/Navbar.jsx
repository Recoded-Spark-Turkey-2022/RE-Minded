import { useState, React } from "react";
import { HiBars3 } from "react-icons/hi2";
import Image from "./Images/Logo.svg"



function NaveBar() {
   const [title, setTitle] = useState('About');
   const [showNav, setShowNav] = useState(false);

   return (
      <nav className=" md:flex justify-between sticky top-0 items-center z-20 bg-cyan-50 h-16 max-w-full  max-h-15 mt-0 text-center  md:items-center md:justify-between ">

         <div className=" flex justify-between items-center">
            <img src={Image} alt="logo" className="   h-5 w-5 mt-1 ml-9 inline " />
            <h1 className="absolute top-0 left-14  text-xl mt-5  flex  ">Healing</h1>
            <HiBars3 onClick={() => setShowNav(!showNav)} className=" md:hidden block w-10 h-10 p-2 cursor-pointer" />




            <div className=" flex justify-around text-xs absolute top-0 right-14 mt-0 ">

               <ul className={(showNav ? "right-0" : "-right-full" ) + " right-0 md:static fixed bottom-0 top-12 md:flex justify-between items-center md:bg-transparent bg-opacity-90 bg-cyan-50 md:w-auto w-10/12 md:space-y-3 p-2 transition-right"}>

                  <li className=" mx-4 my-6 md:my-0 "><a href="#Home" className=" hover:text-orange-300 duration-500 " >Home</a></li>
                  <li className=" mx-4 my-6 md:my-0 "><a href="#Blogs" className=" hover:text-orange-300 duration-500 ">Blogs</a></li>

                  <li className=" hover:text-orange-300 duration-500 mx-4 my-6 md:my-0 relative inline-block">
                     <select value={title} onChange={(e) => setTitle(e.target.value)} className="  flex w-16 h-5 bg-cyan-50">
                        <option> <a href="# about" selected value="about" >About</a></option>
                        <option> <a href="# About Us" value="about Us" >About Us</a></option>
                        <option> <a href="# Our Team" value="Our team ">Our Team</a></option>
                        <option> <a href="# Open Carees" value="Open carees">Open Carees</a></option>
                     </select></li>
                  <li className=" mx-4 my-6 md:my-0 "><a href="#Contact Us" className=" hover:text-orange-300 duration-500 ">Contact Us</a></li>
                  <li className=" mx-4 my-6 md:my-0 "><a href="#Loge In" className=" bg-cyan-400 hover:bg-cyan-500 active:bg-sky-700 focus:outline-none 
              hover:text-orange-300 rounded-md  
                grid grid-cols-1 divide-x-2px text-center w-16 h-5  my-2 duration-500 ">Log In</a></li>
               </ul>

            </div>
         </div>


      </nav>

   );
}
export default NaveBar;










