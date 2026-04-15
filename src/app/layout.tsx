import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harish Mucherla — Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer with 9+ years of experience building scalable web applications in healthcare and telecom. Open to opportunities in the US and India.",
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Healthcare",
    "Telecom",
    "UI Developer",
  ],
  authors: [{ name: "Harish Mucherla" }],
  openGraph: {
    title: "Harish Mucherla — Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer with 9+ years building web applications in healthcare and telecom.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="bg-mesh" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
