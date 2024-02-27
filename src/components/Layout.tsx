import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      <Meteors className="fixed top-0 left-0" number={30} />
      <motion.main
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 40 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}
