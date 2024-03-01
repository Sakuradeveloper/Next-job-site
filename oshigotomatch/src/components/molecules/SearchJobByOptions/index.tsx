import React from "react";
import { useForm, Controller } from "react-hook-form";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const Wrapper = styled(Stack)({
  [`& .${outlinedInputClasses.root}`]: {
    flexGrow: 1,
  },
});

const SearchJobByOptions = () => {
  const { control } = useForm({
    defaultValues: {
      job_category: 10,
      kind: 10,
      work_location: 10,
    },
  });

  return (
    <Wrapper direction={{ md: "row" }} gap={1} my={1}>
      <Controller
        control={control}
        name="job_category"
        render={({ field }) => (
          <Select size="small" {...field}>
            <MenuItem value={10}>職種を選ぶ</MenuItem>
          </Select>
        )}
      />
      <Controller
        control={control}
        name="kind"
        render={({ field }) => (
          <Select size="small" {...field}>
            <MenuItem value={10}>雇用形態を選ぶ</MenuItem>
          </Select>
        )}
      />
      <Controller
        control={control}
        name="work_location"
        render={({ field }) => (
          <Select size="small" {...field}>
            <MenuItem value={10}>勤務地を選ぶ</MenuItem>
          </Select>
        )}
      />
      <Button variant="contained">検索</Button>
    </Wrapper>
  );
};

export default SearchJobByOptions;
