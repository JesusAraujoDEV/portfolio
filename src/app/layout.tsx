import type { Metadata } from "next";
import {
  Space_Grotesk,
  Geist_Mono,
  Anton,
  Bungee,
  Black_Ops_One,
  Limelight,
  Chelsea_Market,
  Shadows_Into_Light,
} from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import { LightboxProvider } from "@/components/LightboxProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import { NavigatorProvider } from "@/components/NavigatorProvider";
import FloatingNavigator from "@/components/FloatingNavigator";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Display fonts para el efecto tambaleante del nombre en el Hero.
const anton = Anton({ variable: "--font-anton", weight: "400", subsets: ["latin"], display: "swap" });
const bungee = Bungee({ variable: "--font-bungee", weight: "400", subsets: ["latin"], display: "swap" });
const blackOps = Black_Ops_One({ variable: "--font-blackops", weight: "400", subsets: ["latin"], display: "swap" });
const limelight = Limelight({ variable: "--font-limelight", weight: "400", subsets: ["latin"], display: "swap" });
const chelsea = Chelsea_Market({ variable: "--font-chelsea", weight: "400", subsets: ["latin"], display: "swap" });
const shadows = Shadows_Into_Light({ variable: "--font-shadows", weight: "400", subsets: ["latin"], display: "swap" });

const fontVars = [
  spaceGrotesk.variable,
  geistMono.variable,
  anton.variable,
  bungee.variable,
  blackOps.variable,
  limelight.variable,
  chelsea.variable,
  shadows.variable,
].join(" ");

export const metadata: Metadata = {
  title: "Jesús Araujo — Full-Stack Developer",
  description:
    "Portafolio de Jesús Araujo, Full-Stack Web Developer en Valencia, Venezuela.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      data-blood="pink"
      className={`${fontVars} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <CustomCursor />
        <LocaleProvider>
          <NavigatorProvider>
            <LightboxProvider>{children}</LightboxProvider>
            <FloatingNavigator />
          </NavigatorProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
