const withOffline = require('next-offline');

const nextConfig = {
    transformManifest: manifest => ['/'].concat(manifest), // add the homepage to the cache
    workboxOpts: {
        swDest: 'static/service-worker.js',
    },
    experimental: {
        async rewrites() {
            return [
                {
                    source: '/service-worker.js',
                    destination: '/_next/static/service-worker.js',
                },
            ];
        },
    },
};

module.exports = withOffline(nextConfig);