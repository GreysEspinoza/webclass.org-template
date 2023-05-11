module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    // Remove i18n configuration when exporting
    delete require("./next.config").i18n;

    return defaultPathMap;
  },
};
