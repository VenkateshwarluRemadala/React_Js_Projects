import React from "react";
import { mount } from "enzyme";
import App from "./App";
import Counter from '../components/CounterFunction';
import { shallow } from 'enzyme';

describe("Counter Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App/>)
  })


test("render the click event of decrement button of and check the counter value cannot be less than 0" , () => {
  if(wrapper.find("#counter-value").text() === "0"){
     wrapper.find("#decrement-btn").simulate("click")
   expect(wrapper.find("#counter-value").text()).toBe("0")
  //  expect(wrapper.find("#counter-value").text()).toBeGreaterThanOrEqual(0)
  }
})
});