// pages/index.js

import Image from "next/image";
import backgroundImage from "../../public/img/why-amani.png";
import FormSvg from "../../public/form-regular.svg";
import LicenseSvg from "../../public/license-outline.svg";
import BricksSvg from "../../public/line-bricks.svg";
import { Box, Typography } from "@mui/material";

export default function WhyAmani() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12">
      <Typography className="text-3xl font-semibold mb-8">
        Why Choose Amani?
      </Typography>

      <div className="flex flex-wrap justify-center gap-10 w-full">
        <div className="flex flex-col items-start gap-10">
          <div className="bg-white shadow-lg rounded-[1.25rem] p-6 flex flex-col gap-1 items-start max-w-[22rem]">
            <Image src={LicenseSvg} alt="Your Icon" />
            <Typography className="text-xl font-semibold mb-2">
              Guaranteed Payments
            </Typography>
            <p>Rest assured, your payments are secure with Amani.</p>
          </div>

          <div className="bg-white shadow-lg rounded-[1.25rem] p-6 flex flex-col gap-1 items-start max-w-[22rem]">
            <Image src={BricksSvg} alt="Your Icon" />
            <Typography className="text-xl font-semibold mb-2">
              Material Financing
            </Typography>
            <p>
              Buy now, pay later with safe, sharia-compliant financing options.
            </p>
          </div>
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
            alt="why-amani"
            src={backgroundImage}
            className="object-cover object-center w-[26.6875rem] rounded-l-2xl"
            priority
          />
        </Box>

        <div className="bg-white shadow-lg rounded-[1.25rem] p-6 flex flex-col gap-1 max-h-fit items-start max-w-[22rem]">
          <Image src={FormSvg} alt="Your Icon" />
          <Typography className="text-xl font-semibold mb-2">
            Endless Project Opportunities
          </Typography>
          <p>
            Dive into various large-scale projects with Amani’s easy-to-use
            bidding platform and compete to win.
          </p>
        </div>
      </div>
    </div>
  );
}
