import React from "react";
import Header from "./header";

type DefaultLayoutProps = { children: React.ReactNode };

export default function Layout({ children }: DefaultLayoutProps) {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      {children}
    </div>
  );
}
