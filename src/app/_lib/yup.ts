// lib/yupConfig.ts
import * as yup from "yup";

yup.setLocale({
  mixed: {
    notType: "${label} tidak valid",
    oneOf: ({ label, spec }) =>
      `${label} harus sama dengan ${spec?.meta?.labels?.label1}`,
    required: "${label} wajib diisi",
  },
  number: {
    integer: "${label} harus bilangan bulat",
    max: "${label} maksimal ${max}",
    min: "${label} minimal ${min}",
  },
  string: {
    email: "${label} tidak valid",
    matches: "${label} harus berupa angka atau angka desimal yang valid",
    max: "${label} maksimal ${max} karakter",
    min: "${label} minimal ${min} karakter",
  },
});

export default yup;
