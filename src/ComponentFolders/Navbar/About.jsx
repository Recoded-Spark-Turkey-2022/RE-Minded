import { Link } from 'react-router-dom';
import { AiFillCaretDown } from "react-icons/ai";
import "./styl.css"




const About = () => {
    
    return (
        <div>
            <div className="dropdown">
                <div className=' flex '>
                <button type='button'>About</button><AiFillCaretDown className=' mt-1 ml-2'/>
                </div>
                <div className="dropdown-content">
                    <Link to="/About">
                        <a href="About">About</a>
                    </Link>
                    <Link to="/Team">
                        <a href="Team">Team</a>
                    </Link>
                    <Link to="/careers">
                        <a href="careers">Careers</a>
                    </Link>
                </div>
            </div>
        </div>
    )

}



export default About;








