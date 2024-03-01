import { FC, Fragment, PropsWithChildren } from "react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const navItems = [
  {
    path: "#",
    label: "求人を探す",
  },
  {
    path: "#",
    label: "求人一覧",
  },
  {
    path: "#",
    label: "よくある質問",
  },
  {
    path: "#",
    label: "お仕事マッチについて",
  },
  {
    path: "#",
    label: "掲載のお問い合わせ",
  },
];

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <AppBar component="nav">
        <Container disableGutters maxWidth="xl">
          <Toolbar>
            <Box flexGrow={1}>
              <Image
                src="/images/icons/brand.svg"
                height={32}
                width={200}
                alt="brand-icon"
              />
            </Box>
            <Stack display={{ xs: "none", md: "flex" }} direction="row" gap={4}>
              {navItems.map((item, index) => (
                <Button key={index} sx={{ color: "#fff" }}>
                  {item.label}
                </Button>
              ))}
            </Stack>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      {children}
      <Stack justifyContent="center" alignItems="center" spacing={4} p={4}>
        <Stack
          direction={{ md: "row" }}
          gap={{ xs: 2, md: 5 }}
          alignItems="center"
        >
          <Typography>利用規約</Typography>
          <Typography>個人情報保護方針</Typography>
          <Typography>プライバシーポリシー</Typography>
          <Typography>運営会社</Typography>
        </Stack>
        <Typography>© お仕事マッチ</Typography>
      </Stack>
    </Fragment>
  );
};

export default MainLayout;
