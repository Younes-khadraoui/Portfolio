import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Meteors } from "./ui/meteors";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <Meteors className="fixed top-0 left-0" number={30} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
