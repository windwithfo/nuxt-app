module.exports = {
  webpack: (config) => {
    config.entry.main = './server/index.ts';
    return config;
  }
};
