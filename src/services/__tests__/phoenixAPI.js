import fakeAxios from "axios";
import PhoenixApi from "../phoenixAPI";

describe("GET Request", () => {

  it("fetches data from request", async () => {
  // setup
    fakeAxios.get.mockImplementation(() =>
      Promise.resolve({
        data: { spots: ["empty board"]}
      })
    );

    // work
    const board = await PhoenixApi.request("");

    // expect
    expect(board).toEqual(["empty board"]);

  });

  it("calls axios with correct url", async () => {

    // expect
    expect(fakeAxios.get).toHaveBeenCalledWith(
      "https://ttt-json-api.herokuapp.com/"
    );
  });

});


describe("GET status of the game", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  })

  it("fetches data for a game in progress", async () => {
    // setup
      fakeAxios.get.mockImplementation(() =>
        Promise.resolve({
          data: { status: ["in progress"] }
        })
      );

      // work
      const status = await PhoenixApi.requestStatus(["X", "O", "X", "O", "O", "X", "O", "8", "9"], "X", "O");

      // expect
      expect(status).toEqual(["in progress"]);

    });

  it("calls axios with correct url and parameters", async () => {
    //setup
    const spots = ["X", "O", "X",
                   "O", "O", "X",
                   "O", "8", "9"]

    // expect
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
  })
})