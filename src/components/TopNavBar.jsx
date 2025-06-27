"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TikTokIcon from "@mui/icons-material/MusicNote"; // Placeholder for TikTok as MUI doesn't have a TikTok icon
import Link from "next/link";

const TopNavBar = () => {
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down("xs")); // <360px
  const isSmall = useMediaQuery(theme.breakpoints.down("sm")); // <600px
  const isMedium = useMediaQuery(theme.breakpoints.down("md")); // <900px
  const isLarge = useMediaQuery(theme.breakpoints.up("lg")); // >=1200px

  // Menu items split into two groups
  const group1 = [
    { text: "Staff Mail", priority: 2, href: "https://mail.google.com", external: true },
    { text: "Student Affairs", priority: 3, href: "/student-affairs" },
    { text: "Tenders", priority: 3, href: "/tenders" },
    { text: "Careers", priority: 3, href: "/careers" },
  ];

  const group2 = [
    { text: "Phone: 0794-976449/0731-976449", priority: 1 },
  ];

  // Filter items based on screen size and priority
  const visibleGroup1 = group1.filter((item) => {
    if (isExtraSmall) return item.priority === 1;
    if (isSmall) return item.priority <= 2;
    return true;
  });

  const visibleGroup2 = group2.filter((item) => {
    if (isExtraSmall) return item.priority === 1;
    if (isSmall) return item.priority <= 2;
    return true;
  });

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fe7c02",
        padding: { xs: "2px 0", sm: "4px 0", md: "6px 0" },
      }}
    >
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "100%",
          margin: "auto",
          padding: { xs: "0 4px", sm: "0 8px", md: "0 16px" },
          minHeight: "auto !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
          overflowX: { xs: "auto", md: "hidden" },
          whiteSpace: "nowrap",
          "&::-webkit-scrollbar": { height: "4px" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(255,255,255,0.3)",
            borderRadius: "0px",
          },
        }}
      >
        {/* Group 1 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, sm: 1, md: 1.5 },
            flexShrink: 0,
            flexGrow: { xs: 1, md: 0 },
            justifyContent: { xs: "flex-start", md: "flex-start" },
            minWidth: 0,
          }}
        >
          {visibleGroup1.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: 0,
              }}
            >
              <Link
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                passHref
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "white",
                    fontSize: {
                      xs: "0.65rem",
                      sm: "0.75rem",
                      md: "0.875rem",
                      lg: "1rem",
                    },
                    fontFamily: "'Peugeot', Helvetica, sans-serif",
                    textTransform: "capitalize",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
              {index < visibleGroup1.length - 1 && (
                <Box
                  sx={{
                    width: "1px",
                    height: { xs: "10px", sm: "12px", md: "14px" },
                    backgroundColor: "white",
                    mx: { xs: 0.25, sm: 0.5, md: 0.75 },
                  }}
                />
              )}
            </Box>
          ))}
        </Box>

        {/* Group 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 0.5, sm: 1, md: 1.5 },
            flexShrink: 0,
            flexGrow: { xs: 1, md: 0 },
            justifyContent: { xs: "flex-start", md: "flex-end" },
            minWidth: 0,
          }}
        >
          {visibleGroup2.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                minWidth: 0,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: {
                    xs: "0.65rem",
                    sm: "0.75rem",
                    md: "0.875rem",
                    lg: "1rem",
                  },
                  fontFamily: "'Peugeot', Helvetica, sans-serif",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.text}
              </Typography>
              {index < visibleGroup2.length - 1 && (
                <Box
                  sx={{
                    width: "1px",
                    height: { xs: "10px", sm: "12px", md: "14px" },
                    backgroundColor: "white",
                    mx: { xs: 0.25, sm: 0.5, md: 0.75 },
                  }}
                />
              )}
            </Box>
          ))}
          <Link href="/apply" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#ffffff",
                color: "#fe7c02",
                fontSize: { xs: "0.65rem", sm: "0.75rem", md: "0.875rem" },
                marginLeft: { xs: 0.5, sm: 1, md: 1.5 },
                borderRadius: 0,
                padding: { xs: "2px 8px", sm: "4px 12px", md: "6px 16px" },
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
            >
              Apply for a Course
            </Button>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 0.5, sm: 1 },
              marginLeft: { xs: 0.5, sm: 1, md: 1.5 },
            }}
          >
            <FacebookIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }} />
            <TwitterIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }} />
            <InstagramIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }} />
            <TikTokIcon sx={{ color: "white", fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" } }} />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;