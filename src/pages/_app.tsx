import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LayoutGOAT from "../components/LayoutGOAT";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutGOAT>
      <Component {...pageProps} />
    </LayoutGOAT>
  );
}
