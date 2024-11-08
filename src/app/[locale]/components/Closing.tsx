import Image from "next/image";
import backgroundImage from "@/public/img/closing-bg.png";
import { Typography } from "@mui/material";
import { useTranslations } from "next-intl";
export default function Closing() {
  const t = useTranslations("Closing");

  return (
    <div className="relative flex flex-col items-center py-12 bg-[#F8FAFC] min-h-[23.75rem] gap-4 justify-center">
      <Typography className="text-3xl font-semibold">{t("line1")}</Typography>
      <Typography className="text-3xl font-semibold">{t("line2")}</Typography>
      <Typography className="text-3xl font-semibold text-[#77A9BE]">
        {t("line3")}
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
