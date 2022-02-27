// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination:
          'https://playground-blog.super.site/',
        permanent: true,
      },
    ];
  },
})
