// pages/index.js

import Image from "next/image";
import backgroundImage from "@/public/img/how-it-works.png";
import { Typography } from "@mui/material";
import { FC } from "react";
import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    {
      step: t("step1.step"),
      title: t("step1.title"),
      description: t("step1.desc"),
    },
    {
      step: t("step2.step"),
      title: t("step2.title"),
      description: t("step2.desc"),
    },
    {
      step: t("step3.step"),
      title: t("step3.title"),
      description: t("step3.desc"),
    },
    {
      step: t("step4.step"),
      title: t("step4.title"),
      description: t("step4.desc"),
    },
    {
      step: t("step5.step"),
      title: t("step5.title"),
      description: t("step5.desc"),
    },
    {
      step: t("step6.step"),
      title: t("step6.title"),
      description: t("step6.desc"),
    },
  ];

  return (
    <div className="relative flex flex-col items-center py-12 bg-white">
      {/* Title */}

      <Typography className="text-3xl font-semibold mb-8">
        {t("title")}
      </Typography>

      {/* Main Content Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full relative z-10">
        {steps.map((step, index) => {
          return (
            <StepCard
              key={index}
              step={step.step}
              title={step.title}
              description={step.description}
            />
          );
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
