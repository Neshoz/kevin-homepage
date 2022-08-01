import { motion } from "framer-motion";
import Head from "next/head";
import { ReactNode } from "react";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

interface PageProps {
  title: string;
  children: ReactNode;
}

export const Page = ({ children, title }: PageProps) => {
  const t = `${title} - Kevin Nemec`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.25, type: "easeInOut" }}
      style={{ position: "relative", height: "100%" }}
    >
      <>
        <Head>
          <title>{t}</title>
        </Head>
        {children}
      </>
    </motion.article>
  );
};
