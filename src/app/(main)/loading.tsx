"use client";

import React from "react";

const MainLoading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-3">
        {/* Spinner */}
        <div className="h-10 w-10 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin" />

        {/* Optional text */}
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    </div>
  );
};

export default MainLoading;
