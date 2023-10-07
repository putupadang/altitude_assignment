import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Dashboard from "../components/master/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Dashboard>
      <Component {...pageProps} />
      <ToastContainer />
    </Dashboard>
  );
}
