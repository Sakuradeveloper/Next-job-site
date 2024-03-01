import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { styled } from "@mui/material/styles";

const keywords = [
  "30代",
  "事務 正社員",
  "リモートワーク",
  "時短勤務",
  "年齢不問",
  "未経験OK",
];

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: "transparent",

  [theme.breakpoints.up("md")]: {
    padding: "20px 40px",
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
}));

const Tag = styled("div")(({ theme }) => ({
  backgroundColor: "#A1A1A1",
  color: theme.palette.background.paper,
  padding: "2px 12px",
  fontWeight: 600,
}));

const SearchJob = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      search: "",
      location: 10,
    },
  });

  const handleSearchJob = () => {};

  return (
    <Wrapper>
      <Stack gap={2}>
        <Typography variant="h6" fontWeight={600} color="primary">
          キーワードで検索する
        </Typography>
        <form onSubmit={handleSubmit(handleSearchJob)}>
          <Stack direction={{ md: "row" }} gap={1}>
            <Controller
              control={control}
              name="search"
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  notched
                  size="small"
                  fullWidth
                  placeholder="キーワードを入力"
                />
              )}
            />
            <Controller
              control={control}
              name="location"
              render={({ field }) => (
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  size="small"
                  {...field}
                  sx={{ minWidth: 160 }}
                >
                  <MenuItem value={10}>地域を選択</MenuItem>
                </Select>
              )}
            />
            <Button variant="contained" type="submit">
              検索
            </Button>
          </Stack>
        </form>
        <Stack gap={1}>
          <Typography>人気のキーワード</Typography>
          <Stack direction="row" gap={1} flexWrap="wrap">
            {keywords.map((keyword, index) => (
              <Tag key={index}>{keyword}</Tag>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default SearchJob;
