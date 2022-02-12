import React from "react";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";
import user1 from "../../images/profiles/pro1.jpg";
import user2 from "../../images/profiles/pro2.jpg";
import user3 from '../../images/profiles/pro3.jpg'
import test01 from '../../images/posts/test01.jpg';
// import test02 from '../../images/posts/test02.jpg';
import test03 from '../../images/posts/test03.jpg';
import video1 from '../../images/videos/video1.mp4';
import CarouselPostPic from "./CarouselPostPic";

const MediaCard = () => {
  return (
    <>
      <Card sx={{ marginBottom: "5px" }} elevation={1}>
        <Box
          sx={{
            padding: "20px ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={user1} />
            &nbsp;&nbsp;
            <Typography sx={{ fontWeight: "bold" }}>username1</Typography>
          </Box>
          <Box>
            <BottomNavigationAction size='small' icon={<MoreHorizIcon />} />
          </Box>
        </Box>
        <CardMedia
          component='img'
          height='400'
          width='350'
          image={test01}
          alt='postpic'
        />
        <CardActions sx={{ display: "flex", width: "40%" }}>
          <BottomNavigationAction size='small' icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction
            size='small'
            icon={<ModeCommentOutlinedIcon />}
          />
          <BottomNavigationAction size='small' icon={<SendOutlinedIcon />} />
        </CardActions>
        <CardContent sx={{ display: 'flex' }}>
          <Typography sx={{ color: 'black', fontWeight: "bold" }}>
            username1
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            Hello party!
          </Typography>
        </CardContent>
      </Card>

      {/* post 2 */}
      <Card sx={{ marginBottom: "5px" }} elevation={1}>
        <Box
          sx={{
            padding: "20px ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={user2} />
            &nbsp;&nbsp;
            <Typography sx={{ fontWeight: "bold" }}>username2</Typography>
          </Box>
          <Box>
            <BottomNavigationAction size='small' icon={<MoreHorizIcon />} />
          </Box>
        </Box>
        <CarouselPostPic />
        <CardActions sx={{ display: "flex", width: "40%" }}>
          <BottomNavigationAction size='small' icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction
            size='small'
            icon={<ModeCommentOutlinedIcon />}
          />
          <BottomNavigationAction size='small' icon={<SendOutlinedIcon />} />
        </CardActions>
        <CardContent sx={{ display: 'flex' }}>
          <Typography sx={{ color: 'black', fontWeight: "bold" }}>
            username2
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            My dog and city view.
          </Typography>
        </CardContent>
      </Card>

      {/* post 3 */}
      <Card sx={{ marginBottom: "5px" }} elevation={1}>
        <Box
          sx={{
            padding: "20px ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={user3} />
            &nbsp;&nbsp;
            <Typography sx={{ fontWeight: "bold" }}>username3</Typography>
          </Box>
          <Box>
            <BottomNavigationAction size='small' icon={<MoreHorizIcon />} />
          </Box>
        </Box>
        <CardMedia
          component='img'
          height='400'
          width='350'
          image={test03}
          alt='postpic'
        />
        <CardActions sx={{ display: "flex", width: "40%" }}>
          <BottomNavigationAction size='small' icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction
            size='small'
            icon={<ModeCommentOutlinedIcon />}
          />
          <BottomNavigationAction size='small' icon={<SendOutlinedIcon />} />
        </CardActions>
        <CardContent sx={{ display: 'flex' }}>
          <Typography sx={{ color: 'black', fontWeight: "bold" }}>
            username3
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            Girt girl.
          </Typography>
        </CardContent>
      </Card>
      {/* post 4 */}
      <Card sx={{ marginBottom: "5px" }} elevation={1}>
        <Box
          sx={{
            padding: "20px ",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src={user3} />
            &nbsp;&nbsp;
            <Typography sx={{ fontWeight: "bold" }}>username3</Typography>
          </Box>
          <Box>
            <BottomNavigationAction size='small' icon={<MoreHorizIcon />} />
          </Box>
        </Box>
        <CardMedia
          component='video'
          height='400'
          width='350'
          src={video1}
          controls
          alt='video'
        />
        <CardActions sx={{ display: "flex", width: "40%" }}>
          <BottomNavigationAction size='small' icon={<FavoriteBorderIcon />} />
          <BottomNavigationAction
            size='small'
            icon={<ModeCommentOutlinedIcon />}
          />
          <BottomNavigationAction size='small' icon={<SendOutlinedIcon />} />
        </CardActions>
        <CardContent sx={{ display: 'flex' }}>
          <Typography sx={{ color: 'black', fontWeight: "bold" }}>
            username3
          </Typography>
          &nbsp;&nbsp;
          <Typography>
            My fist video.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default MediaCard;