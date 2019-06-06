export default class Board {
  currentSpots = ["","","","","","","","",""];

  makeMark = (index, symbol) => {
    this.currentSpots[index] = symbol;
  }

  availableIndices = () => {
    let availableIndices = [];
    this.currentSpots.forEach((spot, index) => {
      if(spot === ""){
        availableIndices.push(index);
      }
    });
    return availableIndices;
  }

  marks = () => {
    return this.currentSpots;
  }
}
