import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import { styled } from "@mui/material/styles";
import { IconButton, SvgIcon, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { PuzzleSvg } from "@/svg";
import { WorkingTypeTag } from "@/components/molecules";

const Wrapper = styled(Stack)({
  [`& .swiper`]: {
    width: "100%",
    height: "100%",
  },
});

const PostWrapper = styled(SwiperSlide)(({ theme }) => ({
  maxWidth: 250,
  [theme.breakpoints.up("md")]: {
    maxWidth: 300,
  },
}));

const ListJobAvailable = () => {
  const swiperRef = useRef<SwiperRef>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLElement | null>(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Wrapper spacing={4}>
      <Stack direction="row" spacing={1} alignItems="center">
        <SvgIcon
          color="primary"
          component={PuzzleSvg}
          inheritViewBox
          fontSize="large"
        />
        <Typography variant="h5">ピックアップ求人</Typography>
      </Stack>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        modules={[Pagination]}
        pagination={{
          el: paginationEl,
          enabled: true,
          clickable: true,
        }}
        breakpoints={{
          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <PostWrapper key={i}>
            <Stack spacing={1}>
              <Image
                src="https://picsum.photos/440/220"
                width={0}
                height={0}
                alt=""
                unoptimized
                style={{
                  width: "auto",
                  height: "auto",
                }}
              />
              <Stack direction="row" gap={1} flexWrap="wrap">
                {["fulltime", "contractual", "temporary", "parttime"].map(
                  (type, i) => (
                    <WorkingTypeTag type={type as any} key={i} />
                  )
                )}
              </Stack>
              <Typography variant="h6">
                保育士(認可保育園/託児所)/資格必須/ブランクあり
              </Typography>
              <Typography variant="body2">東京都東久留米市</Typography>
            </Stack>
          </PostWrapper>
        ))}
      </Swiper>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <IconButton onClick={goPrev}>
          <ArrowBackIosIcon />
        </IconButton>
        <div ref={(node) => setPaginationEl(node)} style={{ width: "auto" }} />
        <IconButton onClick={goNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Stack>
    </Wrapper>
  );
};

export default ListJobAvailable;
