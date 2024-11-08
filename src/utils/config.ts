import * as yup from "yup";

export const formInvestorSchema = yup.object().shape({
  name: yup.string().required("Nama wajib di isi"),
  noWa: yup
    .string()
    .min(8, "Nomor whatsapp minimal 8")
    .required("Nomor whatsapp wajib di isi"),
  cicilanBulanan: yup
    .number()
    .min(1, "Cicilan bulanan wajib di isi")
    .required("Cicilan bulanan wajib di isi"),
  hargaRumah: yup
    .number()
    .min(1, "Harga rumah wajib di isi")
    .required("Harga rumah wajib di isi"),
  namaPerumahan: yup.string().required("Nama perumahan wajib di isi"),
  lokasi: yup.string().required("Lokasi wajib di isi"),
  kodeReferal: yup.string(),
});

export const formInvestorNewSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nama wajib di isi"),
  noWa: yup
    .string()
    .min(8, "Nomor whatsapp minimal 8")
    .required("Nomor whatsapp wajib di isi"),
  email: yup
    .string()
    .email('Format email salah')
    .required("Email wajib di isi"),
});
