import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "@/app/_styles/globals.css";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  description: "",
  title: "Monis Rent",
};

const RootLayout = ({ children }: Readonly<React.PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  );
};

export default RootLayout;
