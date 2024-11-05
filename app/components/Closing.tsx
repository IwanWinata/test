import Image from "next/image";
import backgroundImage from "../../public/img/closing-bg.png";
import { Typography } from "@mui/material";
export default function Closing() {
  return (
    <div className="relative flex flex-col items-center py-12 bg-[#F8FAFC] min-h-[23.75rem] gap-4 justify-center">
      <Typography className="text-3xl font-semibold">Easy, right?</Typography>
      <Typography className="text-3xl font-semibold">
        Projects with Amani work seamlessly and stress-free.
      </Typography>
      <Typography className="text-3xl font-semibold text-[#77A9BE]">
        We’ve got your back all the way!
      </Typography>
      <Image
        alt=""
        src={backgroundImage}
        className="absolute left-0 top-0 z-1"
        height={300}
      />
    </div>
  );
}
