import { Button } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Spline from "@splinetool/react-spline";
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import { ToastContainer, toast } from 'react-nextjs-toast'
import { AttentionSeeker, Slide } from "react-awesome-reveal";

export default function Home() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_in7y71z', 'template_aub9uud', form.current, 'vebAbVX4crJiF2xy9')
      .then((result) => {
        console.log(result.text);
        console.log('message sent!');
        toast.notify(`Message Sent!`, {type: "success"})
        form.current.reset();
        
      }, (error) => {
          console.log(error.text);
          console.log('failed to send');
          toast.notify(`Message Sent!`, {type: "error"})
          form.current.reset();
      });
  };



  return (
    <>
      <Head>
        <title>M3 Labs</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>"/>
      </Head>
      <main className={styles.main}>
        
        <Spline scene="https://prod.spline.design/4zK7MtYE7amWhOH7/scene.splinecode"/>
      </main>
    </>
  )
}
