import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

interface IJobCardProps {
  tags: string[];
  title: string;
  location: string;
}

const JobCard: FC<IJobCardProps> = ({ tags, title, location }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Stack direction="row" spacing={1}>
          {tags.map((tag, index) => (
            <Chip label={tag} key={index} />
          ))}
        </Stack>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
