import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Appbar from "./appbar";
import { RecoilRoot } from "recoil";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <RecoilRoot>
        <Appbar />
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )
}
