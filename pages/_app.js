import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import '@rainbow-me/rainbowkit/styles.css';
import WalletConnection from "../Context/wallet";
import '@rainbow-me/rainbowkit/styles.css';

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import NFTMarketPlaceProvider from "../Context/NFTMarketPlace";
const MyApp = ({ Component, pageProps }) => (
  
  <div>
    <WalletConnection>
    <NFTMarketPlaceProvider>
    <ToastContainer/>
    <NavBar />
    <Component {...pageProps} />
    <Footer />
    </NFTMarketPlaceProvider>
    </WalletConnection>
  </div>
);

export default MyApp;
