/* eslint-disable @typescript-eslint/no-var-requires */
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: process.env.ANALYZE === 'true',
// });

module.exports = (phase, { defaultConfig }) => {
    // if (phase === PHASE_DEVELOPMENT_SERVER) {
    //     return withTM({
    //         productionBrowserSourceMaps: false,
    //         reactStrictMode: true,
    //     });
    // }

    return {
        ...defaultConfig,
        productionBrowserSourceMaps: false,
        reactStrictMode: true,
        images: {
            domains: ['localhost'],
        },
    };
};
