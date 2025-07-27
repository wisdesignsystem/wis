import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { pluginWis } from "@wisdesign/wis-plugin/rsbuild";

export default defineConfig({
  server: {
    port: 4000,
  },

  plugins: [pluginBasicSsl(), pluginReact(), pluginSass(), pluginWis()],
});
