import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "A personal portfolio website showcasing projects, skills, and experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
