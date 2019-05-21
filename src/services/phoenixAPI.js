import axios from "axios";

const request = async () => {
  const response = await axios.get("https://ttt-json-api.herokuapp.com/"
  );
  return response.data.spots;
};

export default request;
