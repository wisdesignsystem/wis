import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { wisRsbuildPlugin } from "@wisdesign/wis-plugin/rsbuild";

export default defineConfig({
  server: {
    port: 3000,
  },

  html: {
    templateParameters: {
      BASE_URL: process.env.BASE_URL,
    },
    template: "./public/index.html",
  },

  plugins: [pluginReact(), pluginSass(), pluginBasicSsl(), wisRsbuildPlugin()],
});
