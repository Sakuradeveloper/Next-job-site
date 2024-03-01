import Container from "@mui/material/Container";
import { Box, Button, Grid, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

import { SearchJobByKeyword } from "@/components/molecules";
import { ListJobAvailable, NewsSection } from "@/components/organisms";

import { SvgIcon, Typography } from "@mui/material";
import Icon from "@mui/material/Icon";
import { BrandSvg, PuzzleSvg } from "@/svg";
import { WorkingTypeTag } from "@/components/molecules";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import {
  ComponentDescripton,
  WorkingDescription,
} from "@/components/molecules/WorkingTypeTag";

const Wrapper = styled("div")({
  [`& > div`]: {
    minHeight: "500px",
    paddingBottom: "30px",
  },
  [`& .text-large`]: {
    fontSize: "2.25em",
  },
  [`& .text-md`]: {
    fontSize: "1.75em",
  },
  [`& .text-sm`]: {
    fontSize: "1.25em",
  },
  [`& .question:first-letter`]: {
    color: "#149CD7",
  },
  [`& .answer:first-letter`]: {
    color: "red",
  },
  [`& > div:nth-of-type(odd)`]: {
    backgroundColor: "#F3FAFD",
  },
});

const BannerText = styled(Stack)(({ theme }) => ({
  position: "absolute",
  transform: "scale(0.5",
  top: "25%",
  right: "-60px",
  [theme.breakpoints.up("md")]: {
    trnsform: "scale(1)",
    right: "10%",
  },
}));

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Test() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/about"
      onClick={handleClick}
    >
      About
    </Link>,
    <Typography key="3" color="text.primary">
      test
    </Typography>,
  ];
  return (
    <Wrapper>
      <div>
        <Box maxWidth="1000px" margin="auto" position="relative">
          <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          {/* <Divid orientation="vertical" flexItem /> */}
        </Box>
        <Box
          margin="auto"
          position="relative"
          maxWidth="1000px"
          sx={{
            paddingY: "17px",
            paddingX: "35px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "62px",
          }}
        >
          {/* <Container
            maxWidth="xl"
            sx={{
              backgroundColor: "white",
              paddingX: "35px",
              paddingY: "17px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          > */}
          {/* <Box flexGrow={1}> */}
          <Image
            src="/images/home/banner.png"
            height={0}
            width={0}
            alt="image"
            style={{ width: "100%", height: "auto" }}
          />
          {/* </Box> */}
          <Typography
            className="text-large"
            sx={{
              paddingTop: "22px",
              fontSize: "2.25em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            ツクイ杉並下井草サービスステーション（訪問介護）
            <br />
            【2023年04月01日オープン】のケアクルー <br />
            （介護職/ヘルパー）求人（パート・バイト）
          </Typography>
          <Box
            sx={{
              paddingY: "31px",
            }}
          >
            <Typography
              className="text-md"
              sx={{
                backgroundColor: "#f5f6cf",
                paddingY: "17px",
                paddingX: "55px",
                borderRadius: "15px",
                marginBottom: "17px",
                borderStyle: "solid",
                borderColor: "#ccc",
                borderWidth: "1px",
              }}
            >
              勤続支援金 パート・バイト：2,000円 〜 7,000円
            </Typography>
            <Typography
              sx={{
                backgroundColor: "#f5f6cf",
                paddingY: "17px",
                paddingX: "55px",
                fontSize: "1.75em",
                borderRadius: "15px",
                textAlign: "center",
                borderStyle: "solid",
                borderColor: "#ccc",
                borderWidth: "1px",
              }}
            >
              時給　１，３７０円～１，８１０円
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              paddingX: "20px",
              paddingBottom: "80px",
            }}
          >
            <Button
              sx={{
                width: "391px",
                height: "156px",
                backgroundColor: "white",
                borderRadius: "30px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#ccc",
                fontSize: "2.25em",
                boxShadow: "inset 0px -10px #9e9b9c",
              }}
            >
              ★キープする
            </Button>

            <Button
              sx={{
                width: "391px",
                height: "156px",
                backgroundColor: "#feafaf",
                borderRadius: "30px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#ccc",
                fontSize: "2.25em",
                boxShadow: "inset 0px -10px #9d6a6b",
                textShadow:
                  "2px 2px 2px #f05b55, -2px -2px 2px #f05b55, 2px -2px 0 #f05b55, -2px 2px 0 #f05b55",
                color: "white",
              }}
            >
              応募画面へ進む
              {/* <Typography>応募画面へ進む</Typography> */}
            </Button>
          </Box>
          {/* </Container> */}
        </Box>
        <Box
          margin="auto"
          maxWidth="1000px"
          sx={{
            paddingY: "17px",
            paddingX: "35px",
            backgroundColor: "white",
            paddingBottom: "35px",
            marginBottom: "62px",
          }}
        >
          <Box>
            <Link href="#" underline="none" fontSize="1.75em">
              【杉並区下井草】4/1オープンの事業所にて訪問介護ヘルパー（ホーム
              ヘルパー）募集中！福利厚生充実・様々な働き方を推進中です♪
            </Link>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/icons/check.png"
                width={0}
                height={0}
                priority
                unoptimized
                alt="check"
                style={{
                  width:
                    "45px                                                                                                                                                  ",
                  height: "auto",
                  paddingRight: "10px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1.5em",
                }}
              >
                株式会社ツクイを紹介します
              </Typography>
            </Box>
            <Box fontSize={"1.25em"}>
              <ul>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
              </ul>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/icons/check.png"
                width={0}
                height={0}
                priority
                unoptimized
                alt="check"
                style={{
                  width:
                    "45px                                                                                                                                                  ",
                  height: "auto",
                  paddingRight: "10px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1.75em",
                }}
              >
                株式会社ツクイを紹介します
              </Typography>
            </Box>
            <Box fontSize={"1.25em"}>
              <ul>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
                <li>
                  横浜市内に本社を置き、日本全国に支社がある当社は、訪問入浴・訪問介護・通所介護といったさまざ
                  　まな介護サービスを展開してい
                </li>
              </ul>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5em",
              }}
            >
              株式会社ツクイを紹介します
            </Typography>
          </Box>
        </Box>
        <Box
          margin="auto"
          maxWidth={"1000px"}
          sx={{
            paddingY: "17px",
            paddingX: "35px",
            backgroundColor: "white",
            marginBottom: "62px",
          }}
        >
          <Stack gap={1}>
            <Stack direction="row" spacing={1} alignItems="center">
              <SvgIcon
                color="primary"
                component={PuzzleSvg}
                inheritViewBox
                fontSize="large"
              />
              <Typography variant="h5" fontSize={"2.25em"}>
                募集内容
              </Typography>
            </Stack>
            <Divider
              sx={{
                ml: 2,
                borderBottomWidth: 3,
                borderColor: "black",
              }}
            />
            <Typography
              variant="h6"
              sx={{ marginLeft: "45px" }}
              fontSize={"1.75em"}
            >
              募集職種
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginLeft: "45px", fontSize: "1.5em", color: "#CCC" }}
            >
              ケアクルー（介護職/ヘルパー）
            </Typography>
            <Box>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Typography
                variant="h6"
                sx={{ marginLeft: "45px", fontSize: "1.75em" }}
              >
                仕事内容
              </Typography>
              <Box marginLeft={"60px"} fontSize={"1.25em"}>
                <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                  {["physical", "living", "open", "open3"].map((type, i) => (
                    <WorkingDescription type={type as any} key={i} />
                  ))}
                </Stack>
                <Typography fontSize={"1em"}>【お仕事の詳細】</Typography>
                <ul style={{ margin: "0", paddingInlineStart: "20px" }}>
                  <li>
                    お客様のご自宅へ訪問し、日常生活や自立支援のための各種サポート業務
                  </li>
                  <li>食事介助、排せつ介助、衣類の着脱等の身体介護</li>
                  <li>洗濯、お部屋の掃除等の生活援助</li>
                  <li>各種記録業務　など</li>
                </ul>
                <Box paddingY={"20px"}>
                  <Typography fontSize={"1em"}>◆ある一日の流れ◆</Typography>
                  <Box paddingLeft={"20px"} fontSize={"1em"}>
                    <Typography fontSize={"1em"}>　08:30 出勤</Typography>
                    <Typography fontSize={"1em"}>
                      　　　　　準備後、訪問介護へ出発
                    </Typography>
                    <Typography fontSize={"1em"}>↓</Typography>
                    <Typography fontSize={"1em"}>
                      　09:00 訪問介護1件目
                    </Typography>
                    <Typography fontSize={"1em"}>　　↓</Typography>
                    <Typography fontSize={"1em"}>
                      　10:30 訪問介護2件目
                    </Typography>
                    <Typography fontSize={"1em"}>　　↓</Typography>
                    <Typography fontSize={"1em"}>　12:00 昼食</Typography>
                    <Typography fontSize={"1em"}>　　↓</Typography>
                    <Typography fontSize={"1em"}>
                      　13:30 訪問介護3件目
                    </Typography>
                    <Typography fontSize={"1em"}>　　↓</Typography>
                    <Typography fontSize={"1em"}>
                      　15:00 訪問介護4件目
                    </Typography>
                    <Typography fontSize={"1em"}>　　↓</Typography>
                    <Typography fontSize={"1em"}>　08:30 出勤</Typography>
                    <Typography fontSize={"1em"}>
                      　　　　　サービス提供責任者、所長へ本日の報告、翌日の準備
                    </Typography>
                    <Typography>↓</Typography>
                    <Typography fontSize={"1em"}>　17:30 退勤</Typography>
                  </Box>
                </Box>
                <Typography paddingBottom={"20px"} fontSize={"1em"}>
                  訪問介護とは・・・お客様が住み慣れたご自宅で自立した日常生活を送れるように
                  <br />
                  生活を支援するサービスです。
                  <br />
                  ※雇用期間6ヶ月
                  <br />
                  ※契約更新あり（条件あり）
                </Typography>
              </Box>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Typography
                variant="h6"
                sx={{ marginLeft: "45px", fontSize: "1.75em" }}
              >
                診療科目・サービス形態
              </Typography>
              <Stack
                direction={"row"}
                gap={1}
                flexWrap={"wrap"}
                ml={"45px"}
                paddingBottom={"10px"}
              >
                <ComponentDescripton type="visiting" label="訪問介護" />
              </Stack>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Typography
                variant="h6"
                sx={{ marginLeft: "45px", fontSize: "1.75em" }}
              >
                給与
              </Typography>
              <Typography
                variant="h6"
                sx={{ marginLeft: "55px", fontSize: "1.5em" }}
              >
                【パート・バイト】 時給 1,370円 〜 1,810円
              </Typography>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Typography
                variant="h6"
                sx={{ marginLeft: "45px", fontSize: "1.75em" }}
              >
                給与の備考
              </Typography>
              <Typography
                sx={{ marginLeft: "45px" }}
                paddingBottom={"20px"}
                fontSize={"1.25em"}
              >
                ★土日祝日1時間あたり100円アップ！
                <br />
                ※資格、経験により考慮
                <br />
                （その他の手当）
                <br />
                ※ひとり親手当：10,000円（月間勤務時間50時間以上の方）
                <br />
                ※試用期間3～4ヶ月（条件変更なし）
                <br />
                身体介護手当：500円／時間
                <br />
                早朝夜間深夜手当（06:00～07:59／18:00～05:59）：300円／時間
                <br />
                ※深夜割増は別途支給
                <br />
              </Typography>
            </Box>
            <Box>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Box paddingLeft={"45px"}>
                <Typography variant="h6" fontSize={"1.75em"}>
                  待遇
                </Typography>
                <Box paddingLeft={"10px"}>
                  <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                    {["physical", "living", "open", "open3"].map((type, i) => (
                      <WorkingDescription type={type as any} key={i} />
                    ))}
                  </Stack>
                  <ul
                    style={{
                      margin: "0",
                      paddingInlineStart: "20px",
                      fontSize: "1.25em",
                    }}
                  >
                    <li>
                      雇用保険、労災保険、健康保険、厚生年金（労働条件により異なる）
                    </li>
                    <li>正社員登用制度あり</li>
                    <li>産前産後休暇</li>
                    <li>育児・介護休業取得実績あり</li>
                    <li>慶弔金制度あり</li>
                    <li>副業・Wワーク可（社内規定有）</li>
                  </ul>
                  <Box paddingY={"20px"} fontSize={"1.25em"}>
                    <Typography>＜ステップアップへのサポート＞</Typography>
                    <ul style={{ margin: "0", paddingInlineStart: "20px" }}>
                      <li>資格取得奨励金10,000円～30,000円※規定あり</li>
                      <li>受験対策支援制度</li>
                      <li>通信教育サポート</li>
                      <li>キャリアアップ支援制度</li>
                      <li>キャリアパス制度</li>
                    </ul>
                  </Box>
                  <Box>
                    <Typography fontSize={"1.25em"}>
                      ◎初回契約後は１年以内毎の契約です。 初回契約後は、
                      <br />
                      ・昇給あり（年1回・昨年度実績0～30円）
                      <br />
                      ・特別手当あり（年2回・6,000～160,000円）
                      <br />
                      業績による支給あり。
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Box paddingLeft={"45px"}>
                <Typography variant="h6" fontSize={"1.75em"}>
                  待遇
                </Typography>
                <Box paddingLeft={"10px"}>
                  <Typography fontSize={"1.25em"}>
                    資格取得支援 研修制度あり
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Box paddingLeft={"45px"}>
                <Typography variant="h6" fontSize={"1.75em"}>
                  勤務時間
                </Typography>
                <Box paddingLeft={"10px"}>
                  <Typography fontSize={"1.25em"}>
                    (1)08:30～17:30の間の1時間以上
                    <br />
                    ※勤務時間応相談
                    <br />
                    ※休憩時間は法定通り（6時間以上45分、8時間以上60分）
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box>
              <Divider
                sx={{
                  ml: 2,
                  borderBottomWidth: 3,
                  borderColor: "black",
                }}
              />
              <Box paddingLeft={"45px"}>
                <Typography variant="h6" fontSize={"1.75em"}>
                  休日
                </Typography>
                <Box paddingLeft={"10px"}>
                  <Typography fontSize={"1.25em"}>
                    勤務日数：週1日以上
                    <br />
                    勤務曜日：応相談
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        </Box>

        <Box
          margin="auto"
          maxWidth={"1000px"}
          sx={{
            paddingY: "17px",
            paddingX: "35px",
            backgroundColor: "white",
            marginBottom: "62px",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon
              color="primary"
              component={PuzzleSvg}
              inheritViewBox
              fontSize="large"
            />
            <Typography variant="h5" fontSize={"2.25em"}>
              写真
            </Typography>
          </Stack>
          <Box paddingY={"5px"}>
            <Grid container rowSpacing={0} spacing={2}>
              <Grid item xs={4}>
                <Image
                  src="/images/home/banner.png"
                  alt="photo"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                ></Image>
              </Grid>
              <Grid item xs={4}>
                <Image
                  src="/images/home/banner.png"
                  alt="photo"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                ></Image>
              </Grid>
              <Grid item xs={4}>
                <Image
                  src="/images/home/banner.png"
                  alt="photo"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                ></Image>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          margin="auto"
          maxWidth={"1000px"}
          sx={{
            paddingY: "17px",
            paddingX: "35px",
            backgroundColor: "white",
            marginBottom: "62px",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon
              color="primary"
              component={PuzzleSvg}
              inheritViewBox
              fontSize="large"
            />
            <Typography variant="h5" fontSize={"2.25em"}>
              事務所情報
            </Typography>
          </Stack>
          <Box
            sx={{
              paddingLeft: "45px",
            }}
          >
            <Typography variant="h6" fontSize={"1.75em"}>
              法人・施設名
            </Typography>
            <Typography
              sx={{
                paddingLeft: "20px",
                color: "#149CD7",
              }}
              fontSize={"1.25em"}
            >
              ツクイ杉並下井草サービスステーション（訪問介護）【2023年04月01日オープン】
            </Typography>
          </Box>
          <Box ml={2}>
            <Divider
              sx={{
                ml: 2,
                borderBottomWidth: 3,
                borderColor: "black",
              }}
            />
            <Box
              sx={{
                paddingLeft: "25px",
                paddingY: "10px",
              }}
            >
              <Typography variant="h6" fontSize={"1.75em"}>
                募集職種
              </Typography>
              <Typography
                fontSize={"1.25em"}
                sx={{
                  paddingLeft: "20px",
                  color: "#149CD7",
                }}
              >
                サービス提供責任者（パート・バイト） ケアマネジャー（正職員）
                <br />
                サービス提供責任者（正職員）
                <br />
                ケアクルー（介護職/ヘルパー）（パート・バイト）
                <br />
                ケアクルー（介護職/ヘルパー）（正職員）
                <br />
              </Typography>
            </Box>
            <Divider
              sx={{
                ml: 2,
                borderBottomWidth: 3,
                borderColor: "black",
              }}
            />
            <Box
              sx={{
                paddingLeft: "25px",
                paddingY: "10px",
              }}
            >
              <Typography variant="h6" fontSize={"1.75em"}>
                アクセス
              </Typography>
              <Typography
                sx={{
                  paddingBottom: "20px",
                  paddingLeft: "20px",
                }}
                fontSize={"1.25em"}
              >
                東京都杉並区下井草2-18-16 プラチナテラスロイロ202
              </Typography>
              <Image
                src="/images/home/banner.png"
                width={0}
                height={0}
                alt="map"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <Typography fontSize={"1.25em"}>
                西武鉄道新宿線「下井草」駅　から　徒歩7分
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          margin="auto"
          maxWidth={"1000px"}
          sx={{
            paddingY: "17px",
            paddingX: "35px",
            backgroundColor: "white",
            marginBottom: "90px",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <SvgIcon
              color="primary"
              component={PuzzleSvg}
              inheritViewBox
              fontSize="large"
            />
            <Typography variant="h5" fontSize={"2.25em"}>
              応募に関するよくある質問
            </Typography>
          </Stack>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography fontSize={"1.75em"} className="question">
              Q.会員登録をするとほかの医院・事業所からも自分の氏名などを閲覧
              できてしまうのでしょうか？
            </Typography>
            <Box
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F2FAFD",
                padding: "20px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#CCC",
                textIndent: "-10px",
              }}
            >
              <Typography fontSize={"1.25em"} className="answer">
                A.氏名と電話番号は、応募した医院・事業所以外からは閲覧できません。また、スカウ
                ト機能を「受け取らない」に設定していれば、それ以外のプロフィールも医院・事業所
                から閲覧できませんので、ご就業中の方も安心してご利用いただくことができます。詳
                しくは プライバシーポリシー をご確認ください。︎
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              paddingTop: "20px",
            }}
          >
            <Typography fontSize={"1.75em"} className="question">
              Q.会員登録をするとほかの医院・事業所からも自分の氏名などを閲覧
              できてしまうのでしょうか？
            </Typography>
            <Box
              sx={{
                borderRadius: "5px",
                backgroundColor: "#F2FAFD",
                padding: "20px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#CCC",
                textIndent: "-10px",
              }}
            >
              <Typography fontSize={"1.25em"} className="answer">
                A.氏名と電話番号は、応募した医院・事業所以外からは閲覧できません。また、スカウ
                ト機能を「受け取らない」に設定していれば、それ以外のプロフィールも医院・事業所
                から閲覧できませんので、ご就業中の方も安心してご利用いただくことができます。詳
                しくは プライバシーポリシー をご確認ください。︎
              </Typography>
            </Box>
          </Box>
        </Box>

        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
              paddingX: "20px",
              paddingBottom: "20px",
            }}
          >
            <Button
              sx={{
                width: "391px",
                height: "156px",
                backgroundColor: "white",
                borderRadius: "30px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#ccc",
                fontSize: "1.5em",
                boxShadow: "inset 0px -10px #9e9b9c",
              }}
            >
              ★キープする
            </Button>

            <Button
              sx={{
                width: "391px",
                height: "156px",
                backgroundColor: "#feafaf",
                borderRadius: "30px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#ccc",
                fontSize: "1.5em",
                boxShadow: "inset 0px -10px #9d6a6b",
                textShadow:
                  "2px 2px 2px #f05b55, -2px -2px 2px #f05b55, 2px -2px 0 #f05b55, -2px 2px 0 #f05b55",
                color: "white",
              }}
            >
              応募画面へ進む
              {/* <Typography>応募画面へ進む</Typography> */}
            </Button>
          </Box>
        </Container>

        <Container maxWidth="md">
          <SearchJobByKeyword />
        </Container>
      </div>
    </Wrapper>
  );
}
