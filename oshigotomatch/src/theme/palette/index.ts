import { PaletteMode } from "@mui/material";

const DefaultPalette = (mode: PaletteMode) => {
  return {
    mode: mode,
    primary: {
      main: "#149CD7",
    },
    text: {
      primary: "#333333",
    },
  };
};
export default DefaultPalette;
