// pages/index.tsx

import { TextField, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { FC } from "react";
import { useTranslations } from "next-intl";

const Form: FC = () => {
  const t = useTranslations("Form");

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#DBF5FF]">
      <div className="flex gap-8 w-full px-8 md:px-0 justify-center">
        {/* Left Section */}
        <div className="flex flex-col justify-center max-w-[33.5rem]">
          <Typography className="text-[2.25rem] font-semibold mb-4">
            {t("title")}
          </Typography>
        </div>

        {/* Right Section (Form) */}
        <form className="flex flex-col gap-4 min-w-[38.125rem]">
          <div>
            <Typography className="block text-md font-medium text-[#41424A] mb-1">
              Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              sx={{ border: "none" }}
              placeholder="Muhammad Abdul"
              InputProps={{
                style: { backgroundColor: "#E8F0FE" },
              }}
            />
          </div>
          <div>
            <Typography className="block text-md font-medium text-[#41424A] mb-1">
              Company Name
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="Muhammad Abdul"
              InputProps={{
                style: { backgroundColor: "#E8F0FE" },
              }}
            />
          </div>
          <div>
            <Typography className="block text-md font-medium text-[#41424A] mb-1">
              Whatsapp
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="+62"
              InputProps={{
                style: { backgroundColor: "#E8F0FE" },
              }}
            />
          </div>
          <div>
            <Typography className="block text-md font-medium text-[#41424A] mb-1">
              Email
            </Typography>
            <TextField
              variant="outlined"
              fullWidth
              placeholder="john@gmail.com"
              InputProps={{
                style: { backgroundColor: "#E8F0FE" },
              }}
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            className="mt-4 bg-blue-900 text-white py-2 rounded-xl"
          >
            Register Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
