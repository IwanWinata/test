// pages/index.js

import Image from "next/image";
import backgroundImage from "../../public/img/how-it-works.png";
import { Typography } from "@mui/material";
import { FC } from "react";

export default function HowItWorks() {
  return (
    <div className="relative flex flex-col items-center py-12 bg-white">
      {/* Title */}
      <Typography className="text-3xl font-semibold mb-8">
        How Does it Work?
      </Typography>

      {/* Main Content Grid */}
      <div className="flex flex-wrap justify-center gap-8 w-full relative z-10">
        <StepCard
          step="Step 1"
          title="Register your Company"
          description="Start easily by filling out the form on the Amani platform."
        />
        <StepCard
          step="Step 2"
          title="Verification by Amani"
          description="Amani will verify your registration data."
        />
        <StepCard
          step="Step 3"
          title="Select Projects and Join the Bidding"
          description="Select interested projects and participate in the bidding process."
        />
        <StepCard
          step="Step 4"
          title="Win and Start Your Work"
          description="Win the bid and get started on your project immediately."
        />
        <StepCard
          step="Step 5"
          title="Use Material Financing"
          description="Enjoy the material financing Amani provides to keep your project running smoothly."
        />
        <StepCard
          step="Step 6"
          title="Use Material Financing"
          description="Enjoy the material financing Amani provides to keep your project running smoothly."
        />
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
