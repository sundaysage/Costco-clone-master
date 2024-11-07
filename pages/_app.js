import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HeroTwo from '../components/Hero2';
import HeroThree from '../components/Hero3';
import Navbar from '../components/Navbar/desktopNav';
import '../styles/globals.css';
import "../styles/styles.css"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />    
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
