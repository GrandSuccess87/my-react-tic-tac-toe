export default class Rules {

chunk = (array, size) => {
  const chunk_arr = [];
  let index = 0;
  while(index < array.length) {
    chunk_arr.push(array.slice(index, index+size));
    index+=size;
  }
  console.log(`chunk array: ${chunk_arr}`);
  return chunk_arr;

}

checkRow = (symbol1, symbol2, symbol3) => {
  if(symbol1 === symbol2 && symbol2 === symbol3) {
    return `${symbol1} WON`;
  } else {
    return `KEEP TRYING`;
  }
}

checkFirstRow = (currentBoard) => {
  let chunk_arr = this.chunk(currentBoard, 3);
  return this.checkRow(chunk_arr[0][0], chunk_arr[0][1], chunk_arr[0][2]);

};

checkSecondRow = (currentBoard) => {
  let chunk_arr = this.chunk(currentBoard, 3);
  return this.checkRow(chunk_arr[1][0], chunk_arr[1][1], chunk_arr[1][2]);
}

checkThirdRow = (currentBoard) => {
  let chunk_arr = this.chunk(currentBoard, 3);
  return this.checkRow(chunk_arr[2][0], chunk_arr[2][1], chunk_arr[2][2]);
}
}
