import React, {useEffect} from 'react'
import Router from 'next/router';
import Box from '../Components/library/Box'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from '../Components/Home'
import About from '../Components/About'
import Footer from '../Components/Footer';
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
        <link rel="icon" href='https://as2.ftcdn.net/v2/jpg/01/44/08/35/500_F_144083568_gozfHGGS3Jej0YnyCnAyWfhae6byJy7q.jpg' />
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
