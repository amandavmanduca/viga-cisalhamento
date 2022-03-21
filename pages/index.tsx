import type { NextPage } from 'next'
import Head from 'next/head'
import { BeamCalculatorPage } from '../features/sections/BeamCalculatorPage'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Viga - Cisalhamento</title>
        <meta name="description" content="Dimensionamento ao cisalhamento em viga de concreto armado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <BeamCalculatorPage />
      </main>

      <footer className={styles.footer}>
        <p>Dimensionamento Básico ao Cisalhamento - Viga de Concreto Armado</p>
        <a
          href="https://www.linkedin.com/in/amandavmanduca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prof. Eng. Amanda Manduca
        </a>
      </footer>
    </div>
  )
}

export default Home
