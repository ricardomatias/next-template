import { Fragment, ReactNode, useEffect } from 'react';
import Head from 'next/head';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { modalAtom } from 'state/modal';
import { PROJECT_NAME } from 'state/constants';
import { IMeta } from 'types/meta';

type Props = {
    children?: ReactNode;
    meta: IMeta[];
};

function Layout({ children, meta = [] }: Props): JSX.Element {
    const [isModalOpen, setModal] = useAtom(modalAtom);
    const router = useRouter();

    useEffect(() => {
        const handler = () => {
            setModal(false);
        };

        router.events.on('routeChangeComplete', handler);

        return () => {
            router.events.off('routeChangeComplete', handler);
        };
    }, []);

    const { title = PROJECT_NAME, description = '', url = '/' } = meta?.find((info) => info.url === router.pathname) ?? {};

    return (
        <Fragment>
            <Head>
                <title>{PROJECT_NAME}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="format-detection" content="telephone=no" />
                {/* <link rel="canonical" href="__MAIN_URL__" /> */}
                <meta name="robots" content="index, follow" />
                {/* <meta
                    name="description"
                    content="__DESCRIPTION__"
                />
                <meta property="og:title" content="Eco-Bot.Net" />
                <meta
                    property="og:description"
                    content="__DESCRIPTION__"
                /> */}
                {/* <meta property="og:image" content="__IMAGE_LINK__" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="__IMAGE_DESC__" />

                <meta property="og:locale" content="en_GB" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="__MAIN_URL__" /> */}

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
