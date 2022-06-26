import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/common/Layout";
import { AuthContextProvider } from "components/context/AuthContext";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <AuthContextProvider>
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  </AuthContextProvider>
);

export default MyApp;
