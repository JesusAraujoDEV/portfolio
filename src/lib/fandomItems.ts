export type FandomItem = {
  key: string;
  src: string;
  alt: string;
  caption: string;
  rotate: number;
  // desktop (sm+) absolute scatter position, % of container
  top: string;
  left: string;
  // desktop size classes
  sizeDesktop: string;
  aspect: string;
};

export const fandomItems: FandomItem[] = [
  {
    key: "hxh",
    src: "/images/hunter-x-hunter.jpg",
    alt: "Hunter x Hunter",
    caption:
      "La amo demasiado — me la he visto como 7 veces. Mi arco favorito es Greed Island, y el ending de esa etapa (la canción) me sigue dando escalofríos.",
    rotate: -6,
    top: "0%",
    left: "0%",
    sizeDesktop: "w-44 md:w-56 lg:w-60",
    aspect: "aspect-[2/3]",
  },
  {
    key: "one-piece",
    src: "/images/one-piece.jpg",
    alt: "One Piece",
    caption: "La voy a amar siempre. Sanji es mi personaje favorito, sin competencia.",
    rotate: 5,
    top: "4%",
    left: "26%",
    sizeDesktop: "w-44 md:w-56 lg:w-60",
    aspect: "aspect-[2/3]",
  },
  {
    key: "jojos",
    src: "/images/jojos.png",
    alt: "JoJo's Bizarre Adventure",
    caption: "Amo JoJo's y su estética. La parte 4 es mi favorita — Josuke es mi JoJo favorito, y Kira mi villano favorito.",
    rotate: -3,
    top: "0%",
    left: "52%",
    sizeDesktop: "w-40 md:w-52 lg:w-56",
    aspect: "aspect-[2/3]",
  },
  {
    key: "about-time",
    src: "/images/about-time.jpg",
    alt: "About Time",
    caption: "No me canso de verla, la repito seguido. Amo el ambiente inglés que tiene toda la película.",
    rotate: 4,
    top: "6%",
    left: "78%",
    sizeDesktop: "w-36 md:w-44 lg:w-48",
    aspect: "aspect-[2/3]",
  },
  {
    key: "rdr2",
    src: "/images/red-dead-redemption-2.png",
    alt: "Red Dead Redemption 2",
    caption: "Ahorita la estoy jugando y amo cómo es la banda (la gang) — se siente real.",
    rotate: 4,
    top: "30%",
    left: "0%",
    sizeDesktop: "w-48 md:w-64 lg:w-72",
    aspect: "aspect-[3/4]",
  },
  {
    key: "eternal-sunshine",
    src: "/images/eternal-sunshine.jpg",
    alt: "Eternal Sunshine of the Spotless Mind",
    caption: "Me destroza el alma cada vez. Es tan cruda y tan linda al mismo tiempo.",
    rotate: -5,
    top: "28%",
    left: "34%",
    sizeDesktop: "w-36 md:w-48 lg:w-52",
    aspect: "aspect-[2/3]",
  },
  {
    key: "scott-pilgrim",
    src: "/images/scott-pilgrim.jpeg",
    alt: "Scott Pilgrim vs. the World",
    caption: "La amo por la estética, el sentido del humor y la historia.",
    rotate: 6,
    top: "34%",
    left: "60%",
    sizeDesktop: "w-36 md:w-48 lg:w-52",
    aspect: "aspect-[2/3]",
  },
  {
    key: "persona-5",
    src: "/images/persona-5.png",
    alt: "Persona 5",
    caption: "Toda la historia, todo lo que puedes hacer, la magia, la estética, las canciones — lo amo completo.",
    rotate: -4,
    top: "34%",
    left: "84%",
    sizeDesktop: "w-32 md:w-44 lg:w-48",
    aspect: "aspect-[2/3]",
  },
  {
    key: "finding-emily",
    src: "/images/finding-emily.jpg",
    alt: "Finding Emily",
    caption: "La vi hace poco y ya voy por la segunda vuelta. Amo su estética y esa vibra urbana que tiene.",
    rotate: -3,
    top: "60%",
    left: "6%",
    sizeDesktop: "w-36 md:w-48 lg:w-52",
    aspect: "aspect-[2/3]",
  },
  {
    key: "leon",
    src: "/images/resident-4.png",
    alt: "Leon Kennedy — Resident Evil 4",
    caption:
      "Resident Evil 4 es de mis favoritos — Leon es uno de mis personajes preferidos de siempre, junto con Grace y Ada. Luis también me encanta. Y la acción... nada se compara.",
    rotate: -7,
    top: "58%",
    left: "34%",
    sizeDesktop: "w-40 md:w-52 lg:w-60",
    aspect: "aspect-[2/3]",
  },
  {
    key: "ethan",
    src: "/images/resident-8.png",
    alt: "Ethan Winters — Resident Evil Village",
    caption:
      "Resident Evil 8 me marcó — Ethan es de mis personajes favoritos, y el final me hizo llorar bastante. Cómo protege a Rose es de lo más lindo que he visto en un videojuego.",
    rotate: 7,
    top: "62%",
    left: "62%",
    sizeDesktop: "w-40 md:w-52 lg:w-60",
    aspect: "aspect-[2/3]",
  },
];
