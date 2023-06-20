module.exports = {
  apps: [
    {
      name: "nuxtapp-mecomprs",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      args: "node",
    },
  ],
};
