import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeInitializer from "@/components/theme&effects/ThemeInitializer";
import MouseShadow from "@/components/theme&effects/MouseShadow";
import Navigation from "@/components/Navigation";
import { Ubuntu_Mono } from "next/font/google";
import Footer from "@/components/Footer"

// -- font-customization -- //
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const ubuntuMono = Ubuntu_Mono({
    weight: ["400", "700"], // Regular and Bold (or add others as needed)
    subsets: ["latin"],
    variable: "--font-ubuntu-mono",
});

// -- adding meta -- //
export const metadata: Metadata = {
  title: "Egon",
  description: "Egon's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ubuntuMono.variable} antialiased  `}
      >
      {/* -- theme -- */}
      <ThemeInitializer/>
      {/* -- cursor shadow -- */}
      <MouseShadow/>
        <div className={"flex flex-col justify-center items-center "}>
            {/* -- navigation -- */}
            <Navigation/>
                {children}
            {/* -- Footer -- */}
            <Footer/>
        </div>
      </body>
    </html>
  );
}
