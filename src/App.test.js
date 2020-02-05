import Photos from "./Photos";
import Users from "./Users";
import React from "react";
import { render, wait } from "@testing-library/react";

describe("photos", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      var p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json: () => {
            return {
              url: "https://via.placeholder.com/600/92c952"
            };
          }
        });
      });
  
      return p;
    });
  });

  it("fetch with fetch", async () => {
    const { getByTestId, getByText } = render(<Photos />);
  
    expect(getByText(/wait.../i)).not.toBeNull();
  
    await wait(() => {
      expect(getByTestId("url")).toBeInTheDocument()
      expect(global.fetch).toBeCalledTimes(1)
      expect(global.fetch).toBeCalledWith("https://jsonplaceholder.typicode.com/photos/1")
      expect(getByTestId("url")).toHaveTextContent('https://via.placeholder.com/600/92c952')
    });
  });

})

describe("users", () => {
  it("fetch with axios", async () => {
    const { getByTestId, getByText } = render(<Users />);
  
    // expect(getByText(/wait.../i)).not.toBeNull();
  
    // await wait(() => {
    //   expect(getByTestId("url")).toBeInTheDocument()
    //   expect(global.fetch).toBeCalledTimes(1)
    //   expect(global.fetch).toBeCalledWith("https://jsonplaceholder.typicode.com/photos/1")
    //   expect(getByTestId("url")).toHaveTextContent('https://via.placeholder.com/600/92c952')
    // });
  });

})

