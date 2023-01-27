import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import { db } from '../../Firebase';
import image4 from './Images/SubscribeArrow.svg';

const thanksProps =
  'Your email has been added to the mailing list successfully!';

function SignUp() {
  const emailList = collection(db, 'newsletter');
  const [emailArray, setArray] = useState([]);

   const form  = useRef();


  const navigate = useNavigate();

  const sendEmail = () => {

    emailjs.sendForm('service_lu1j8v5', 'template_ixxjvzh', form.current, 'da5Fk1wXTnepQQjPI')
      .then((result) => {
        // eslint-disable-next-line no-console
          console.log(result.text);
      }, (error) => {
        // eslint-disable-next-line no-console
          console.log(error.text);
      });
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

  const { t } = useTranslation();

  return (
    <div className="lg:pl-48 pl-10">
      <h2 className=" mt-10 uppercase lg:text-2xl text-lg">
        {t('blog_singup.h1')}
      </h2>
      <p className=" mt-2 text-start md:text-sm text-xs uppercase">
      {t('blog_singup.t1')}
      </p>
      <div className="md:flex">
        <div className=" mt-7 flex justify-start mb-4 w-[300px] h-[50px] box-border rounded-md border-2 border-[#718096]">
        <form ref={form} className="w-full" onSubmit={formik.handleSubmit} >
              <div>
                <input
                name='email'
                  id="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  className=" w-full h-[46.5px] rounded-l-lg text-SubTexts text-black-800 placeholder:pl-2 placeholder:text-base"
                  type="text"
                  placeholder={t('blog_singup.button')}
                />
              </div>
            </form>
          <button
          onClick={handleFormSubmit}
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
    </div>
  );
}

export default SignUp;
