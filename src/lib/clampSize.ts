/** Escala (w, h) a que el lado mayor caiga en [min, max], preservando el
 * aspecto — usado para que el navegante flotante muestre el tamaño real que
 * se dibujó, sin quedar diminuto ni desbordar la pantalla. */
export function clampSize(w: number, h: number, min = 56, max = 220) {
  const longest = Math.max(w, h, 1);
  const scale = longest > max ? max / longest : longest < min ? min / longest : 1;
  return { width: w * scale, height: h * scale };
}
