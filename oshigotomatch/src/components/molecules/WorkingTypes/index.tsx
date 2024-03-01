import { styled } from "@mui/material/styles";
import { SvgIcon, Typography } from "@mui/material";
import { workingTypes } from "@/mockData";

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  border: `2px solid ${theme.palette.primary.main}`,
  borderWidth: "2px 0 2px 0",
  marginInline: 10,
  [theme.breakpoints.up("md")]: {
    marginInline: 0,
    borderWidth: "0 2px 0 2px",
    flexDirection: "row",
  },
}));

const Item = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "40px 30px",
  alignItems: "center",
  flexDirection: "row",
  flexGrow: 1,
  "&:not(:last-child)": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    padding: 10,
    width: 1 / 5,
    "&:not(:last-child)": {
      borderBottom: "none",
      borderRight: `2px solid ${theme.palette.primary.main}`,
    },
  },
}));

const WorkingTypes = () => {
  return (
    <Wrapper>
      {workingTypes.map((item, index) => (
        <Item key={index}>
          <SvgIcon
            inheritViewBox
            color="primary"
            component={item.image}
            sx={{ fontSize: 40 }}
          />
          <Typography color="primary" fontWeight={600} component="div">
            {item.title}
          </Typography>
          <div />
        </Item>
      ))}
    </Wrapper>
  );
};

export default WorkingTypes;
