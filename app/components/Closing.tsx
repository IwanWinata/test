import Image from "next/image";
import backgroundImage from "../../public/img/closing-bg.png";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { BaseContext } from "../context/BaseContext";
export default function Closing() {
  const ItemContext = useContext(BaseContext);

  return (
    <div className="relative flex flex-col items-center py-12 bg-[#F8FAFC] min-h-[23.75rem] gap-4 justify-center">
      {ItemContext.languages === "indonesia" ? (
        <>
          <Typography className="text-3xl font-semibold">
            Mudah banget, kan?
          </Typography>
          <Typography className="text-3xl font-semibold">
            Proyek bareng Amani jadi lancar tanpa ribet.
          </Typography>
          <Typography className="text-3xl font-semibold text-[#77A9BE]">
            Kami siap dukung penuh!
          </Typography>
        </>
      ) : (
        <>
          <Typography className="text-3xl font-semibold">
            Easy, right?
          </Typography>
          <Typography className="text-3xl font-semibold">
            Projects with Amani work seamlessly and stress-free.
          </Typography>
          <Typography className="text-3xl font-semibold text-[#77A9BE]">
            We’ve got your back all the way!
          </Typography>
        </>
      )}

      <Image
        alt=""
        src={backgroundImage}
        className="absolute left-0 top-0 z-1"
        height={300}
      />
    </div>
  );
}
