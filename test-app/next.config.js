module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i, //if we see svg files
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'], //use the webpack svgr 
        });
        return config;
    },
};