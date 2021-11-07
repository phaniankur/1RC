import React, {useEffect} from 'react'
import Router from 'next/router';
import Box from '../Components/library/Box'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../Components/Home'
import About from '../Components/About'
import Footer from '../Components/Footer';
import logo from '../images/1RC_black.png'
export default function App() {

  // redirect user to home page
  /*useEffect(() => {
    Router.push('/home')
  }) */

  return (
    <>
    <div >
      <Head>
        <title>One Rupee Club</title>
        <meta name="description" content="One Rupee Club 2021" />
        {/* <link rel="icon" href={logo} /> */}
      </Head>
    </div>
    <Box
      bg= '#FAF9EE'
      pb='2rem'
      height= {['none','160vh']}
    >
      <Home/>
      <About/>
      <Footer/>
    </Box>
    
    </>
  )
}
