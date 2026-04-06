import React from "react";

import { Footer, Main, Navbar } from "../_components";

const BlankPageLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex min-h-full">
      <main className="flex w-full flex-1 flex-col justify-center gap-6 overflow-y-auto px-3 py-4 lg:px-6">
        <Navbar hideActions />
        <Main>{children}</Main>
        <Footer />
      </main>
    </div>
  );
};

export default BlankPageLayout;
