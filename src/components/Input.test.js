import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";

//we're gonna use the it command instead of test, because we're testing a component

// //it just says there's this event,
// //describe describes that event.
// describe("clickButton", () => {
//   const { queryByTitle } = render(<Input />);
//   const btn = queryByTitle("getUserName");
//   expect(btn).toBeTruthy();
// });
// //it just says there's this event,
// //describe describes that event.
// describe("clickButton", ()=>{
//     it("onClick", ()=>{
//     const {queryByTitle}= render(<Button/>);
//     const btn= queryByTitle("dummyButton);
//     //state before the fire event
//     expect(btn.innerHTML).toBe("Press Here");
//     //fire event
//     fireEvent.click(btn)
//     //state after the fire event
//     expect(btn.innerHTML).toBe("Button Clicked");
//     })

//     })

describe("clickButton", () => {
  it("onClick", () => {
    const { queryByTitle } = render(<Input />);
    const btn = queryByTitle("getUserName");
    const forms = queryByTitle("messageForm");
    //state before the fire event
    expect(forms).toBeFalsy();
    // fire event
    fireEvent.click(btn);
    //state after the fire event
    expect(forms).toBeFalsy();
  });
});
