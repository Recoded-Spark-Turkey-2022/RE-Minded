import React, { useRef, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from '../../Firebase';

import image1 from './Images/FacebookLogo.svg';
import image2 from './Images/GoogleLogo.svg';
import image3 from './Images/TwitterLogo.svg';
import image4 from './Images/SubscribeArrow.svg';

const thanksProps =
  'Your email has been added to the mailing list successfully!';

function Footer() {
  const emailList = collection(db, 'newsletter');
  const form = useRef();
  const navigate = useNavigate();
  const [emailArray, setArray] = useState([]);

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_lu1j8v5',
        'template_ixxjvzh',
        form.current,
        'da5Fk1wXTnepQQjPI'
      )
      .then(
        (result) => {
          // eslint-disable-next-line no-console
          console.log(result.text);
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.log(error.text);
        }
      );
  };

  const formik = useFormik({
    initialValues: { email: '' },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Please enter a valid email')
        .required('Please enter an email'),
    }),
  });

  function handleFormSubmit() {
    if (!formik.values.email) {
      // eslint-disable-next-line no-alert
      alert('Please enter an email');
    } else if (formik.values.email) {
      if (
        formik.values.email
          .trim()
          .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      ) {
        const newArr = [];
        emailArray.map((data) => newArr.push(data.data.email));
        const result = newArr.includes(formik.values.email);
        // console.log(result)
        if (result === false) {
          sendEmail();
          addDoc(
            emailList,
            {
              email: formik.values.email,
            },
            navigate('/thankyou', { state: thanksProps })
          );
        } else {
          // eslint-disable-next-line no-alert
          alert('this email already exist');
        }
      } else {
        // eslint-disable-next-line no-alert
        alert('please enter a valid email');
      }
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(emailList);
      const dataInfo = querySnapshot.docs.map((docu) => ({
        id: docu.id,
        data: docu.data(),
      }));
      setArray(dataInfo);
    };
    fetchData();
  }, [emailArray]);

  return (
    <footer className="relative bg-Footer  bottom-0 w-full p-4 md:flex md:items-center md:justify-between md:p-6 ">
      <span className=" ml-12 text-sm ">
        <div className="lg:ml-36 ml-6 lg:md-0 flex-col gap-3 w-[500px] h-[78px] mb-4">
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

        <div className="lg:ml-36 ml-6 md:flex md:ml-0 ">
          <div className="flex flex-row mb-4 w-[300px] h-[50px] box-border rounded-lg border-2 border-[#718096]">
            <form ref={form} className="w-full" onSubmit={formik.handleSubmit}>
              <div>
                <input
                  name="email"
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className=" w-full h-[46.5px] rounded-l-lg text-SubTexts text-black-800 placeholder:pl-2 placeholder:text-base"
                  type="text"
                  placeholder="Enter your e-mail"
                />
              </div>
            </form>
            <button
              onClick={handleFormSubmit}
              type="button"
              className="bg-Buttons rounded-r-lg w-[74px] h-[47.5px]"
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
