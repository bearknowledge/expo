import { Button } from '@mui/material'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Spline from "@splinetool/react-spline";
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Home() {


  return (
    <>
      <Head>
        <title>Zach Miller</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧪</text></svg>"/>
      </Head>
      <main className={styles.main}>
        
        <Spline scene="https://prod.spline.design/4zK7MtYE7amWhOH7/scene.splinecode"/>
      </main>
    </>
  )
}
