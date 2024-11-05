// pages/index.js

import { Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import cardImage from "../../public/img/partner-req.png";
import cardImage2 from "../../public/img/partner-req-2.png";
import cardImage3 from "../../public/img/partner-req-3.png";
import cardImage4 from "../../public/img/partner-req-4.png";
import { useContext } from "react";
import { BaseContext } from "../context/BaseContext";

const reqs = [
  {
    icon: cardImage,
    description: {
      id: "Badan usaha wajib pajak",
      en: "It must be a tax-registered business entity.",
    },
  },
  {
    icon: cardImage2,
    description: {
      id: "Perusahaan lebih dari 2 tahun berjalan",
      en: "The company must have been operational for over 2 years.",
    },
  },
  {
    icon: cardImage3,
    description: {
      id: "Dapat menunjukkan portofolio proyek",
      en: "Must be able to provide a project portfolio.",
    },
  },
  {
    icon: cardImage4,
    description: {
      id: "Memiliki izin usaha jasa konstruksi",
      en: "Must have a construction business permit.",
    },
  },
];

export default function PartnershipReq() {
  const ItemContext = useContext(BaseContext);

  return (
    <div className="flex flex-col items-center py-12 bg-white">
      {/* Title */}
      <Typography className="text-3xl font-semibold mb-4">
        {ItemContext.languages === "indonesia"
          ? "Syarat Kontraktor"
          : "Partnership Requirements"}
      </Typography>
      <div className="w-[17.9631rem] h-[0.8125rem] bg-[#B0E788] rounded-full mb-8"></div>

      {/* Requirement Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {reqs.map((req, index) => {
          if (ItemContext.languages === "indonesia") {
            return (
              <RequirementCard
                key={index}
                icon={req.icon}
                bgColor="bg-[#E8F0FE]"
                description={req.description.id}
              />
            );
          } else {
            return (
              <RequirementCard
                key={index}
                icon={req.icon}
                bgColor="bg-[#E8F0FE]"
                description={req.description.en}
              />
            );
          }
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
