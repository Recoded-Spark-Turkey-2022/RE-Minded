import React from 'react';
import image1 from './Images/FacebookLogo.svg';
import image2 from './Images/GoogleLogo.svg';
import image3 from './Images/TwitterLogo.svg';
import image4 from './Images/SubscribeArrow.svg';

function Footer() {
  return (
    <footer className=" bg-Footer  bottom-0 w-full p-4 md:flex md:items-center md:justify-between md:p-6 ">
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
              className=" w-3/4 h-auto rounded-l-lg text-SubTexts font-normal "
              type="email"
              placeholder="  Enter your e-mail"
            />
            <button
              type="button"
              className="bg-Buttons rounded-r-lg w-1/4 h-auto"
            >
              <img
                className="w-[24px] h-[24px] top-[18px] left-[310px] items-center mx-auto"
                src={image4}
                alt="Arrow"
              />
            </button>
          </div>
        </div>
      </span>

      <div
        className="flex flex-col items-center sm:mr-12
              
             text-SubTexts font-normal text-xl leading-5 tracking-[0.075px]"
      >
        <ul className="flex p-4 items-center sm:text-center mt-3 sm:mt-0 md:space-x-6">
          <li>
            <a href="Home" className="mr-4 hover:underline md:mr-6 ">
              Home
            </a>
          </li>
          <li>
            <a href="Blogs" className="mr-4 hover:underline md:mr-6">
              Blogs
            </a>
          </li>
          <li>
            <a href="About" className="mr-4 hover:underline md:mr-6">
              About
            </a>
          </li>
          <li>
            <a href="Contact" className="mr-4 hover:underline md:mr-6">
              Contact
            </a>
          </li>
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
