import * as yup from "yup";

export const contractorSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  company_name: yup.string().required("Company name is required"),
  whatsapp_number: yup
    .string()
    .min(8, "Whatsapp number must be 8 digits")
    .required("Whatsapp number is required"),
  email: yup
    .string()
    .email("Wrong email format")
    .required("Email is required"),
});

