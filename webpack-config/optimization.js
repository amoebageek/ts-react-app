module.exports = {
    splitChunks: {
        cacheGroups: {
            default: false,
            vendor: {
                chunks: "all",
                test: "/node_modules/"
            }
        }
    }
};
