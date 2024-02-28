import type { Meta } from "@storybook/react";
import HelloWorld from "../components/HelloWorld";

const meta = {
  title: "Components/HelloWorld",
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const Component = () => {
  return <HelloWorld></HelloWorld>;
};

export const HelloWorld_ = {
  render: () => <Component></Component>,
};
