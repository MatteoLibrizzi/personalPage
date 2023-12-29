import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { BottomNavigation } from "@mui/material";
import { AppBar, Toolbar } from "@mui/material";
import { Logo } from "../components/logo";
import { DrawerDefault } from "../components/drawerDefault";

const LayoutDefault = () => {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo />
          <DrawerDefault />
        </Toolbar>
      </AppBar>
      <main className="site-content" style={{ minHeight: "600px", padding: '5vh' }}>
        <Outlet />
      </main>
      <BottomNavigation
        sx={{
          height: "fit-content",
        }}
      >
        <Footer />
      </BottomNavigation>
    </>
  );
};

export default LayoutDefault;
