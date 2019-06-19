import axios from "axios";

const PhoenixAPI = {
  request: async () => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/"
    );
    return response.data;
  },

  requestStatus: async (spots, next_player, current_player) => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/status/", {
      params: {
        spots: JSON.stringify(spots).replace(/,/g, ', '),
        next_player: next_player,
        current_player: current_player}
    });
    return response.data;
  },

  getStatus: async (marks, next_player, current_player) => {
    let newMarks = PhoenixAPI.addIndices(marks);
    let data = await PhoenixAPI.requestStatus(newMarks, next_player, current_player);
    return data.status;
  },

  requestComputerMove: async (spots, computer, human) => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/computer/", {
      params: {
        spots: JSON.stringify(spots).replace(/,/g, ', '),
        computer: computer,
        human: human}
    });
    return response.data;
  },

  getComputerMove: async (marks, computer, human) => {
    let newMarks = PhoenixAPI.addIndices(marks);
    let data = await PhoenixAPI.requestComputerMove(newMarks, computer, human);
    let move = data.move;
    return PhoenixAPI.moveToBoardIndex(move);
  },

  addIndices: (marks) => {
    let newMarks = marks.map((mark, index) => {
      return mark === '' ? index + 1 : mark;
    });
    return newMarks;
  },

  moveToBoardIndex: (move) => {
    return parseInt(move) - 1;
  }
};

export default PhoenixAPI;