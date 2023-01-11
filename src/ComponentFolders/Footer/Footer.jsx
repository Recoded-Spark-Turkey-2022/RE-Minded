import React, { useState , useRef }from 'react';
import {Link, useNavigate} from 'react-router-dom';

import image1 from './Images/FacebookLogo.svg';
import image2 from './Images/GoogleLogo.svg';
import image3 from './Images/TwitterLogo.svg';
import image4 from './Images/SubscribeArrow.svg';

const thanksProps = "Your email has been added to the mailing list successfully!"

function Footer() {

const ref = useRef(null);
const [value, setValue] = useState('');
const navigate = useNavigate();

function handleChange(event) {
  setValue(event.target.value);
  }

function handleClick() {
  if (value.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
    navigate('/thankyou' , { state: thanksProps }) ;}
    else {
    alert('Please enter your e-mail for subscription!');
  }
  ref.current.value = '';
}

  return (
    <footer className="relative bg-Footer  bottom-0 w-full p-4 md:flex md:items-center md:justify-between md:p-6 ">
      <span className=" ml-12 text-sm ">
        <div className="ml-36 md:ml-0 lg:md-0 flex-col gap-3 w-[500px] h-[78px] mb-4">
          <h1 className=" text-BlackTexts text-4xl font-medium h-[44px]">
            Subscribe
          </h1>
          <p
            className="text-SubTexts mb-4 
            w-auto h-[22px] top-[56px] mt-2
            font-normal md:text-xl sm:text-sm leading-5"
          >
            We’ll never spam to you or share your email
          </p>
        </div>

        <div className="ml-36 md:flex md:ml-0 lg:ml-0">
          <div className="flex flex-wrap mb-4 w-[300px] h-[50px] box-border rounded-md border-2 border-[#718096]">
            
            <input
              ref={ref}
              onChange={handleChange}
              className=" w-3/4 h-auto rounded-l-lg text-SubTexts font-normal "
              type="email"
              placeholder="  Enter your e-mail"/>

            <button onClick={handleClick}
              type="button"
              className="bg-Buttons rounded-r-lg w-[74px] h-[46px]">
              <img
                className="w-[24px] h-[24px] top-[18px] left-[310px] items-center mx-auto"
                src={image4}
                alt="Arrow"/>
            </button>
      
          </div>
        </div>
      </span>

      <div
        className="flex flex-col items-center sm:mr-12
              
             text-SubTexts font-normal text-xl leading-5 tracking-[0.075px]"
      >
        <ul className="flex p-4 items-center sm:text-center mt-3 sm:mt-0 md:space-x-6">
          <Link to="/">
            <li>
              <a href="Home" className="mr-4 hover:underline md:mr-6 ">
                Home
              </a>
            </li>
          </Link>
          <Link to="blog">
            <li>
              <a href="Blogs" className="mr-4 hover:underline md:mr-6">
                Blogs
              </a>
            </li>
          </Link>
          <Link to="about">
            <li>
              <a href="About" className="mr-4 hover:underline md:mr-6">
                About
              </a>
            </li>
          </Link>
          <Link to="contactus">
            <li>
              <a href="Contact" className="mr-4 hover:underline md:mr-6">
                Contact
              </a>
            </li>
          </Link>
        </ul>
        <div
          className="flex flex-row w-[200px] h-[78px] 
          justify-center items-center mx-auto space-x-4"
        >
          <img
            className="cursor-pointer box-content px-2 py-2 rounded-lg hover:shadow-inner"
            src={image3}
            alt="image3"
          />
          <img
            className="cursor-pointer box-content px-2 py-2 rounded-lg hover:shadow-inner"
            src={image1}
            alt="image1"
          />
          <img
            className="cursor-pointer box-content px-2 py-2 rounded-lg hover:shadow-inner"
            src={image2}
            alt="image2"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
