// 3 rows x 2 cols inside one bounding rectangle, widths alternating 70/30 so
// the grid reads as a tangram, not a uniform table. Six slots for six
// projects — add a row here if a 7th project shows up.
export const PROJECT_LAYOUT = [
  { top: "0%", left: "0%", width: "70%", height: "33.334%" },
  { top: "0%", left: "70%", width: "30%", height: "33.334%" },
  { top: "33.333%", left: "0%", width: "30%", height: "33.334%" },
  { top: "33.333%", left: "30%", width: "70%", height: "33.334%" },
  { top: "66.666%", left: "0%", width: "70%", height: "33.334%" },
  { top: "66.666%", left: "70%", width: "30%", height: "33.334%" },
] as const;
