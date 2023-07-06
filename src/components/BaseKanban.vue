<template>
  <section class="grid gap-4" :class="`grid-cols-${items.length}`">
    <div v-for="(card, index) in items" :key="index" class="kanban-card">
      <div class="title">
        <div
          class="w-[19px] h-2 rounded-xl"
          :style="{ backgroundColor: card.hr_recruitment_pipeline_step.color }"
        ></div>
        <div class="text-zinc-900 text-[16px] font-medium capitalize">
          {{ card.hr_recruitment_pipeline_step.title }}
        </div>
        <div class="text-zinc-900 text-[16px] font-medium capitalize">
          ({{ card.boards.length }})
        </div>
      </div>
      <div class="kanban-item-container">
        <draggable
          :list="card.boards"
          itemKey="name"
          group="people"
          class="h-full"
          :move="doMove"
          :data-index="index"
          :sort="false"
          :disabled="!props.allowDrag"
        >
          <template #item="{ element }">
            <div
              ref="target"
              class="kanban-item"
              @contextmenu.prevent="onContext($event, card, element)"
            >
              <section class="relative mb-6">
                <div class="w-[184px] h-[45px] relative">
                  <div
                    class="left-[57px] top-[1px] absolute text-slate-800 text-[16px] font-normal capitalize"
                  >
                    {{ element.employee_info.full_name }}
                  </div>
                  <div
                    class="left-[57px] top-[26px] absolute text-zinc-400 text-[12px] font-normal capitalize"
                  >
                    {{ element.employee_info.tags }}
                  </div>
                  <div class="w-[45px] h-[45px] left-0 top-0 absolute">
                    <div
                      class="w-[45px] h-[45px] left-0 top-0 absolute bg-red-500 rounded-full"
                    ></div>
                    <div
                      class="top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 absolute text-center text-white text-[20px] font-normal capitalize"
                    >
                      {{ element.employee_info.full_name }}
                    </div>
                  </div>
                </div>
                <div
                  class="w-6 h-6 right-2 top-2 absolute bg-zinc-300"
                  @click="showMenu"
                >
                  dot
                </div>
              </section>
              <section class="relative mb-4">
                <div>
                  <span class="text-gray-500 text-[12px] font-normal capitalize"
                    >Tags: </span
                  ><span
                    class="text-zinc-900 text-[12px] font-normal capitalize"
                  >
                    {{ element.tags }}</span
                  >
                </div>
                <div class="w-6 h-6 right-2 top-2 absolute bg-zinc-300"></div>
              </section>
              <section class="flex gap-2">
                <div
                  class="w-[71px] h-5 px-1.5 py-0.5 bg-neutral-100 rounded justify-start items-start gap-2 inline-flex"
                >
                  <div class="text-blue-600 text-[12px] font-normal capitalize">
                    phone call
                  </div>
                </div>
                <div
                  class="w-[42px] h-5 px-1.5 py-0.5 bg-neutral-100 rounded justify-start items-start gap-2 inline-flex"
                >
                  <div class="text-blue-600 text-[12px] font-normal capitalize">
                    email
                  </div>
                </div>
                <div
                  class="w-[79px] h-[18px] justify-start items-center gap-1 inline-flex"
                >
                  <div class="w-4 h-4 relative">
                    <div
                      class="w-4 h-4 left-0 top-0 absolute bg-zinc-300"
                    ></div>
                  </div>
                  <div class="text-blue-600 text-[14px] font-normal capitalize">
                    Add task
                  </div>
                </div>
              </section>
            </div>
          </template>
        </draggable>
      </div>
    </div>
  </section>
  <div class="context-menu" ref="ctx">
    <slot
      name="action"
      :item="{
        ...currentBoard,
        title: currentCard?.hr_recruitment_pipeline_step?.title,
      }"
    ></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, type Ref } from "vue";
import draggable from "vuedraggable";

type IProps = {
  /**
   * Allow dragging and dropping
   */
  allowDrag: boolean;
  /**
   * Allow using context menu to display actions
   */
  allowContext: boolean;
  /**
   * During drag and drop should enable ability to skip card
   */
  allowSkip: boolean;
  /** 
    * Items essential for rendering boards (is required)
    */
  items: Array<any>;
};

const props = withDefaults(defineProps<IProps>(), {
  allowDrag: false,
  allowContext: false,
  allowSkip: false,
});
const currentCard = ref();
const currentBoard = ref();
const ctx: Ref<HTMLElement> = ref();
const position = reactive({
  pageX: 0,
  pageY: 0,
});
const hide = () => {
  if (ctx.value == null) return;
  ctx.value.style.cssText = `
    opacity: 0;
    transform: scale(0);
    top: ${position.pageY}px;
    left: ${position.pageX}px;
  `;
};

const show = () => {
  if (ctx.value == null) return;
  ctx.value.style.cssText = `
    opacity: 1;
    transform: scale(1);
    top: ${position.pageY}px;
    left: ${position.pageX}px;
  `;
};

const onContext = (e: MouseEvent, card, element) => {
  if (!props.allowContext) return false;
  e.preventDefault();
  const height = ctx.value.offsetHeight;
  const width = ctx.value.offsetWidth + 5;

  const wOver = e.pageX + width > window.innerWidth;
  const hOver = e.pageY + height > window.innerHeight;

  position.pageX = wOver ? e.pageX - width - 5 : e.pageX;
  position.pageY = hOver ? e.pageY - height : e.pageY;
  currentCard.value = element;
  currentBoard.value = element;
  // hide
  hide();
  // show
  setTimeout(show, 50);
};

const showMenu = () => {
  alert("use vuetify menu");
};

const doMove = (el: any) => {
  const { from, to } = el;
  const isAllow =
    Math.abs(from.dataset.index - to.dataset.index) <= 1 || props.allowSkip;
  if (!isAllow) return false;
};

onMounted(() => {
  if (props.allowContext) window.addEventListener("click", hide);
});
</script>

<style lang="postcss" scoped>
.kanban-card {
  @apply flex flex-col w-full h-full min-h-[700px] text-left p-2;
}

.kanban-item-container {
  @apply bg-gray-100 dark:bg-blue-500 p-2 h-full flex flex-col gap-2;
}

.kanban-item {
  @apply bg-white rounded-lg shadow p-4 relative mb-4 drop-shadow;
}

.context-menu {
  opacity: 0;
  position: absolute;
}

.title {
  @apply w-full min-h-[21px] justify-start items-center gap-2 inline-flex sticky -top-0.5 z-10 bg-gray-100 dark:bg-blue-400 rounded-t-lg p-2 before:bg-gray-500;
}

.title::before {
  content: "";
  position: absolute;
  display: block;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  opacity: 0.2;
}
</style>
