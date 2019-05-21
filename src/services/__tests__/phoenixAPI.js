import fakeAxios from "axios";
import request from "../phoenixAPI";

describe("GET Request", () => {

  it("fetches data from request", async () => {
  // setup
    fakeAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { spots: ["empty board"] }
      })
    );

    // work
    const board = await request("");

    // expect
    expect(board).toEqual(["empty board"]);

  });

  it("calls axios with correct url", async () => {
  // setup
    fakeAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { spots: ["empty board"] }
      })
    );

    // expect
    expect(fakeAxios.get).toHaveBeenCalledTimes(1);
    expect(fakeAxios.get).toHaveBeenCalledWith(
      "https://ttt-json-api.herokuapp.com/"
    );
  });
});
