import { Link } from 'react-router-dom';
import { AiFillCaretDown } from "react-icons/ai";
import "./styl.css"
import { useTranslation } from 'react-i18next';




const About = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="dropdown">
                <div className=' flex '>
                <button type='button'>{t('navbar.about')}</button><AiFillCaretDown className=' mt-1 ml-2'/>
                </div>
                <div className="dropdown-content">
                    <Link to="/About">
                        <a href="About">{t('about_dropdown.about')}</a>
                    </Link>
                    <Link to="/Team">
                        <a href="Team">{t('about_dropdown.team')}</a>
                    </Link>
                    <Link to="/careers">
                        <a href="careers">{t('about_dropdown.careers')}</a>
                    </Link>
                </div>
            </div>
        </div>
    )

}



export default About;



