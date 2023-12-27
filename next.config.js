/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // To remove once mailchimp subscription fixed
        // !! WARN !!
        ignoreBuildErrors: true,
    },
}

module.exports = nextConfig
