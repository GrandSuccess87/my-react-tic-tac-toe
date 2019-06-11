import axios from "axios";

const PhoenixAPI = {
  request: async () => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/"
    );
    return response.data.spots;
  },

  requestStatus: async (spots, next_player, current_player) => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/status/", {
      params: {
        spots: JSON.stringify(spots).replace(/,/g, ', '),
        next_player: next_player,
        current_player: current_player}
    });
    return response.data.status;
  },

  getStatus: async (marks, next_player, current_player) => {
    let newMarks = PhoenixAPI.addIndices(marks);
    return await PhoenixAPI.requestStatus(newMarks, next_player, current_player);
  },

  requestComputerMove: async(spots, seed, computer, human) => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/computer/", {
      params: {
        spots: JSON.stringify(spots).replace(/,/g, ', '),
        computer: computer,
        human: human,
        seed: seed}
    });
    return response.data.move;
  },

  getComputerMove: async (marks, computer, human) => {
    let newMarks = PhoenixAPI.addIndices(marks);
    let move = await PhoenixAPI.requestComputerMove(newMarks, '', computer, human);
    return PhoenixAPI.moveToBoardIndex(move);
  },

  addIndices: (marks) => {
    let newMarks = marks.map((mark, index) => {
      return mark === '' ? index + 1 : mark;
    });
    return newMarks;
  },

  moveToBoardIndex: (move) => {
    let index = parseInt(move) - 1;
    return index;
  }
};

export default PhoenixAPI;