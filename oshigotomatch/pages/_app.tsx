import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Router } from "next/router";
import NProgress from "nprogress";
import { NextPage } from "next";

import themeOptions from "@/theme/ThemeOptions";
import MainLayout from "@/components/layout/MainLayout";
import "swiper/css";
import "swiper/css/pagination";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

type ExtendedAppProps = AppProps & {
  Component: NextPage;
};

export default function MyApp(props: ExtendedAppProps) {
  const { Component, pageProps } = props;
  const themeConfig = themeOptions("light");
  const theme = createTheme(themeConfig);

  const getLayout =
    Component.getLayout ?? ((page) => <MainLayout>{page}</MainLayout>);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </AppCacheProvider>
  );
}
