import fakeAxios from "axios";
import PhoenixApi from "../phoenixAPI";

describe("GET Request", () => {

  it("fetches data from request", async () => {
    fakeAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { spots: ["empty board"]}
      })
    );

    const data = await PhoenixApi.request("");

    expect(data.spots).toEqual(["empty board"]);

  });

  it("calls axios with correct url", async () => {

    expect(fakeAxios.get).toHaveBeenCalledWith(
      "https://ttt-json-api.herokuapp.com/"
    );
  });

});


describe("GET status of the game", () => {

  it("fetches data for a game in progress", async () => {
    fakeAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { status: ["in progress"] }
      })
    );

    const data = await PhoenixApi.requestStatus(["X", "O", "X", "O", "O", "X", "O", "8", "9"], "X", "O");

    expect(data.status).toEqual(["in progress"]);

  });

  it("calls axios with correct url and parameters", async () => {
    const spots = ["X", "O", "X",
      "O", "O", "X",
      "O", "8", "9"];

    expect(fakeAxios.get).toHaveBeenCalledWith(
      "https://ttt-json-api.herokuapp.com/status/",
      {
        params: {
          spots: JSON.stringify(spots).replace(/,/g, ', '),
          current_player: "O",
          next_player: "X"
        }
      }
    );
  });
});

describe("GET computer move", () => {
  it("returns computer's move for a game", async () => {
    fakeAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { move: "3" }
      })
    );

    const data = await PhoenixApi.requestComputerMove(["X", "O", "3", "O", "O", "X", "O", "8", "9"], "X", "O");

    expect(data.move).toEqual("3");

  });

  it("calls axios with correct url and parameters", async () => {
    const spots = ["X", "O", "3",
      "O", "O", "X",
      "O", "8", "9"];

    expect(fakeAxios.get).toHaveBeenCalledWith(
      "https://ttt-json-api.herokuapp.com/computer/",
      {
        params: {
          spots: JSON.stringify(spots).replace(/,/g, ', '),
          computer: "X",
          human: "O"
        }
      }
    );
  });
});
