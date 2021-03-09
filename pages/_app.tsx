// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import Head from "next/head";
import '@/styles/global.scss';
import styles from '@/styles/components/_app.module.scss';
import Header from '@/components/Header/Header';
import Content from "@/components/Layout/Content";

function Krajnak({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<meta name="description" content="Jiří Krajňák, Prague-based (JavaScript) web developer with over 12 years of professional experience available for work."/>
			<link rel="preload" href="/fonts/roboto-v20-latin-ext_latin-700.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/roboto-v20-latin-ext_latin-300.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-100.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-100.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-200.woff2" as="font" type="font/woff2" crossOrigin="" />
			<link rel="preload" href="/fonts/kanit-v7-latin-ext_latin-regular.woff2" as="font" type="font/woff2" crossOrigin="" />
		</Head>

		<div className={styles.mainWrapper}>
			<div className={styles.contentWrapper}>
				<Header />

				<Content>
					<Component {...pageProps} />
				</Content>
			</div>

			<div id="modal-root" />
		</div>
	</>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }
export default Krajnak