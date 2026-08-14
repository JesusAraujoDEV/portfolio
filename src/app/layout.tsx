import type { Metadata } from "next";
import { Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { LightboxProvider } from "@/components/LightboxProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import Atmosphere from "@/components/Atmosphere";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jesús Araujo — Full-Stack Developer",
  description:
    "Portafolio de Jesús Araujo, Full-Stack Web Developer en Valencia, Venezuela.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <Atmosphere />
        <CustomCursor />
        <LocaleProvider>
          <LightboxProvider>{children}</LightboxProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
