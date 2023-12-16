import React from "react";
import "./styles.css";
import { Box } from "@mui/material";

export const FancyBox = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  return (
    <Box className={className} component="section" borderRadius={1} bgcolor={'lightblue'} style={{padding: '1vh 1vw 1vh 1vw'}}>
      {children}
    </Box>
  );
};
