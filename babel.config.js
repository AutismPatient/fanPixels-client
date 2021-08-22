let plugins = []

// 生产环境 去除console.log的打印
if (process.env["NODE_ENV"] === "production") {
  plugins.push("transform-remove-console")
}

module.exports = {
  presets: [
    [
      "@vue/app",
      {
      useBuiltIns: false
      }
    ]
  ],
  plugins: plugins,
}
