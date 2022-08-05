import { Button } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tilt from 'react-tilt'
import Carousel from 'react-material-ui-carousel'
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
        <title>M Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.greeting}>
          <h1 className={styles.title}>
            Hi, my name is <a href='https://www.linkedin.com/in/zachary-miller-mu/' style={{color:'#a3cd3b'}}>Zach Miller</a>
          </h1>

          <p className={styles.description}>
            I am a front-end developer
          </p>
          <div className={styles.call2action}>
          <a href='#contact'><Button sx={{backgroundColor:'#a3cd3b',  color:'black', width:'150px', height:'50px', fontSize:'18px'}}>Hire me!</Button></a>
          <a href='#portfolio'><Button sx={{backgroundColor:'black', color:'#a3cd3b', width:'150px', height:'50px', marginLeft:'2rem', fontSize:'18px'}}>Portfolio</Button></a>
          </div>
          </div>
          <img className={styles.profile} src='/profile.png'/>

          

        </div>
        <div className={styles.panel2}>
          <div className ={styles.greeting}>
          <h1 className={styles.title}>
            My Stack of Choice
          </h1>
          </div>
          <Slide left>
          <div className={styles.hero4}>
          <Tilt options={{scale:1}}>
          <div className={styles.card}>
            <img src='/nextjs.svg' className={styles.cardimg1}/>
          </div>
          </Tilt>

          <Tilt options={{scale:1}}>
          <div className={styles.card}>
            <img src='/materialui.svg' className={styles.cardimg2}/>
          </div>
          </Tilt>

          <Tilt options={{scale:1}}>
          <div className={styles.card}>
            <img src='/tailwindcss.svg' className={styles.cardimg3}/>
          </div>
         </Tilt>
          </div>
          </Slide>
        </div>

{/* 
        <div className={styles.panel3}>
        <div className ={styles.greeting}>
          <h1 className={styles.title}>
            About Me
          </h1>
        </div>

          <ul className={styles.hero2}>
              <li>
                I am in constant search for life lessons and spiritual development
              </li>
              <li>
                I played D1 baseball at both West Virginia University, and Mercer University
              </li>
              <li>
                I have spent extensive time researching consumer psychology to build products around sound business models that capture and hold users
              </li>
          </ul>
        </div> */}

<div className={styles.hero2}>
          <div className={styles.greeting}>
          <h1 className={styles.title2}>
           About Me
          </h1>
         <div className={styles.container3}>
          {/* <Slide direction='left'> */}
          <img className={styles.cowboy} src='/cowboyz.png'/>
          {/* </Slide> */}
          <Slide direction='right'>
          <div className={styles.container2}>
          <div className={styles.focus}>
            <h1>My Mission</h1>
            <p>To inspire everyone to utilize techonolgy and software for fun, beneficial experiences.</p>
          </div>
          <ul className={styles.list1}>
          <h1 className={styles.textStyle}>Past Life</h1>
              <li>
                Prior to development I held multiple roles as a marketer. As a result, I have spent extensive time researching consumer psychology to build products around sound business models that capture and hold users
              </li>
          </ul>
          
          <div className={styles.focus2}>
            <ul className={styles.list2}>
            <h1 className={styles.textStyle1}>Goals</h1>
              <li>
              Learn everyday in all aspects
              </li>
              &nbsp;
              <li>
              Create innovative products that scale
              </li>
              &nbsp;
              <li>
              Better my web3 skillset
              </li>
            </ul>
          </div>
          </div>
          </Slide>
          </div>
        </div>
        {/* <div className={styles.container2}>
        <div className={styles.focus3}>
            <h1>Why Me?</h1>
            <p>I have insight on consumer needs that has been formed through countless hours of product testing and intuitive clues unseen by most. I leverage this to help create compelling products.</p>
        </div>
        <div className={styles.focus4}>
            <h1>My Mission</h1>
            <p>To inspire everyone to utilize techonolgy and software for fun, beneficial experiences.</p>
          </div>

        </div> */}
        </div>
       

        <div  className={styles.panel5}>
        <div id='portfolio' className={styles.container1}>
            <span className={styles.panel5title}> Portfolio</span>
            <Carousel className={styles.carouselmb}>
            <a  href='https://voltage.finance/'><img className={styles.portfolio} src='/voltage.png'/> </a>
            <a  href='https://truestan.herokuapp.com/'><img className={styles.portfolio} src='/truestan.png'/></a>
            <img className={styles.portfolio} src='/odin.png'/>
            </Carousel>
            
        </div>
      </div>




      {/* <div className={styles.panel4}>
        <div className={styles.container1}>
            <span className={styles.firsttext}> Projects I Love:</span>&nbsp;
            <span className={styles.sectext}>Freelance</span>
        </div>
      </div> */}
      <AttentionSeeker>
      <div id='contact' className={styles.panel6}>
      <ToastContainer align={"right"} />
        <h1 className={styles.title2}>Send me a message!</h1>
      <form className={styles.contact} ref={form} onSubmit={sendEmail}>
      <label className={styles.formlabel} >Your Name</label>
      <input className={styles.forminput} type="text" name="user_name" />
      <label className={styles.formlabel}>Email</label>
      <input className={styles.forminput} type="email" name="user_email" />
      <label className={styles.formlabel}>Message</label>
      <textarea className={styles.forminput2} name="message" />
      <div className={styles.buttonalign}>
      <Button type="submit" sx={{backgroundColor:'#a3cd3b',  color:'white', width:'150px', height:'50px', fontSize:'18px', marginTop:'1.5rem', fontWeight:'800'}}>Send</Button>
      </div>
    </form>
    </div>
    </AttentionSeeker>
      </main>
    </div>
    </>
  )
}