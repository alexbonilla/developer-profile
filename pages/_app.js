import '../styles/globals.css'
import '../styles/general.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const YOUR_GTM_ID = 'G-FM8VDJSKVE'
  return (
    <>
      <Component {...pageProps} />      
    </>
  )
}

export default MyApp
