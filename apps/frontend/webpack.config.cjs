const path = require("path");

module.exports = {
  entry: "./app/app.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/, // Esta regra irá lidar com arquivos .ts e .tsx
        exclude: /node_modules/,
        use: {
          loader: "ts-loader", // Use o loader ts-loader para processar arquivos TypeScript
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Adicione .tsx para resolver arquivos TypeScript
    alias: {
      "@": path.resolve(__dirname, "app"),
    },
  },
  mode: "development",
};
