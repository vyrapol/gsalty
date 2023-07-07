import type { Meta, StoryObj } from "@storybook/vue3";

import BasePipeChild from "../components/BasePipeChild.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Example/PipeChild",
  component: BasePipeChild,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"], // default value
} satisfies Meta<typeof BasePipeChild>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

//👇 The ListTemplate construct will be spread to the existing stories.
export const PipeTemplate: Story = {
  render: (args) => ({
    components: { BasePipeChild },
    setup() {
      return { ...args };
    },
    template: `
      <ul class="flex mt-2 relative gap">
        <li v-for="i in 4">
          <BasePipeChild v-bind="args" />
        </li>
      </ul>
    `,
  }),
};

export const PipeLineChild: Story = {};

export const MorePipeLineChild: Story = {
  ...PipeTemplate,
  args: {
    color: '#11FF00',
    marginRight: '-7.8px'
  }
};
