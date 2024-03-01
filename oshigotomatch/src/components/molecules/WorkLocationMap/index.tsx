import { Link } from "@/components/atoms";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Fragment } from "react";

const WorkLocationMap = () => {
  return (
    <Fragment>
      <Box
        display={{ xs: "none", md: "flex" }}
        justifyContent="center"
        position="relative"
        height={400}
      >
        <Stack width={200} position="absolute" spacing={1} right={-20} top={30}>
          <Typography
            fontWeight={600}
            variant="h5"
            color="#5271DA"
            component={Link}
            href="#"
            sx={{ textDecorationColor: "#5271DA" }}
          >
            北海道・東北
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap">
            {["北海道", "青森", "岩手", "宮城", "山形", "福島"].map(
              (text, index) => (
                <Typography
                  key={index}
                  fontWeight={600}
                  component={Link}
                  href="#"
                  color="inherit"
                  sx={{ textDecorationColor: "inherit" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
        <Stack width={200} position="absolute" spacing={1} top={20}>
          <Typography
            fontWeight={600}
            variant="h5"
            color="#24CD69"
            component={Link}
            href="#"
            sx={{ textDecorationColor: "#24CD69" }}
          >
            中部・北陸
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap">
            {["北海道", "青森", "岩手", "秋田", "宮城", "山形", "福島"].map(
              (text, index) => (
                <Typography
                  key={index}
                  fontWeight={600}
                  component={Link}
                  href="#"
                  color="inherit"
                  sx={{ textDecorationColor: "inherit" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
        <Stack width={200} position="absolute" spacing={1} top={20} left={80}>
          <Typography
            fontWeight={600}
            variant="h5"
            color="#FDB600"
            component={Link}
            sx={{ textDecorationColor: "#FDB600" }}
            href="#"
          >
            中国・四国
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap">
            {["北海道", "青森", "岩手", "秋田", "宮城", "山形", "福島"].map(
              (text, index) => (
                <Typography
                  key={index}
                  fontWeight={600}
                  component={Link}
                  href="#"
                  color="inherit"
                  sx={{ textDecorationColor: "inherit" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
        <Stack
          width={200}
          position="absolute"
          spacing={1}
          bottom={60}
          left={20}
        >
          <Typography
            fontWeight={600}
            variant="h5"
            color="#EF5D1E"
            sx={{ textDecorationColor: "#EF5D1E" }}
            component={Link}
            href="#"
          >
            九州・沖縄
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap">
            {["北海道", "青森", "岩手", "秋田", "宮城", "山形", "福島"].map(
              (text, index) => (
                <Typography
                  key={index}
                  fontWeight={600}
                  component={Link}
                  href="#"
                  color="inherit"
                  sx={{ textDecorationColor: "inherit" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
        <Stack width={200} position="absolute" spacing={1} bottom={0}>
          <Typography
            fontWeight={600}
            variant="h5"
            sx={{ textDecorationColor: "#EF881E" }}
            color="#EF881E"
            component={Link}
            href="#"
          >
            関西
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap">
            {["北海道", "青森", "岩手", "秋田", "宮城", "山形", "福島"].map(
              (text, index) => (
                <Typography
                  key={index}
                  fontWeight={600}
                  component={Link}
                  href="#"
                  color="inherit"
                  sx={{ textDecorationColor: "inherit" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
        <Stack
          width={200}
          position="absolute"
          spacing={1}
          bottom={80}
          right={50}
        >
          <Typography
            fontWeight={600}
            variant="h5"
            sx={{ textDecorationColor: "#259E56" }}
            color="#259E56"
            component={Link}
            href="#"
          >
            関東
          </Typography>
          <Stack gap={1} direction="row" flexWrap="wrap">
            {["北海道", "青森", "岩手", "秋田", "宮城", "山形", "福島"].map(
              (text, index) => (
                <Typography
                  key={index}
                  fontWeight={600}
                  component={Link}
                  href="#"
                  color="inherit"
                  sx={{ textDecorationColor: "inherit" }}
                >
                  {text}
                </Typography>
              )
            )}
          </Stack>
        </Stack>
        <svg
          width="482"
          height="286"
          viewBox="0 0 482 286"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M482 0H378L361.33 94.5415H465.33L482 0Z" fill="#5271DA" />
          <path
            d="M433.33 94.5415H361.33L343.27 196.962H415.27L433.33 94.5415Z"
            fill="#5271DA"
          />
          <path
            d="M415.27 196.962H353.27L340.768 267.868H402.768L415.27 196.962Z"
            fill="#259E56"
          />
          <path
            d="M346.57 178.25H270.57L254.768 267.868H340.768L353.27 196.962H343.27L346.57 178.25Z"
            fill="#24CD69"
          />
          <path
            d="M270.57 178.25H201.57L182.642 285.594H251.642L270.57 178.25Z"
            fill="#EF881E"
          />
          <path
            d="M201.57 178.25H109.57L100.193 231.43H192.193L201.57 178.25Z"
            fill="#FDB600"
          />
          <path
            d="M109.57 178.25H19.5697L3.94134 266.883H93.9413L109.57 178.25Z"
            fill="#EF5D1E"
          />
          <path
            d="M181.803 239.308H98.8035L90.642 285.594H173.642L181.803 239.308Z"
            fill="#FDB600"
          />
        </svg>
      </Box>
      <Stack display={{ md: "none" }} gap={4} mx={1}>
        <Stack spacing={1}>
          <Typography fontWeight={600} variant="h5" color="#5271DA">
            北海道・東北
          </Typography>
          <Typography fontWeight={600}>
            北海道 青森 岩手 秋田 宮城 山形 福島
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography fontWeight={600} variant="h5" color="#24CD69">
            中部・北陸
          </Typography>
          <Typography fontWeight={600}>
            北海道 青森 岩手 秋田 宮城 山形 福島
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography fontWeight={600} variant="h5" color="#FDB600">
            中国・四国
          </Typography>
          <Typography fontWeight={600}>
            北海道 青森 岩手 秋田 宮城 山形 福島
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography fontWeight={600} variant="h5" color="#5271DA">
            九州・沖縄
          </Typography>
          <Typography fontWeight={600}>
            北海道 青森 岩手 秋田 宮城 山形 福島
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography fontWeight={600} variant="h5" color="#EF881E">
            関西
          </Typography>
          <Typography fontWeight={600}>
            北海道 青森 岩手 秋田 宮城 山形 福島
          </Typography>
        </Stack>
        <Stack spacing={1}>
          <Typography fontWeight={600} variant="h5" color="#259E56">
            関東
          </Typography>
          <Typography fontWeight={600}>
            北海道 青森 岩手 秋田 宮城 山形 福島
          </Typography>
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default WorkLocationMap;
