// pages/index.js

import Image from "next/image";
import backgroundImage from "../../public/img/how-it-works.png";
import { Typography } from "@mui/material";
import { FC, useContext } from "react";
import { BaseContext } from "../context/BaseContext";

const steps = [
  {
    step: {
      en: "Step 1",
      id: "Step 1",
    },
    title: {
      en: "Register your Company",
      id: "Isi Form Pendaftaran",
    },
    description: {
      en: "Start easily by filling out the form on the Amani platform.",
      id: "Daftarkan dirimu dengan mudah di platform Amani!",
    },
  },
  {
    step: {
      en: "Step 2",
      id: "Step 2",
    },
    title: {
      en: "Verification by Amani",
      id: "Verifikasi oleh Amani",
    },
    description: {
      en: "Amani will verify your registration data.",
      id: "Amani akan memverifikasi data dari pendaftaran kamu.",
    },
  },
  {
    step: {
      en: "Step 3",
      id: "Step 3",
    },
    title: {
      en: "Select Projects and Join the Bidding",
      id: "Pilih Proyek dan Ikut Seleksi",
    },
    description: {
      en: "Select interested projects and participate in the bidding process.",
      id: "Pilih proyek yang sesuai, dan ikut proses seleksi tender.",
    },
  },
  {
    step: {
      en: "Step 4",
      id: "Step 4",
    },
    title: {
      en: "Win and Start Your Work",
      id: "Jadi Pemenang dan Mulai Pekerjaan",
    },
    description: {
      en: "Win the bid and get started on your project immediately.",
      id: "Menangkan tender dan langsung mulai pekerjaanmu!",
    },
  },
  {
    step: {
      en: "Step 5",
      id: "Step 5",
    },
    title: {
      en: "Use Material Financing",
      id: "Gunakan Fasilitas Pembiayaan Material",
    },
    description: {
      en: "Enjoy the material financing Amani provides to keep your project running smoothly",
      id: "Nikmati pembiayaan material oleh Amani untuk kelancaran proyek.",
    },
  },
  {
    step: {
      en: "Step 6",
      id: "Step 6",
    },
    title: {
      en: "Invoice and Get Paid",
      id: "Tagihkan dan Terima Pembayaran",
    },
    description: {
      en: "Submit your invoice for completed work and receive payment, with the cost of materials used already subtracted.",
      id: "Kirim invoice untuk seluruh pekerjaanmu dan terima pembayaran yang sudah dikurangi pembiayaan material yang digunakan!",
    },
  },
];

export default function HowItWorks() {
  const ItemContext = useContext(BaseContext);

  return (
    <div className="relative flex flex-col items-center py-12 bg-white">
      {/* Title */}

      <Typography className="text-3xl font-semibold mb-8">
        {ItemContext.languages === "indonesia"
          ? "Gimana Cara Kerjanya?"
          : "How Does it Work?"}
      </Typography>

      {/* Main Content Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full relative z-10">
        {steps.map((step, index) => {
          if (ItemContext.languages === "indonesia") {
            return (
              <StepCard
                key={index}
                step={step.step.id}
                title={step.title.id}
                description={step.description.id}
              />
            );
          } else {
            return (
              <StepCard
                key={index}
                step={step.step.en}
                title={step.title.en}
                description={step.description.en}
              />
            );
          }
        })}
      </div>
      <Image
        alt=""
        src={backgroundImage}
        className="absolute right-0 bottom-0 z-1"
        height={450}
      />
    </div>
  );
}

// Step Card Component
interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

const StepCard: FC<StepCardProps> = ({ step, title, description }) => {
  return (
    <div className="p-3 w-[31.25rem]">
      <span className="inline-block bg-[#B0E788] text-[#4F7280] rounded-full px-3 py-0.5 text-sm font-semibold mb-2">
        {step}
      </span>
      <Typography className="text-xl font-semibold text-[#05418A] mb-1">
        {title}
      </Typography>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
