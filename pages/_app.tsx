import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit } from "next/font/google"
const outfit = Outfit({ subsets: ["latin"] })
// initializing font object from built-in lib

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${outfit.className}`}>
    <Component {...pageProps} />
  </main>;
}
