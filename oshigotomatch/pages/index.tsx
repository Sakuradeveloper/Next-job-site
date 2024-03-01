import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Stack from "@mui/material/Stack";

import {
  SearchJobByKeyword,
  SearchJobByOptions,
  WorkLocationMap,
} from "@/components/molecules";
import { ListJobAvailable, NewsSection } from "@/components/organisms";
import { SvgIcon, Typography } from "@mui/material";
import { BrandSvg, PuzzleSvg } from "@/svg";
import WorkingTypes from "@/components/molecules/WorkingTypes";

const Wrapper = styled("div")({
  [`& > div`]: {
    minHeight: "500px",
  },
  [`& > div:nth-of-type(odd)`]: {
    backgroundColor: "#F3FAFD",
  },
});

const BannerText = styled(Stack)(({ theme }) => ({
  position: "absolute",
  transform: "scale(0.5)",
  top: "25%",
  right: "-60px",
  [theme.breakpoints.up("md")]: {
    transform: "scale(1)",
    right: "10%",
  },
}));

export default function Home() {
  return (
    <Wrapper>
      <div>
        <Box
          maxWidth="1000px"
          margin="auto"
          height={{ md: 700 }}
          position="relative"
        >
          <Image
            src="/images/home/banner.png"
            width={0}
            height={0}
            priority
            unoptimized
            alt="banner"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          <BannerText gap={2}>
            <Typography variant="h5">あなたに合った仕事が見つかる</Typography>
            <Stack direction="row" gap={1}>
              <SvgIcon
                color="primary"
                component={PuzzleSvg}
                inheritViewBox
                sx={{
                  fontSize: 60,
                }}
              />
              <SvgIcon
                component={BrandSvg}
                inheritViewBox
                sx={{
                  width: "auto",
                  height: "auto",
                }}
              />
            </Stack>
          </BannerText>
          <Container
            maxWidth="md"
            sx={{
              display: { xs: "none", md: "block" },
              position: "absolute",
              transform: "translate(-50%, 50%)",
              top: "50%",
              left: "50%",
            }}
          >
            <SearchJobByKeyword />
          </Container>
        </Box>
        <Container maxWidth="md">
          <Stack gap={4} pb={8}>
            <Box display={{ md: "none" }}>
              <SearchJobByKeyword />
            </Box>
            <Stack direction={{ md: "row" }} gap={4}>
              {Array.from({ length: 2 }, (_, i) => (
                <Box
                  key={i}
                  width={{ xs: 1, md: 1 / 2 }}
                  position="relative"
                  height={220}
                >
                  <Image
                    src="https://picsum.photos/440/220"
                    alt=""
                    fill
                    unoptimized
                  />
                </Box>
              ))}
            </Stack>
            <ListJobAvailable />
          </Stack>
        </Container>
      </div>
      <Box py={8}>
        <Container maxWidth="md">
          <Stack gap={4}>
            <Stack gap={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <SvgIcon
                  color="primary"
                  component={PuzzleSvg}
                  inheritViewBox
                  fontSize="large"
                />
                <Typography variant="h5">勤務地から探す</Typography>
              </Stack>
              <WorkLocationMap />
            </Stack>
            <Stack gap={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <SvgIcon
                  color="primary"
                  component={PuzzleSvg}
                  inheritViewBox
                  fontSize="large"
                />
                <Typography variant="h5">雇用形態から探す</Typography>
              </Stack>
              <WorkingTypes />
            </Stack>
            <Stack gap={4}>
              <Stack direction="row" spacing={1} alignItems="center">
                <SvgIcon
                  color="primary"
                  component={PuzzleSvg}
                  inheritViewBox
                  fontSize="large"
                />
                <Typography variant="h5">絞り込んで探す</Typography>
              </Stack>

              <SearchJobByOptions />
            </Stack>
          </Stack>
        </Container>
      </Box>
      <NewsSection />
    </Wrapper>
  );
}
