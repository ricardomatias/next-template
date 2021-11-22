import type { AppProps } from 'next/app';
import { useLayoutEffect } from 'react';
import Layout from '../components/layout';
import { IsMobileProvider } from 'hooks/useIsMobile';
import '../styles/globals.css';

function Ecobot({ Component, pageProps = {} }: AppProps) {
    useLayoutEffect(() => {
        console.log('%c DEVELOPMENT BY RICARDOMATIAS.NET', 'background: #000; color: #0f0');
    }, []);

    return (
        <Layout>
            <IsMobileProvider value={pageProps.isMobile || false}>
                <Component {...pageProps} />
            </IsMobileProvider>
        </Layout>
    );
}

export default Ecobot;
