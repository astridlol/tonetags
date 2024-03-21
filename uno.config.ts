import {
  defineConfig,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
  presetIcons,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [presetUno(), presetScrollbar(),  presetIcons({
    scale: 1.2,
    cdn: 'https://esm.sh/'
  }),],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    fontFamily: {
      hack: "Hack",
    },
    colors: {
      uwuPink: "#f8b0c9",
      red: "#e96373",
      blue: "#9fd7ee",
      themeBlack: "#121212",
    },
  },
});
