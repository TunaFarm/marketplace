import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/common/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </UserProvider>
);

export default MyApp;
