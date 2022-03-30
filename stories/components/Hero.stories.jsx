import React from "react";

import { Hero } from "../../components/Hero";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Hero",
	component: Hero,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Hero {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	backgroundColor: "#171717",
	title: "IRIE PIXEL",
};
