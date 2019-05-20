import mockAxios from "axios";
import request from "../phoenixAPI";

it("fetches data from request", async () => {
  // setup
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: { spots: ["empty board"] }
    })
  );

  // work
  const board = await request("");

  // expect
  expect(board).toEqual(["empty board"]);
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://ttt-json-api.herokuapp.com/"
  );
});
