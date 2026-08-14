import type { Localized } from "@/lib/i18n";
import { fandomCaptions } from "@/lib/fandomCaptions";

export type FandomItem = {
  key: string;
  src: string;
  alt: string;
  caption: Localized;
  rotate: number;
  // desktop (sm+) absolute scatter position, % of container
  top: string;
  left: string;
  // desktop size classes
  sizeDesktop: string;
  aspect: string;
};

type FandomItemInput = Omit<FandomItem, "caption">;

const items: FandomItemInput[] = [
  { key: "hxh", src: "/images/hunter-x-hunter.jpg", alt: "Hunter x Hunter", rotate: -6, top: "0%", left: "0%", sizeDesktop: "w-44 md:w-56 lg:w-60", aspect: "aspect-[2/3]" },
  { key: "one-piece", src: "/images/one-piece.jpg", alt: "One Piece", rotate: 5, top: "4%", left: "26%", sizeDesktop: "w-44 md:w-56 lg:w-60", aspect: "aspect-[2/3]" },
  { key: "jojos", src: "/images/jojos.png", alt: "JoJo's Bizarre Adventure", rotate: -3, top: "0%", left: "52%", sizeDesktop: "w-40 md:w-52 lg:w-56", aspect: "aspect-[2/3]" },
  { key: "about-time", src: "/images/about-time.jpg", alt: "About Time", rotate: 4, top: "6%", left: "78%", sizeDesktop: "w-36 md:w-44 lg:w-48", aspect: "aspect-[2/3]" },
  { key: "rdr2", src: "/images/red-dead-redemption-2.png", alt: "Red Dead Redemption 2", rotate: 4, top: "30%", left: "0%", sizeDesktop: "w-48 md:w-64 lg:w-72", aspect: "aspect-[3/4]" },
  { key: "eternal-sunshine", src: "/images/eternal-sunshine.jpg", alt: "Eternal Sunshine of the Spotless Mind", rotate: -5, top: "28%", left: "34%", sizeDesktop: "w-36 md:w-48 lg:w-52", aspect: "aspect-[2/3]" },
  { key: "scott-pilgrim", src: "/images/scott-pilgrim.jpeg", alt: "Scott Pilgrim vs. the World", rotate: 6, top: "34%", left: "60%", sizeDesktop: "w-36 md:w-48 lg:w-52", aspect: "aspect-[2/3]" },
  { key: "persona-5", src: "/images/persona-5.png", alt: "Persona 5", rotate: -4, top: "34%", left: "84%", sizeDesktop: "w-32 md:w-44 lg:w-48", aspect: "aspect-[2/3]" },
  { key: "finding-emily", src: "/images/finding-emily.jpg", alt: "Finding Emily", rotate: -3, top: "60%", left: "6%", sizeDesktop: "w-36 md:w-48 lg:w-52", aspect: "aspect-[2/3]" },
  { key: "leon", src: "/images/resident-4.png", alt: "Leon Kennedy — Resident Evil 4", rotate: -7, top: "58%", left: "34%", sizeDesktop: "w-40 md:w-52 lg:w-60", aspect: "aspect-[2/3]" },
  { key: "ethan", src: "/images/resident-8.png", alt: "Ethan Winters — Resident Evil Village", rotate: 7, top: "62%", left: "62%", sizeDesktop: "w-40 md:w-52 lg:w-60", aspect: "aspect-[2/3]" },
  { key: "amigos-invisibles", src: "/images/amigos-invisibles.png", alt: "Los Amigos Invisibles", rotate: -5, top: "80%", left: "2%", sizeDesktop: "w-36 md:w-48 lg:w-52", aspect: "aspect-square" },
  { key: "tokyo-ghoul", src: "/images/tokyo-ghoul.png", alt: "Tokyo Ghoul", rotate: 6, top: "84%", left: "28%", sizeDesktop: "w-40 md:w-52 lg:w-56", aspect: "aspect-[2/3]" },
  { key: "severance", src: "/images/severance.png", alt: "Severance", rotate: -4, top: "78%", left: "56%", sizeDesktop: "w-40 md:w-52 lg:w-56", aspect: "aspect-[2/3]" },
  { key: "21-jump-street", src: "/images/21-jump-street.png", alt: "21 Jump Street", rotate: 5, top: "86%", left: "82%", sizeDesktop: "w-36 md:w-48 lg:w-52", aspect: "aspect-[2/3]" },
];

export const fandomItems: FandomItem[] = items.map((item) => ({
  ...item,
  caption: fandomCaptions[item.key],
}));
