import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiButton from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { posts } from "@/mockData";
import { Post } from "@/components/molecules";
import { PuzzleSvg } from "@/svg";
import { SvgIcon } from "@mui/material";

const Icon = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 36,
  height: 36,
  borderRadius: 8,
  backgroundColor: theme.palette.primary.main,
  [`& svg`]: {
    color: "#fff",
  },
  [theme.breakpoints.up("md")]: {
    width: 46,
    height: 46,
  },
}));

const Button = styled(MuiButton)(({ theme }) => ({
  display: "block",
  margin: "auto",
  padding: "10px 30px",
  fontSize: 20,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: 400,
  },
}));

const HeadIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="301"
    height="48"
    viewBox="0 0 301 48"
    fill="none"
  >
    <path
      d="M0 10.3719H23.2128V25.3723L11.0803 31.0169L7.52622 23.1851H0L11.2684 48H18.7946L13.9374 37.3035L29.631 30.0009V3.87359H0V10.3719Z"
      fill="#EF881E"
    />
    <path
      d="M65.8056 33.8745L51.8264 40.3798V48L72.2238 38.503V17.9991H65.8056V33.8745Z"
      fill="#EF881E"
    />
    <path
      d="M85.1926 12.5027L102.085 9.0807V20.7508H85.1926V27.2492H100.029L90.6073 48H98.1335L107.555 27.2492H114.824V20.7508H108.503V7.77539L114.824 6.49831V0L85.1926 5.99735V12.5027Z"
      fill="#EF881E"
    />
    <path
      d="M49.5058 17.9991H42.5928V30.0009H49.5058V17.9991Z"
      fill="#EF881E"
    />
    <path
      d="M60.8648 17.9991H53.9518V30.0009H60.8648V17.9991Z"
      fill="#EF881E"
    />
    <path d="M292.115 0H285.202V12.0018H292.115V0Z" fill="#EF881E" />
    <path d="M301 0H294.087V12.0018H301V0Z" fill="#EF881E" />
    <path
      d="M235.083 41.5017H220.497V24.8149L231.766 0H224.247L212.978 24.8149V48H242.609V24.8149H235.083V41.5017Z"
      fill="#EF881E"
    />
    <path d="M188.406 18.5495H181.988V48H188.406V18.5495Z" fill="#EF881E" />
    <path
      d="M170.378 16.3763L200.009 10.3719V3.87359L170.378 9.878V16.3763Z"
      fill="#EF881E"
    />
    <path
      d="M272.979 23.0722L283.599 0H255.571V6.49831H273.083L253.968 48H261.494L269.78 30.015L277.892 47.8871H285.418L274.15 23.0722H272.979Z"
      fill="#EF881E"
    />
    <path
      d="M146.58 0H139.054L127.785 24.8149H135.312L141.869 10.3719H149.89V23.1851L147.005 29.5352L137.012 24.8855V32.5057L144.148 35.8289L138.622 48H146.148L150.364 38.7147L157.416 42.0026V34.3825L153.221 32.428L157.416 23.1851V3.87359H144.817L146.58 0Z"
      fill="#EF881E"
    />
  </svg>
);

const NewsSection = () => {
  return (
    <Box py={8}>
      <Container maxWidth="md" sx={{ px: { xs: 0, md: 3 } }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
          alignItems="center"
          mb={6}
        >
          <HeadIcon />
          <Typography variant="h6">お仕事探しに役立つ情報マガジン</Typography>
        </Stack>
        <Stack gap={8}>
          <Stack gap={4}>
            {posts.map((post, i) => (
              <Post {...post} key={i} />
            ))}
            <Box marginX={{ xs: 4, md: 0 }}>
              <Button variant="contained">マッチタイムズをもっと見る</Button>
            </Box>
          </Stack>
          <Box sx={{ px: { xs: 2, md: 0 } }}>
            <Paper sx={{ p: { xs: 2, md: 4 } }} elevation={0}>
              <Stack gap={4}>
                <div>
                  <Typography variant="h5">お知らせ</Typography>
                  <List>
                    {Array.from({ length: 5 }, (_, i) => (
                      <ListItem
                        disableGutters
                        key={i}
                        sx={{
                          borderTop: "1px solid #B1B1B1",
                          "&:last-of-type": {
                            borderBottom: "1px solid #B1B1B1",
                          },
                        }}
                      >
                        <ListItemIcon>
                          <Icon>
                            <SvgIcon
                              component={PuzzleSvg}
                              inheritViewBox
                              fontSize="large"
                              sx={{ fontSize: { xs: 24, md: 28 } }}
                            />
                          </Icon>
                        </ListItemIcon>
                        <ListItemText
                          primary="WEBサイトリニューアルし直しました"
                          secondary="2024/6/1"
                        />
                      </ListItem>
                    ))}
                  </List>
                </div>
                <Button variant="contained">お知らせをもっと見る</Button>
              </Stack>
            </Paper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsSection;
