"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useContext } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import jumbotronImage from "@/public/img/jumbotron.png";
import { BaseContext } from "../context/BaseContext";
const Jumbotron = () => {
  const ItemContext = useContext(BaseContext);

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
          {ItemContext.languages === "indonesia" ? (
            <>
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: 500,
                }}
              >
                Ubah Lahan Menganggur <br />
                <span
                  style={{
                    color: "#7CA8FF",
                  }}
                >
                  Jadi Proyek Menguntungkan
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "100",
                }}
              >
                Punya tanah kosong yang belum dimanfaatkan secara optimal? Atau
                mau jual tanah tapi gak laku-laku?
              </Typography>
            </>
          ) : (
            <>
              <Typography
                sx={{
                  fontSize: "48px",
                  fontWeight: 500,
                }}
              >
                Secure More Projects <br />
                with{" "}
                <span
                  style={{
                    color: "#7CA8FF",
                  }}
                >
                  Hassle-Free <br />
                  Working Capital!
                </span>
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "100",
                }}
              >
                Join Amani, tap into large-scale project opportunities, and gain
                the working capital to keep your operations smooth and
                efficient.
              </Typography>
            </>
          )}
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
              {ItemContext.languages === "indonesia"
                ? "Pelajari Lebih Lanjut"
                : "Get Started Now"}
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
