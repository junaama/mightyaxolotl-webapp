import '../index.css'
import Nav from "../components/Nav";
import ScrollUp from '../components/ScrollUp';
import Footer from '../components/Footer';
import {DAppProvider} from '@usedapp/core'

function MyApp({ Component, pageProps }) {
  return <DAppProvider><Nav/><hr/><Component {...pageProps} /><ScrollUp/><Footer/></DAppProvider>
}

export default MyApp
