// pages/index.js

import Image from "next/image";
import backgroundImage from "@assets/img/why-amani.png";
import FormSvg from "@assets/svgs/form-regular.svg";
import LicenseSvg from "@assets/svgs/license-outline.svg";
import BricksSvg from "@assets/svgs/line-bricks.svg";
import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function WhyAmani() {
  const t = useTranslations("WhyAmani");

  return (
    <div className="min-h-screen bg-white flex flex-col items-center py-12">
      <Typography className="text-3xl font-semibold mb-8">
        {t("title")}
      </Typography>

      <div className="flex flex-wrap justify-center gap-10 w-full">
        <div className="flex flex-col items-start gap-10">
          <div className="bg-white shadow-lg rounded-[1.25rem] p-6 flex flex-col gap-1 items-start max-w-[22rem]">
            <Image src={LicenseSvg} alt="Your Icon" />
            <Typography className="text-xl font-semibold mb-2">
              {t("cardTitle1")}
            </Typography>
            <p>{t("cardDesc1")}</p>
          </div>

          <div className="bg-white shadow-lg rounded-[1.25rem] p-6 flex flex-col gap-1 items-start max-w-[22rem]">
            <Image src={BricksSvg} alt="Your Icon" />
            <Typography className="text-xl font-semibold mb-2">
              {t("cardTitle2")}
            </Typography>
            <p>{t("cardDesc2")}</p>
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
            {t("cardTitle3")}
          </Typography>
          <p>{t("cardDesc3")}</p>
        </div>
      </div>
    </div>
  );
}
