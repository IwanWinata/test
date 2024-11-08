// pages/index.js

import { Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import cardImage from "@/public/img/partner-req.png";
import cardImage2 from "@/public/img/partner-req-2.png";
import cardImage3 from "@/public/img/partner-req-3.png";
import cardImage4 from "@/public/img/partner-req-4.png";
import { useTranslations } from "next-intl";

export default function PartnershipReq() {
  const t = useTranslations("PartnershipReq");

  const reqs = [
    {
      icon: cardImage,
      description: t("cardDesc1"),
    },
    {
      icon: cardImage2,
      description: t("cardDesc2"),
    },
    {
      icon: cardImage3,
      description: t("cardDesc3"),
    },
    {
      icon: cardImage4,
      description: t("cardDesc4"),
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 bg-white">
      {/* Title */}
      <Typography className="text-3xl font-semibold mb-4">
        {t("title")}
      </Typography>
      <div className="w-[17.9631rem] h-[0.8125rem] bg-[#B0E788] rounded-full mb-8"></div>

      {/* Requirement Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {reqs.map((req, index) => {
          return (
            <RequirementCard
              key={index}
              icon={req.icon}
              bgColor="bg-[#E8F0FE]"
              description={req.description}
            />
          );
        })}
      </div>
    </div>
  );
}

interface RequirementCardProps {
  icon: StaticImageData;
  bgColor: string;
  description: string;
}

const RequirementCard: React.FC<RequirementCardProps> = ({
  icon,
  bgColor,
  description,
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-between p-3 rounded-2xl shadow-lg ${bgColor} w-64`}
    >
      <div className="mb-4 min-h-[6.0625rem] items-center flex">
        <Image src={icon} alt="Icon" width={97} height={97} />
      </div>
      <Typography className="text-center text-[0.875rem] font-medium text-[#41424A]">
        {description}
      </Typography>
    </div>
  );
};
