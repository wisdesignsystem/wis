/// <reference types="@rsbuild/core/types" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "production" | "development";
  }
}
