// pages/index.js

import { Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import cardImage from "../../public/img/partner-req.png";
import cardImage2 from "../../public/img/partner-req-2.png";
import cardImage3 from "../../public/img/partner-req-3.png";
import cardImage4 from "../../public/img/partner-req-4.png";

export default function PartnershipReq() {
  return (
    <div className="flex flex-col items-center py-12 bg-white">
      {/* Title */}
      <Typography className="text-3xl font-semibold mb-4">
        Partnership Requirements
      </Typography>
      <div className="w-[17.9631rem] h-[0.8125rem] bg-[#B0E788] rounded-full mb-8"></div>

      {/* Requirement Cards */}
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {/* Card 1 */}
        <RequirementCard
          icon={cardImage}
          bgColor="bg-blue-100"
          description="It must be a tax-registered business entity."
        />
        {/* Card 2 */}
        <RequirementCard
          icon={cardImage2}
          bgColor="bg-green-200"
          description="The company must have been operational for over 2 years."
        />
        {/* Card 3 */}
        <RequirementCard
          icon={cardImage3}
          bgColor="bg-blue-100"
          description="Must be able to provide a project portfolio."
        />
        {/* Card 4 */}
        <RequirementCard
          icon={cardImage4}
          bgColor="bg-purple-100"
          description="Must have a construction business permit."
        />
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
