import Footer from "@/components/footer/footer";
import NavBar from "@/components/navbar/navbar";
import React, { type ReactNode } from "react";

const BaseLayout = ({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
