import '../index.css'
import Nav from "../components/Nav";
import ScrollUp from '../components/ScrollUp';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return <><Nav/><hr/><Component {...pageProps} /><ScrollUp/><Footer/></>
}

export default MyApp
