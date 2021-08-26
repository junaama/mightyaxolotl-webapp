import 'tailwindcss/tailwind.css'
import Nav from "../components/Nav";
import ScrollUp from '../components/ScrollUp';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }) {
  return <><Nav/><Component {...pageProps} /><ScrollUp/><Footer/></>
}

export default MyApp
