import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Singhnaiya</title>
        <meta name="description" content="web design


website design


website builder


web developer


web designer


webdesign

ecommerce website

web design company


website creator


website designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Smart Singhnaiya</h1>

      <Navbar />

    </div>
  )
}
