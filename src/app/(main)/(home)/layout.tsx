import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/_components";

const HomeLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white">
        <Image
          alt="Main Logo"
          height={32}
          src="/images/monis-main.png"
          width={118}
        />
        <Link href="/design">
          <Button>Start Designing</Button>
        </Link>
      </header>

      {children}

      {/* Footer */}
      <footer className="px-6 py-6 border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Monis Workspace. All rights reserved.
      </footer>
    </div>
  );
};

export default HomeLayout;
