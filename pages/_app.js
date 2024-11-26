import '../styles/globals.css'
import '../styles/general.scss'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  const YOUR_GTM_ID = 'G-FM8VDJSKVE'
  return (
    <>
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${YOUR_GTM_ID}`}
      />
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${YOUR_GTM_ID}');
          `,
        }}
      />
    </>
  )
}

export default MyApp
