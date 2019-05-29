import axios from "axios";
// import qs from "qs";

const PhoenixAPI = {
  request: async () => {
    const response = await axios.get("https://ttt-json-api.herokuapp.com/"
    );
    return response.data.spots;
  },
  
  requestStatus: async (spots, next_player, current_player) => {
    console.log(`Spots ${spots} Next Player ${next_player} Current Player ${current_player}`)
    const response = await axios.get("https://ttt-json-api.herokuapp.com/status/", {
      params: {
        spots: JSON.stringify(spots).replace(/,/g, ', '),
        next_player: next_player,
        current_player: current_player}
    });
    return response.data.status;
  }
}

export default PhoenixAPI
