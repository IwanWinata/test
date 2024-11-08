"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { Poppins } from "next/font/google";
import Jumbotron from "./components/Jumbotron";
import WhyAmani from "./components/WhyAmani";
import HowItWorks from "./components/HowItWorks";
import PartnershipReq from "./components/PartnershipReq";
import Closing from "./components/Closing";
import Form from "./components/Form";

const poppins = Poppins({ subsets: ["latin"], weight: "300" });

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Navbar title="beranda" />
        <Jumbotron />
        <WhyAmani />
        <HowItWorks />
        <PartnershipReq />
        <Closing />
        <Form />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
