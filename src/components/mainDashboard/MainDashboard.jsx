import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import GalleryDashboard from "./GalleryDashboard";
import ProjectDashboard from "./ProjectDashboard";
import VideoDashboard from "./VideoDashboard";

export default function MainDashboard() {
  const [activeTab, setActiveTab] = useState("gallery");

  const renderActive = () => {
    switch (activeTab) {
      case "gallery":
        return <GalleryDashboard />;
      case "project":
        return <ProjectDashboard />;
      case "video":
        return <VideoDashboard />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: 1500,
        margin: "0 auto",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 15, width: "100%" }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant={activeTab === "gallery" ? "contained" : "outlined"}
          onClick={() => setActiveTab("gallery")}
        >
          Gallery
        </Button>
        <Button
          variant={activeTab === "project" ? "contained" : "outlined"}
          onClick={() => setActiveTab("project")}
        >
          Project
        </Button>
        <Button
          variant={activeTab === "video" ? "contained" : "outlined"}
          onClick={() => setActiveTab("video")}
        >
          Video
        </Button>
      </Stack>

      <Box sx={{ width: "100%" }}>{renderActive()}</Box>
    </Box>
  );
}
