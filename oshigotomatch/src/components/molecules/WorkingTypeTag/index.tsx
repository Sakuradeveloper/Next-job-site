import { FC } from "react";
import MuiChip, { ChipProps } from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

interface IWorkingTypeTag {
  type: "fulltime" | "contractual" | "temporary" | "parttime";
}

interface IWorkingDescription {
  type: "physical" | "living" | "open" | "open3";
}

const Component = styled(MuiChip, {
  shouldForwardProp: (props) => props !== "type",
})<ChipProps & { type: "fulltime" | "contractual" | "temporary" | "parttime" }>(
  ({ type }) => ({
    fontWeight: 600,
    color: "white",
    borderRadius: 0,
    ...(type === "fulltime" && {
      backgroundColor: "#46B0D2",
    }),
    ...(type === "contractual" && {
      backgroundColor: "#46D254",
    }),
    ...(type === "temporary" && {
      backgroundColor: "#4675D2",
    }),
    ...(type === "parttime" && {
      backgroundColor: "#E3951F",
    }),
  })
);

export const ComponentDescripton = styled(MuiChip, {
  shouldForwardProp: (props) => props !== "type",
})<ChipProps & { type: "physical" | "living" | "open" | "open3" | "visiting" }>(
  ({ type }) => ({
    fontWeight: 600,
    color: "white",
    borderRadius: 0,
    ...(type === "physical" && {
      backgroundColor: "#46B0D2",
    }),
    ...(type === "open" && {
      backgroundColor: "#46D254",
    }),
    ...(type === "living" && {
      backgroundColor: "#4675D2",
    }),
    ...(type === "open3" && {
      backgroundColor: "#E3951F",
    }),
    ...(type === "visiting" && {
      backgroundColor: "#FF89CE",
    }),
  })
);

const WorkingTypeTag: FC<IWorkingTypeTag> = ({ type }) => {
  const label = {
    fulltime: "正社員",
    contractual: "契約社員",
    temporary: "派遣社員",
    parttime: "アルバイト・パート",
  }[type];
  return <Component type={type} label={label ?? "None"} />;
};

export const WorkingDescription: FC<IWorkingDescription> = ({ type }) => {
  const label = {
    physical: "身体的ケア",
    living: "生活援助",
    open: "新規オープン",
    open3: "オープン3年以内",
  }[type];
  return <ComponentDescripton type={type} label={label ?? "None"} />;
};

export default WorkingTypeTag;
