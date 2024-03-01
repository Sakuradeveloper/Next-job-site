import { FC } from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Tag = styled("div")(({ theme }) => ({
  backgroundColor: "#727272",
  color: theme.palette.background.paper,
  padding: "2px 12px",
  fontWeight: 600,
  fontSize: 14,
}));

interface IPost {
  image: string;
  title: string;
  content: string;
  tags: string[];
}

const Post: FC<IPost> = ({ image, title, content, tags }) => {
  return (
    <Stack direction={{ md: "row" }} spacing={3}>
      <Box width={{ md: 440 }} height={220} position="relative" flexShrink={0}>
        <Image src={image} alt="" fill />
      </Box>
      <Stack alignItems="flex-start" gap="16px" p={{ xs: 3, md: 0 }}>
        <Typography variant="h5">{title}</Typography>
        <Typography>{content}</Typography>
        <Stack>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Post;
