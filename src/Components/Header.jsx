import React, { useState } from "react";
import "../style.css";
import { useNavigate } from "react-router-dom";
import img1 from "../images/eslam.png";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  CssBaseline,
  Drawer,
  Typography,
} from "@material-ui/core";
import {
  Apps,
  Menu,
  ContactMail,
  AssignmentInd,
  Home,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    margin: "0.5rem auto",
    padding: "1rem",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: "tan",
  },
}));

const listItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    link: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    link: "/",
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    link: "/profile",
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts",
    link: "/",
  },
];

export default function Navbar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();

  const sideList = () => (
    <Box
      style={{ backgroundColor: "#1976d2" }}
      className={classes.menuSliderContainer}
      component="div"
    >
      <Avatar
        className={classes.avatar}
        style={{ backgroundColor: "rgb(25, 118, 210)" }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src={img1}
          alt="Juaneme8"
          className={classes.avatar}
        />
      </Avatar>
      <Divider />
      <List>
        {listItems.map((listItem, index) => (
          <ListItem
            className={classes.listItem}
            button
            key={index}
            onClick={() => {
              navigate(`${listItem.link}`);
            }}
          >
            <ListItemIcon className={classes.listItem}>
              {listItem.listIcon}
            </ListItemIcon>
            <ListItemText primary={listItem.listText} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <CssBaseline />

      <Box component="nav">
        <AppBar style={{ backgroundColor: "#3e3f3a" }} position="static">
          <Toolbar>
            <IconButton style={{ color: "white" }} onClick={toggleSlider}>
              <Menu />
            </IconButton>
            <Typography style={{ letterSpacing: "2px" }}>
              <h3>Eslam</h3>
            </Typography>
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
