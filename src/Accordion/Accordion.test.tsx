import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Accordion, AccrodionListItem, AccordionProps } from "./Accordion";

type keyboardTestUnit = { key: string, registeredAt: number, expectedValue: boolean };

describe("Component: Accordion", () => {

    const accordionList: Array<AccrodionListItem> = [
        { category: "Item 1", text: { title: "title", desc: "desc" } },
        { category: "Item 2", text: [{ title: "title", desc: "desc" }, { title: "title", desc: "desc" }] },
        { category: "Item 2", text: [{ desc: "desc" }, { desc: "desc" }] }
    ];

    it("Should render", () => {
        const wrapper = shallow(<Accordion list={accordionList} />);
        expect(wrapper).toBeDefined();
    });

    it("Should render custom className and id", () => {
        const className: string = "myAccordionClass";
        const id: string = "myAccordionId";
        const wrapper = shallow(<Accordion list={accordionList} className={className} id={id} />);
        expect(wrapper.hasClass(className)).toBeTruthy();
        expect(wrapper.find(`#${id}`).length).toBeGreaterThan(0);
    });

    it("Should render subheader is included in props", () => {
        const newAccordionList = [...accordionList];
        newAccordionList[0].subHeaderText = "Test subheader";
        const wrapper = shallow(<Accordion list={newAccordionList} />);
        expect(wrapper.find(".with-sub-header").length).toEqual(1);
    });

    it("Should toggle accordion when clicked", () => {
        const wrapper = shallow(<Accordion list={accordionList} />);
        wrapper.find(".accordion-item").first().find(".header-wrapper").simulate("click");
        expect(wrapper.find(".accordion-item").first().hasClass("active")).toBeTruthy();
    });

    it("Should untoggle accordion when clicked again", () => {
        const wrapper = shallow(<Accordion list={accordionList} />);
        wrapper.find(".accordion-item").first().find(".header-wrapper").simulate("click");
        wrapper.find(".accordion-item").first().find(".header-wrapper").simulate("click");
        expect(wrapper.state("active")).toBe(null);
    });

    it("Should untoggle accordion item when clicked on another accordion item", () => {
        const wrapper = shallow(<Accordion list={accordionList} />);
        wrapper.find(".accordion-item").first().find(".header-wrapper").simulate("click");
        wrapper.find(".accordion-item").at(1).find(".header-wrapper").simulate("click");

        expect(wrapper.find(".accordion-item").first().hasClass("active")).toBeFalsy();
        expect(wrapper.find(".accordion-item").at(1).hasClass("active")).toBeTruthy();
        expect(wrapper.state("active")).toBe(1);
    });

    describe("Should be able to toggle accordion using `space` or `enter`", () => {
        let wrapper: ShallowWrapper<AccordionProps>;
        const testList: Array<keyboardTestUnit> = [
            { key: " ", registeredAt: 1, expectedValue: true },
            { key: "space", registeredAt: 1, expectedValue: true },
            { key: "enter", registeredAt: 1, expectedValue: true },
            { key: "backspace", registeredAt: 1, expectedValue: false }, // Should not do anything
        ];

        beforeEach(() => {
            wrapper = shallow(<Accordion list={accordionList} />);
        });

        testList.map((item: keyboardTestUnit) => {
            it(`Testing key [${item.key}]`, () => {
                wrapper.find(".accordion-item").at(1).simulate("keydown", { key: item.key });
                expect(wrapper.find(".accordion-item").at(1).hasClass("active"));
            });
        });
    });
});
