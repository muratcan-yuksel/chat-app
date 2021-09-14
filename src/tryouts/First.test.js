import First from "./First";
import { render, fireEvent } from "@testing-library/react";

//this is problmatic
// it("did component rendered?", () => {
//   const { queryByTitle } = render(<First />);
//   const btn = queryByTitle("button");
//   expect(btn).toBeTruthy;
// });

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<First />);
    const btn = queryByTitle("buton");
    const para = queryByTitle("para");
    expect(para.textContent).toEqual("I'll change");
    fireEvent.click(btn);
    expect(para.textContent).toEqual("told ya");
  });
});
