import MuiChip, { chipClasses } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const Chip = styled(MuiChip)({
  borderRadius: 0,
  background: "#727272",
  color: "white",
  [`& .${chipClasses.label}`]: {
    fontWeight: 600,
    fontSize: "1rem",
  },
});

export default Chip;
