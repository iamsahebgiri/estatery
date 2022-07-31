import "@fontsource/manrope/800.css";

import { AppProps } from "next/app";
import "~/styles/globals.css";
import { NextPageWithAuthAndLayout } from "~/utils/types";

type AppPropsWithAuthAndLayout = AppProps & {
  Component: NextPageWithAuthAndLayout;
};

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithAuthAndLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
