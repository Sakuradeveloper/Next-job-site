// ** MUI Theme Provider
import { PaletteMode, ThemeOptions } from "@mui/material";
import palette from "./palette";
import overrides from "./overrides";
import typography from "./typography";
import { Noto_Sans_JP } from "next/font/google";

export const roboto = Noto_Sans_JP({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const themeOptions = (mode: PaletteMode): ThemeOptions => {
  return {
    palette: palette(mode),
    components: overrides(),
    typography: {
      fontFamily: roboto.style.fontFamily,
      ...typography(),
    },
    spacing: (factor: number) => `${factor * 10}px`,
    shape: {
      borderRadius: 10,
    },
  };
};

export default themeOptions;
