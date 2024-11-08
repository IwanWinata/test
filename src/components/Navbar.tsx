"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { LanguagesItem, languagesType } from "../context/BaseContext";
import { useTranslations } from "next-intl";
import { useRouter } from "@/src/i18n/routing";
import { useParams } from "next/navigation";
import indonesiaIcon from "@/public/img/icon/indonesia.svg";
import englishIcon from "@/public/img/icon/english.svg";

interface props {
  title: "beranda" | "other";
  navActive?: "tentang" | "bangun sebagai" | "kisah";
}

const Navbar: React.FC<props> = ({ title, navActive }) => {
  const route = useRouter();
  const { locale } = useParams();
  const [active, setActive] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const [navbarWhite, setNavbarWhite] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const t = useTranslations("NavBar");

  const navigation = useRouter();

  const languages = LanguagesItem;

  const handleNavigation = (e: string) => {
    setActive(false);
    setDropdown(false);
    navigation.push(e);
  };

  const handleOpenCloseSidebar = () => {
    setActive(!active);
    setDropdown(false);
  };

  const handleLanguagesDropdown = (e: languagesType["country"]) => {
    setDropdown(false);
    setActive(false);
    if (e === "indonesia") {
      route.push("kontraktor");
    } else {
      route.push("contractor");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node | null)
      ) {
        setActive(false);
        setDropdown(false);
      }
    }

    const handleScroll = () => {
      const tronElement = document.getElementById("tron");
      if (tronElement) {
        const tronPosition = tronElement.getBoundingClientRect();

        if (tronPosition.bottom <= 0) {
          setNavbarWhite(true);
        } else {
          setNavbarWhite(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [active]);

  useEffect(() => {}, [navbarWhite, title]);

  const listNavItem = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => handleNavigation("/tentang")}
          className={`nav-item ${navActive === "tentang" ? "active" : ""}`}
        >
          {t("about")}
        </button>
        <button
          onClick={() => handleNavigation("/bangun-sebagai")}
          className={`nav-item ${navActive === "bangun sebagai" ? "active" : ""}`}
        >
          {t("build")}
        </button>
        <button
          onClick={() => handleNavigation("/kisah")}
          className={`nav-item ${navActive === "kisah" ? "active" : ""}`}
        >
          {t("story")}
        </button>
        <div className="relative flex justify-center">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="nav-item flex"
          >
            <Image
              alt=""
              width={30}
              src={locale === "kontraktor" ? indonesiaIcon : englishIcon}
            />
            <ExpandMoreIcon />
          </button>
          {dropdown && (
            <div className="p-2 rounded-md bg-white grid gap-1 absolute mt-[2rem] w-[5rem] shadow">
              {languages?.map((item, index: number) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleLanguagesDropdown(item.country)}
                    className="flex justify-center items-center gap-2 text-black p-2"
                  >
                    <div className="w-[30px]">
                      <Image
                        alt=""
                        layout="responsive"
                        width={30}
                        height={20}
                        src={item.icon}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </React.Fragment>
    );
  };
  return (
    <nav ref={navbarRef}>
      <div
        // className={`nav ${title === 'other' || navbarWhite ? 'nav-blue' : 'nav-blur'}`}
        className={`nav nav-white `}
      >
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
            },
            position: "absolute",
            left: 0,
            margin: 1,
          }}
        >
          <IconButton
            onClick={() => handleOpenCloseSidebar()}
            sx={{
              color: "black",
            }}
          >
            {active ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
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
          <button
            onClick={() => handleNavigation("/")}
            className="nav-item img"
          >
            {/* <Image
							className=''
							alt={title === 'other' || navbarWhite ? LogoWhite.src : LogoText.src}
							src={title === 'other' || navbarWhite ? LogoWhite.src : LogoText.src}
							height={100}
							width={200}
						/> */}
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "24px",
              }}
            >
              amani
            </Typography>
          </button>
        </Box>
        <Box
          sx={{
            display: {
              lg: "none",
              md: "none",
            },
          }}
        >
          <button
            onClick={() => handleNavigation("/")}
            className="nav-item img"
          >
            {/* <Image
							className=''
							alt={title === 'other' || navbarWhite ? LogoWhite.src : LogoText.src}
							src={title === 'other' || navbarWhite ? LogoWhite.src : LogoText.src}
							height={100}
							width={200}
						/> */}
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: "24px",
              }}
            >
              amani
            </Typography>
          </button>
        </Box>
        <div className="nav-right">{listNavItem()}</div>
      </div>
      <Box
        // className={`sidebar ${title === 'other' || navbarWhite ? 'nav-blue' : 'nav-blur'} p-3`}
        className={`sidebar nav-white p-3`}
        sx={{
          display: {
            lg: "none",
            md: "none",
            sm: "grid",
            xs: "grid",
          },
          gap: 1,
          marginTop: active ? "0%" : "-100%",
        }}
      >
        {listNavItem()}
      </Box>
    </nav>
  );
};

export default Navbar;
