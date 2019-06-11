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

  addIndices: (marks) => {
    let newMarks = marks.map((mark, index) => {
      return mark === '' ? index + 1 : mark;
    });
    return newMarks;
  }
};

export default PhoenixAPI;