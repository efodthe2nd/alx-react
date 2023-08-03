import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";
import { getFooterCopy, getFullYear } from "../utils/utils";

describe("Footer test", () => {
    it("should render without crashing", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });
    it("should render the text Copyright", () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toEqual(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
    });
});