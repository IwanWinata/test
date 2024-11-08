"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import Link from "next/link";
import lpsLogo from "@assets/img/LPS.png";
import {
  buyerIconSvg,
  contructorIconSvg,
  developerIconSvg,
  investorIconSvg,
  landOwnerIconSvg,
  salesAgentIconSvg,
  sellerIconSvg,
  supplierIconSvg,
} from "./iconSvg/IconSvg";
import {
  facebookIconSvg,
  IconProps,
  instagramIconSvg,
  linkdlnIconSvg,
  tiktokIconSvg,
  youtubeIconSvg,
} from "./iconSvg/mediaSocial";
import { LanguagesItem } from "@/context/BaseContext";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const { locale } = useParams();
  const t = useTranslations("Footer");
  const link = {
    INSTAGRAM: String(process.env.INSTAGRAM_LINK) ?? "#",
    FACEBOOK: String(process.env.FACEBOOK_LINK) ?? "#",
    LINKEDIN: String(process.env.LINKEDIN_LINK) ?? "#",
    YOUTUBE: String(process.env.YOUTUBE_LINK) ?? "#",
    TIKTOK: String(process.env.TIKTOK_LINK) ?? "#",
  };
  const languages = LanguagesItem;

  const produkItem: {
    title: string;
    icon: React.FC<IconProps>;
    url: string;
    hover: boolean;
  }[] = [
    {
      title: t("products.buyer.title"),
      icon: buyerIconSvg,
      url: "/buyer",
      hover: false,
    },
    {
      title: t("products.investor.title"),
      icon: investorIconSvg,
      url: "/investor",
      hover: false,
    },
    {
      title: t("products.seller.title"),
      icon: sellerIconSvg,
      url: "/under-contruction",
      hover: false,
    },
    {
      title: t("products.developer.title"),
      icon: developerIconSvg,
      url: "/under-contruction",
      hover: false,
    },
    {
      title: t("products.contractor.title"),
      icon: contructorIconSvg,
      url: "/under-contruction",
      hover: false,
    },
    {
      title: t("products.landOwner.title"),
      icon: landOwnerIconSvg,
      url: "/under-contruction",
      hover: false,
    },
    {
      title: t("products.supplier.title"),
      icon: supplierIconSvg,
      url: "/under-contruction",
      hover: false,
    },
    {
      title: t("products.salesAgent.title"),
      icon: salesAgentIconSvg,
      url: "/under-contruction",
      hover: false,
    },
  ];

  const socialMedia: {
    icon: React.FC<IconProps>;
    title: string;
    url: string;
  }[] = [
    {
      icon: tiktokIconSvg,
      title: "@amani.co.id",
      url: link.TIKTOK,
    },
    {
      icon: youtubeIconSvg,
      title: "Amani",
      url: link.YOUTUBE,
    },
    {
      icon: linkdlnIconSvg,
      title: "@amani.co.id",
      url: link.LINKEDIN,
    },
    {
      icon: facebookIconSvg,
      title: "Amani",
      url: link.FACEBOOK,
    },
    {
      icon: instagramIconSvg,
      title: "@amani.co.id",
      url: link.INSTAGRAM,
    },
  ];

  const activeLanguages = useMemo(() => {
    if (locale === "kontraktor") {
      return "indonesia";
    } else {
      return "english";
    }
  }, [locale]);

  return (
    <div
      className="section"
      style={{
        backgroundColor: "#F7F8FC",
        color: "#41424A",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* <Image
				alt='logo'
				src={logoWhite}
			/> */}
      <Typography
        sx={{
          fontWeight: 500,
          fontSize: "24px",
        }}
      >
        amani
      </Typography>
      <Box className={"grid lg:grid-cols-2 mt-10 gap-10"}>
        <Box className="grid lg:grid-cols-2 gap-5 h-fit">
          <Box className="grid gap-5 h-fit">
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
              }}
            >
              {t("joinAs")}
            </Typography>
            <Box className="grid grid-flow-col grid-rows-4 grid-cols-2 gap-4 translate-x-[-1rem]">
              {produkItem?.map((item, index: number) => {
                return (
                  <Link
                    key={index}
                    href={item.url}
                    target="_blank"
                    className="flex items-center"
                  >
                    <div className="w-[3rem] flex justify-center">
                      <item.icon height={20} color="#4F7280" />
                    </div>
                    {item.title}
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box className="grid gap-5 h-fit">
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            {t("location")}
          </Typography>
          <Link
            target="_blank"
            href={
              "https://www.google.com/maps/place/Amani/@-6.2737997,106.5360897,11z/data=!4m7!3m6!1s0x2e69f525b06821f3:0xa59a2b107e1db15f!8m2!3d-6.2126363!4d106.820164!15sCgVhbWFuaZIBE3Byb3BlcnR5X2ludmVzdG1lbnTgAQA!16s%2Fg%2F11wfqz3031?coh=229685&entry=tts&g_ep=EgoyMDI0MDkyOS4wIPu8ASoASAFQAw%3D%3D"
            }
          >
            <Typography
              sx={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: `10px`,
                fontWeight: "100",
              }}
            >
              Millenium Centennial Center Lt.51 <br />
              Jl. Jenderal Sudirman No.Kav 25, Kuningan, karet, Kecamatan
              Setiabudi, Kota Jakarta Selatan, DKI Jakarta 12920
            </Typography>
          </Link>
          <Box className="translate-x-[-1rem] flex gap-5 h-fit lg:grid-cols-1">
            {socialMedia?.map((item, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.url}
                  target="_blank"
                  className="flex items-center"
                >
                  <div className="w-[3rem] flex justify-center">
                    <item.icon height={20} color="#4F7280" />
                  </div>
                  {/* {item.title} */}
                </Link>
              );
            })}
          </Box>
          <FormControl className="w-[50%]">
            <Select
              value={activeLanguages}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(e) => {
                if (e.target.value === "indonesia") {
                  router.push("kontraktor");
                } else {
                  router.push("contractor");
                }
              }}
              sx={{
                // border: '0.2rem solid #E2E1E1',
                borderRadius: "0.7rem",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E2E1E1",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E2E1E1",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#E2E1E1",
                },
              }}
            >
              {languages?.map((item, index: number) => {
                return (
                  <MenuItem key={index} value={item.country}>
                    <Box className="flex items-center gap-3">
                      <Image alt="" width={30} height={20} src={item.icon} />
                      <Typography
                        sx={{
                          textTransform: "capitalize",
                        }}
                      >
                        {item.country}
                      </Typography>
                    </Box>
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
      </Box>

      <Box className="w-full grid gap-10">
        <hr className="mt-10" />
        <Box className="w-full lg:flex grid gap-4 items-center">
          <Image alt="lps-logo" height={50} src={lpsLogo} />
          <Typography>
            {t("ojk1")} <span className="font-bold">{t("ojk2")}</span>{" "}
            {t("and")} <span className="font-bold">{t("ojk3")}</span>,{" "}
            {t("ojk4")} <span className="font-bold">{t("ojk5")}</span>.
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          All right reserved Amani @2024
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
