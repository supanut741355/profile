import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/app/components/layout/Navigation";
import Footer from "@/app/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe | Senior DevOps Engineer",
  description: "DevOps engineer specializing in cloud infrastructure, CI/CD pipelines, and automation. Experienced with AWS, Azure, Kubernetes, Terraform, and modern DevOps tools.",
  keywords: ["DevOps", "Cloud", "AWS", "Azure", "Kubernetes", "Terraform", "CI/CD"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe | Senior DevOps Engineer",
    description: "DevOps engineer specializing in cloud infrastructure, CI/CD pipelines, and automation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
