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
        spots: spots,
        next_player: next_player,
        current_player: current_player
      }
    });
    
    return response.data.status;
  }
}

export default PhoenixAPI
