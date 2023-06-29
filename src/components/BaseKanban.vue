<template>
  <section class="grid grid-cols-3">
    <div class="bg-red-500 kanban-card">
      <div class="w-28 h-[21px] justify-start items-center gap-2 inline-flex">
        <div class="w-[19px] h-2 bg-blue-600 rounded-xl"></div>
        <div class="text-zinc-900 text-[16px] font-medium capitalize">
          applied
        </div>
        <div class="text-zinc-900 text-[16px] font-medium capitalize">
          ({{ applied.length }})
        </div>
      </div>
      <div class="kanban-item-container">
        <draggable :list="applied" itemKey="name" group="people">
          <template #item="{ element, i }">
            <div
              ref="target"
              class="kanban-item"
              @contextmenu.prevent="onContext($event, i, 'applied', 'test')"
            >
              <section class="relative mb-6">
                <div class="w-[184px] h-[45px] relative">
                  <div
                    class="left-[57px] top-[1px] absolute text-slate-800 text-[16px] font-normal capitalize"
                  >
                    {{ element.name }}
                  </div>
                  <div
                    class="left-[57px] top-[26px] absolute text-zinc-400 text-[12px] font-normal capitalize"
                  >
                    A-001
                  </div>
                  <div class="w-[45px] h-[45px] left-0 top-0 absolute">
                    <div
                      class="w-[45px] h-[45px] left-0 top-0 absolute bg-red-500 rounded-full"
                    ></div>
                    <div
                      class="top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 absolute text-center text-white text-[20px] font-normal capitalize"
                    >
                      dS
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
                  <span class="text-gray-500 text-[14px] font-normal capitalize"
                    >Tags:</span
                  ><span
                    class="text-zinc-900 text-[14px] font-normal capitalize"
                  >
                    Sok Sanrathana</span
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
    <div class="bg-green-500 kanban-card">
      <div class="w-28 h-[21px] justify-start items-center gap-2 inline-flex">
        <div class="w-[19px] h-2 bg-blue-600 rounded-xl"></div>
        <div class="text-zinc-900 text-[16px] font-medium capitalize">test</div>
        <div class="text-zinc-900 text-[16px] font-medium capitalize">
          ({{ test.length }})
        </div>
      </div>
      <div class="kanban-item-container">
        <draggable :list="test" itemKey="name" group="people">
          <template #item="{ element, i }">
            <div
              ref="target"
              class="kanban-item"
              @contextmenu.prevent="onContext($event, i, 'applied', 'test')"
            >
              <section class="relative mb-6">
                <div class="w-[184px] h-[45px] relative">
                  <div
                    class="left-[57px] top-[1px] absolute text-slate-800 text-[16px] font-normal capitalize"
                  >
                    {{ element.name }}
                  </div>
                  <div
                    class="left-[57px] top-[26px] absolute text-zinc-400 text-[12px] font-normal capitalize"
                  >
                    A-001
                  </div>
                  <div class="w-[45px] h-[45px] left-0 top-0 absolute">
                    <div
                      class="w-[45px] h-[45px] left-0 top-0 absolute bg-red-500 rounded-full"
                    ></div>
                    <div
                      class="top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 absolute text-center text-white text-[20px] font-normal capitalize"
                    >
                      dS
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
                  <span class="text-gray-500 text-[14px] font-normal capitalize"
                    >Tags:</span
                  ><span
                    class="text-zinc-900 text-[14px] font-normal capitalize"
                  >
                    Sok Sanrathana</span
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
    <div class="bg-purple-500 kanban-card"></div>
  </section>
  <div class="context-menu" ref="ctx">
    <div
      class="w-[46px] h-16 p-2 bg-purple-50 rounded-lg shadow flex-col justify-start items-start gap-2 inline-flex"
    >
      <div class="text-black text-[12px] font-normal capitalize" @click="move">
        move
      </div>
      <div
        class="h-px w-full bg-gray-200 before:content-[''] before:block before:h-px"
      ></div>
      <div class="text-zinc-900 text-[12px] font-normal capitalize">fails</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, type Ref } from "vue";
const target = ref([]);
const active = ref(0);
const applied = ref([
  { name: "John", id: 1 },
  { name: "Joao", id: 2 },
  { name: "Jean", id: 3 },
  { name: "Gerard", id: 4 },
]);
const test = ref([]);
const from = ref("");
const to = ref("");
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

const onContext = (e, i, fromBoard, toBoard) => {
  const height = ctx.value.offsetHeight;
  const width = ctx.value.offsetWidth + 5;

  const wOver = e.pageX + width > window.innerWidth;
  const hOver = e.pageY + height > window.innerHeight;

  position.pageX = wOver ? e.pageX - width - 5 : e.pageX;
  position.pageY = hOver ? e.pageY - height : e.pageY;
  from.value = fromBoard;
  to.value = toBoard;
  // hide
  hide();
  // show
  setTimeout(show, 50);
};

const move = () => {
  if (from.value === "applied") {
    const pop = applied.value.pop();
    test.value.push(pop);
  }
};

const showMenu = () => {
  alert("use vuetify menu");
};
onMounted(() => {
  window.addEventListener("click", hide);
});
</script>

<style lang="postcss" scoped>
.kanban-card {
  @apply flex flex-col w-full h-full min-h-[700px] text-left p-2 gap-4;
}

.kanban-item-container {
  @apply bg-gray-100 rounded-lg p-2 h-full flex flex-col gap-2;
}

.kanban-item {
  @apply bg-white rounded-lg shadow p-4 relative mb-4;
}

.context-menu {
  opacity: 0;
  position: absolute;
}
</style>
