import React from "react";
import "../styles/global.css";
import BaseLayout from "@/layouts/baseLayout";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className=" bg-white">
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
// dark:bg-gradient-to-r from-gray-900 to-black
