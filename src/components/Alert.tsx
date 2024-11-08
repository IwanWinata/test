import React, { useEffect } from "react";
import alertSuccessGif from "@assets/img/gif/success_animate.gif";
import alertErrorGif from "@assets/img/gif/error_animate.gif";
import Image from "next/image";
import { Typography } from "@mui/material";
interface props {
  open?: boolean;
  title?: string;
  subTitle?: string;
  onClose: () => void;
  duration?: number;
}
export const AlertSuccess: React.FC<props> = ({
  open,
  title,
  subTitle,
  onClose,
  duration,
}) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open) {
      timer = setTimeout(() => {
        onClose();
      }, duration);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [open, duration, onClose]);
  if (open) {
    return (
      <div className={`alert ${open ? "no-scroll" : ""}`}>
        <div className="card-alert">
          <Image
            alt="success-icon"
            src={alertSuccessGif}
            height={100}
            width={100}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "24px",
              color: "#41424A",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#41424A",
              textAlign: "center",
            }}
          >
            {subTitle}
          </Typography>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export const AlertFailed: React.FC<props> = ({
  open,
  title,
  subTitle,
  onClose,
  duration,
}) => {
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (open) {
      timer = setTimeout(() => {
        onClose();
      }, duration);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [open, duration, onClose]);
  if (open) {
    return (
      <div className={`alert ${open ? "no-scroll" : ""}`}>
        <div className="card-alert">
          <Image
            alt="success-icon"
            src={alertErrorGif}
            height={100}
            width={100}
          />
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "24px",
              color: "#41424A",
              textAlign: "center",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              color: "#41424A",
              textAlign: "center",
            }}
          >
            {subTitle}
          </Typography>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
