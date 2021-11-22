import { Fragment, ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { useRouter } from 'next/router';

type Props = {
    children?: ReactNode;
};

function Layout({ children }: Props): JSX.Element {
    // TODO Change this. Use some kind of global state like Jotai.
    const [isModalOpen, setModal] = useState(false);
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeStart', () => {
            setModal(false);
        });
    }, []);

    const PROJECT = 'UNKNOWN';

    return (
        <Fragment>
            <Head>
                <title>{PROJECT}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="format-detection" content="telephone=no" />
                {/* <link rel="canonical" href="https://eco-bot.net" /> */}
                <meta name="robots" content="index, follow" />
                {/* <meta
                    name="description"
                    content="Eco-Bot.Net: Exposing Corporate Greenwashing & Climate Change Disinformation on Social Media During COP26"
                />
                <meta property="og:title" content="Eco-Bot.Net" />
                <meta
                    property="og:description"
                    content="Eco-Bot.Net: Exposing Corporate Greenwashing & Climate Change Disinformation on Social Media During COP26"
                /> */}
                {/* <meta property="og:image" content="https://eco-bot.net/images/eco-bot.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Eco-Bot.Net" />

                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://eco-bot.net" /> */}

                {/* <meta name="twitter:card" content="summary_large_image" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
                <link rel="manifest" href="/images/site.webmanifest" />
                <link rel="mask-icon" href="/images/safari-pinned-tab.svg" color="#00ff00" />
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-config" content="/images/browserconfig.xml" />
                <meta name="theme-color" content="#000000" /> */}

                {/* <link rel="preload" href="/fonts/Simplon/SimplonMono-Light-WebXL.woff" as="font" />
                <link rel="preload" href="/fonts/Simplon/SimplonMono-Regular-WebXL.woff" as="font" /> */}
            </Head>
            <div
                className={clsx(
                    'font-sans font-body bg-black text-white min-h-screen flex flex-col items-stretch justify-between'
                )}
            >
                <div
                    id="container"
                    className={clsx(
                        'mx-auto 2xl:container relative w-full h-full flex-1 flex items-stretch flex-col',
                        isModalOpen && 'overflow-hidden'
                    )}
                >
                    {children}
                </div>
                <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-40">
                    <div id="modal" className={clsx('w-full h-full relative', isModalOpen && 'pointer-events-auto')}></div>
                </div>
            </div>
        </Fragment>
    );
}

export default Layout;
