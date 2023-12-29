import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import {
  BLOG_LINK,
  PERSONAL_BLOG_SUFFIX,
  TECH_BLOG_SUFFIX,
  WORK_WITH_ME_LINK,
} from "../../others/constants";
import PersonIcon from "@mui/icons-material/Person";
import DeviceHubIcon from "@mui/icons-material/DeviceHub";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import "./styles.css";
import { Contacts } from "../contacts";

export const DrawerDefault = () => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const DrawerContent = () => {
    return (
      <Box
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
        sx={{
          bgcolor: "secondary.light",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <List>
            <ListItem>
              <Link to="/" className="drawer-link">
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={`${BLOG_LINK}/${PERSONAL_BLOG_SUFFIX}`}
                className="drawer-link"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <PersonIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Personal Blog"} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                to={`${BLOG_LINK}/${TECH_BLOG_SUFFIX}`}
                className="drawer-link"
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DeviceHubIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Tech Blog"} />
                </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
              <Link to={WORK_WITH_ME_LINK} className="drawer-link">
                <ListItemButton>
                  <ListItemIcon>
                    <SyncAltIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Work With Me"} />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Contacts color="primary.main" />
        </Box>
      </Box>
    );
  };
  return (
    <IconButton size="small" aria-label="open drawer" sx={{ mr: 2 }}>
      <Drawer open={drawerOpen} anchor="right" onClose={toggleDrawer}>
        <DrawerContent />
      </Drawer>
      <div onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "secondary.light" }} />
      </div>
    </IconButton>
  );
};
