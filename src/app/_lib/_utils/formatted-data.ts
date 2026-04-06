export const formatUSD = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    minimumFractionDigits: 0,
    style: "currency",
  }).format(amount);
};
