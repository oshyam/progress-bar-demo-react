import '../styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
function MyApp({ Component, pageProps }) {
  return( 
    <>
<NextNProgress  
color="#03C6C7"
height={3}
startPosition={0.3}
stopDelayMs={200}
showOnShallow={true} />
<Component {...pageProps} />
    </>
  )}

export default MyApp
