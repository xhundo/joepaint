import type { Metadata } from "next";
import { inter, lexend } from "@/app/fonts/font";
import { Suspense } from "react";
import { PHProvider, PostHogPageView } from "./providers/Providers";

import "./globals.css";
import "./swipi.css";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "Joe's Painting | Interior & Exterior Painting Services in Florida",
  description:
    "Joe's Painting is a trusted painting company in Florida, offering professional interior and exterior painting services for residential and commercial properties. Contact us for a free estimate today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexend.variable} scroll-smooth`}
    >
      <Suspense>
        <PostHogPageView />
      </Suspense>
      <PHProvider>
        <body className={`bg-primary`}>{children}</body>
      </PHProvider>
    </html>
  );
}
