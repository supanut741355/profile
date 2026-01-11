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
  title: "Supanut Laddayam | DevOps Engineer / platform engineer", 
  description: "DevOps engineer specializing in cloud infrastructure, CI/CD pipelines, and automation. Experienced with AWS, Google cloud, Kubernetes, Terraform, and modern DevOps tools.",
  keywords: ["DevOps", "Cloud", "AWS", "Google ", "Kubernetes", "Terraform", "CI/CD"],
  authors: [{ name: "Supanut Laddayam" }],
  openGraph: {
    title: "Supanut Laddayam | DevOps Engineer",
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
