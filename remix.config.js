/**
 * @type {import('@remix-run/dev').AppConfig}
 */
require('dotenv').config();
module.exports = {
  serverBuildTarget: "netlify",
  server: './server.js',
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
