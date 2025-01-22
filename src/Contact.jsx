import React, { useRef, useState } from "react";
import {  motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import './ScrollingText.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "selva krishnan",
          from_email: form.email,
          to_email: "selvakrishna20092000@gmail.com",
          message: form.message,
          option: form.option,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
            option: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  // const options = ["1", "2", "3", "4","5"];
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-trans-1 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText }>Get in touch</p>
        <h2 className="font-black text-black md:text-[70px] sm:text-[50px] xs:text-[40px] text-[30px]">
        Contact
        </h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-[#959595] font-medium mb-4' >Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-[#959595] text-[#959595] rounded-lg outline-none border-none font-medium'
              style={{border:'1px solid black', backgroundColor:'#0000'}}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#959595] font-medium mb-4' >Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-[#959595] text-[#959595] rounded-lg outline-none border-none font-medium'
              style={{border:'1px solid black', backgroundColor:'#0000'}}
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-[#959595] font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-[#959595] text-[#959595] rounded-lg outline-none border-none font-medium'
              style={{border:'1px solid black', backgroundColor:'#0000'}}
            />
          </label>
      {/* <label className='flex flex-col'>
            <span className='text-[#959595] font-medium mb-4'>Give Feedback</span>
            <div className='flex flex-col gap-2'>
              {options.map((option, index) => (
                <label key={index} className='flex items-center'>
                  <input
                    type='radio'
                    name='option'
                    value={option}
                    checked={form.option === option}
                    onChange={handleChange}
                    className='mr-2'
                  />
                  <span className='text-[#959595] font-medium'>{option}</span>
                </label>
              ))}
            </div>
          </label> */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-[#959595] font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
