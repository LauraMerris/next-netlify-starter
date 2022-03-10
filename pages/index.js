import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
         <video id="player" class="" controls autoplay playsinline="true" muted></video>
         <button type="button" id="takePhotoButton" class="">Take photo</button>
      </main>

      <Footer />
     
    </div>
  )
}
