"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import jumbotronImage from "@public/img/jumbotron.png";
import { useTranslations } from "next-intl";
const Jumbotron = () => {
  const t = useTranslations("Jumbotron");

  return (
    <div id="tron" className="section tron">
      <Box
        sx={{
          display: {
            lg: "none",
            md: "none",
            sm: "block",
            xs: "block",
          },
        }}
      >
        <Image
          alt="jumbotron"
          src={jumbotronImage}
          className="absolute left-0 top-0 object-cover object-center min-h-screen w-full"
          priority
        />
      </Box>
      <Box className="grid lg:grid-cols-2 gap-2">
        <div className="flex flex-col justify-start w-full gap-5 z-10 lg:pl-[100px] lg:w-[80%] h-full">
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: 500,
            }}
          >
            {t("titleLine1")} <br />
            {t("titleLine2")} <br />
            <span
              style={{
                color: "#7CA8FF",
              }}
            >
              {t("titleLine3")} <br />
              {t("titleLine4")}
            </span>
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "100",
            }}
          >
            {t("desc")}
          </Typography>
          <Button
            sx={{
              bgcolor: "#05418A",
              width: "fit-content",
              color: "white",
              borderRadius: "20.27px",
              padding: "10px 30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
              }}
            >
              {t("button")}
            </Typography>
            <ArrowForwardIcon />
          </Button>
        </div>
        <Box
          sx={{
            display: {
              lg: "block",
              md: "block",
              sm: "none",
              xs: "none",
            },
          }}
        >
          <Image
            alt="jumbotron"
            src={jumbotronImage}
            className="object-cover object-center w-full rounded-l-2xl"
            priority
          />
        </Box>
      </Box>
    </div>
  );
};

export default Jumbotron;
