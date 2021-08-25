import 'tailwindcss/tailwind.css'
import Nav from "../components/Nav";
import ScrollUp from '../components/ScrollUp';
function MyApp({ Component, pageProps }) {
  return <><Nav/><Component {...pageProps} /><ScrollUp/></>
}

export default MyApp
