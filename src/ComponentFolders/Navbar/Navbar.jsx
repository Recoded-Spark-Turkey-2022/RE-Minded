import { useState ,React  } from "react";
import Image from "./Images/Logo.svg"

 function NaveBar (){
const [title , setTitle] = useState('');

return (
     <nav  className= " items-center  bg-cyan-50 h-16 max-w-4xl ml-7 max-h-7 mt-4 text-center">
        
           <img src={Image} alt="logo" className=" h-5 w-5 mt-7 ml-2" />
           <h1 className="absolute top-5 left-14  text-xl mt-1.5">Healing</h1>
       
             <div className="absolute top-6 right-14">
             <div className="    flex justify-around text-sm">
             <a href="#Home" className=" hover:text-orange-300 mr-4 mt-2" >Home</a>
             <a href="#Blogs" className=" hover:text-orange-300 mr-2 mt-2">Blogs</a>
             <div><select value={title} onChange = { (e)=> setTitle(e.target.value) } className=" hover:text-orange-300 mr-1 mt-2 w-16 h-5">
                   <option selected value="about" >About</option>
                   <option value="about page" >About Page</option>
                   <option value="team page">Team Page</option>
                   <option value="carees page">Carees Page</option>
               </select></div>
             <a href="#Contact Us" className=" hover:text-orange-300 ml-2 mt-2">Contact Us</a>
             <a href="#Loge In" className="bg-sky-500 hover:bg-sky-600 active:bg-sky-700 focus:outline-none 
              hover:text-orange-300 ml-4 rounded-md border-solid border-2 border-sky-500 
                grid grid-cols-1 divide-x-2px text-center w-16 h-5  my-2  ">Log In</a>
             </div>   
             </div>
        
     </nav>

);
}
export default NaveBar;

             
                   
             
        
           
           
         
        

