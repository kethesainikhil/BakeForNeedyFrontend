import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { FloatingNavDemo } from "./components/FloatingDemo";

function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
      <ThemeProvider>
      <FloatingNavDemo />

      <Component {...pageProps} />
      
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
