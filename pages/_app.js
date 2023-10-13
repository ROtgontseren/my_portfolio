import '@/styles/globals.css'
import Layout from '@/components/layout'
import Header from '@/components/Header'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Header/>
    <Component {...pageProps} />
    </>
 )
}
