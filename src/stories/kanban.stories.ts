import type { Meta, StoryObj } from "@storybook/vue3";

import BaseKanban from "../components/BaseKanban.vue";
import data from "../kanban.json";

const slot =
  `<ul class="bg-zinc-100 dark:bg-blue-400 p-2 text-zinc-700 dark:text-white rounded-lg"><li>Move</li><hr class="my-1" /><li>Fails</li></ul>`;

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Example/Kanban",
  component: BaseKanban,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"], // default value
  parameters: {
    slots: {
      action: {
        description: 'Action Slot',
        template: slot,
      },
    },
  }
} satisfies Meta<typeof BaseKanban>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */

export const allowDrag: Story = {
  args: {
    items: data,
    allowDrag: true,
    allowContext: false,
    allowSkip: false,
  },
};

export const allowContext: Story = {
  args: {
    items: data,
    allowDrag: false,
    allowContext: true,
    allowSkip: false,
  },
};

export const allowSkipDrag: Story = {
  args: {
    items: data,
    allowDrag: true,
    allowSkip: true,
  },
};
