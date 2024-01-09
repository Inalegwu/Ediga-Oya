import presetWebFonts from "@unocss/preset-web-fonts";
import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        rubik: "Rubik",
      },
    }),
    presetIcons({
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
});
