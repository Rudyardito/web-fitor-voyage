const initialState = [
  { idx: 1, pos: 1, text: "1", active: true },
  { idx: 2, pos: 2, text: "2", active: true },
  { idx: 3, pos: 3, text: "3", active: true },
  { idx: 4, pos: 4, text: "4", active: false },
  { idx: 5, pos: 5, text: "5", active: false },
  { idx: 6, pos: 6, text: "6", active: false },
  { idx: 7, pos: 7, text: "7", active: false },
  { idx: 8, pos: 8, text: "8", active: false },
  { idx: 9, pos: 9, text: "9", active: false },
];
console.log(initialState);
console.log("==================");
console.log("SESUDAH IS LEFT");

const isLeft = () => {
  // get carousel yang paling kanan (prevCardIdx)
  let prevCardIdx = initialState
    .filter((ft) => ft.active === true)
    .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))
    .slice(-1)[0].idx;

  // get carousel yang paling kiri (nextCardIdx)
  let nextCardIdx = initialState
    .filter((ft) => ft.active === true)
    .sort((a, b) => (a.pos > b.pos ? 1 : b.pos > a.pos ? -1 : 0))[0].idx;

  if (
    initialState.filter((ft) => ft.idx === 1).filter((ft) => ft.active === true)
  ) {
    console.log(
      initialState
        .filter((ft) => ft.idx === 9)
        .filter((ft) => ft.active === true)
    );
    if (
      initialState
        .filter((ft) => ft.idx === 9)
        .filter((ft) => ft.active === true).length > 0
    ) {
      console.log("masuk sini");
      prevCardIdx = 1;
      nextCardIdx = 8;
    }
  }

  // if ()

  //  nge update yang paling kiri jadi tidak aktif
  initialState.find((f) => f.idx === nextCardIdx).active = false;

  // nge update yang sesudahnya jadi aktif
  // initialState.find((f) => f.idx === prevCardIdx + 1).active = true;
  try {
    initialState.find((f) => f.idx === prevCardIdx + 1).active = true;
  } catch (err) {
    initialState.find((f) => f.idx === 1).active = true;
  }
};

isLeft(); // 2,3,4
isLeft(); // 3,4,5
isLeft(); // 4,5,6
isLeft(); // 5,6,7
isLeft(); // 6,7,8
isLeft(); // 7,8,9
isLeft(); // 8,9,1
// isLeft() // 8,9,1 kenapa? ga ngerti

console.log(initialState);

// console.log(
//     initialState.filter((ft) => ft.idx === 9).filter((ft) => ft.active === true)
// )
