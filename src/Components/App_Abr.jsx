import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const drawerWidth = 240;

const destruc = [
  {
    lable: "Dashboard",
    link: "/",
  },
  {
    lable: "Inbox",
    link: "/dashboard/inbox",
  },
  {
    lable: "Starred",
    link: "/dashboard/starred",
  },
  {
    lable: "Send Email",
    link: "/dashboard/sendemail",
  },
  {
    lable: "Drafts",
    link: "/dashboard/drafts",
  },
  {
    lable: "All Mail",
    link: "/dashboard/allmail",
  },
  {
    lable: "Trash",
    link: "/dashboard/trash",
  },
  {
    lable: "Spam",
    link: "/dashboard/spam",
  },
];

export function Appbar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Toolbar />

        <Navbar />
        <Divider />
        <List>
          {destruc.map((items, index) => {
            // const { lable, link } = items;

            return (
              <NavLink to={items.link}>
                <ListItem key={index} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{items.lable}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            );
          })}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
