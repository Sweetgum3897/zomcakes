module.exports = function override(config) {
    return {
      ...config,
      ignoreWarnings: [
        {
          module: /node_modules\/eth-rpc-errors/,
          module: /node_modules\/json-rpc-engine/,
          module: /node_modules\/@metamask/,
          module: /node_modules\/@walletconnect/,

        },
      ],
    }
  }