// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import '@/styles/global.scss';
import styles from '@/styles/components/_app.module.scss';
import Header from '@/components/Header/Header';
import Content from "@/components/Layout/Content";

function Krajnak({ Component, pageProps }: AppProps) {
	return <>
		<div className={styles.mainWrapper}>
			<div className={styles.contentWrapper}>
				<Header />
				<Content>
					<Component {...pageProps} />
				</Content>
			</div>
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