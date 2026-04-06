export const formatRupiah = (amount: number) => {
  return new Intl.NumberFormat("id-ID", {
    currency: "IDR",
    minimumFractionDigits: 0,
    style: "currency",
  }).format(amount);
};
