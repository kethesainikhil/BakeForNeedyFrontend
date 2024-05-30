import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { FloatingNavDemo } from "../components/FloatingDemo";
import Footer from "../components/Footer"
import { Analytics } from "@vercel/analytics/react"
function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
      <ThemeProvider>
      <FloatingNavDemo />

      <Component {...pageProps} />
      <Footer />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
