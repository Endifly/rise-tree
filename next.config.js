const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: [
      'd-vote-prod.s3.amazonaws.com',
      'd-vote-dev.s3.amazonaws.com',
      'd-vote-dev.s3.ap-southeast-1.amazonaws.com',
      'd-vote-prod.s3.ap-southeast-1.amazonaws.com',
    ],
  },
})
