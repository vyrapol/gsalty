<script setup lang="ts">
import { onMounted } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import BasePipeline from "./components/BasePipeline.vue";
import BaseKanban from './components/BaseKanban.vue'
import BasePage from './components/BasePage.vue'
import gsap from "gsap";

onMounted(() => {
  // gsap.fromTo(
  //   ".box",
  //   { x: -100, backgroundColor: "#35495E", repeat: -1, yoyo: true, scale: 1/2 },
  //   {
  //     x: 40,
  //     rotate: "360deg",
  //     backgroundColor: "#41B883",
  //     repeat: -1,
  //     yoyo: true,
  //     scale: 2,
  //   }
  // );
  gsap.to(".box", {
    x: -100,
    backgroundColor: "#35495E",
    repeat: -1,
    yoyo: true,
    scale: 1 / 2,
  });
});
</script>

<template>
  <!-- <div class="flex justify-center">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <div class="box w-10 h-10 bg-red-200"></div>
  <HelloWorld msg="Vite + Vue" /> -->
  <!-- <BaseConfig /> -->
  <!-- <BasePipeline /> -->
  <BaseKanban />
  <!-- <BasePage /> -->
  <!-- SECTION -->
  <!-- GRID
  <section>
    <div class="flex flex-nowrap m-0 gap" v-for="i in 10">
      <div class="w-[200px]">{{ i }}</div>
      <section class="grid grid-flow-col auto-cols-[65px] overflow-x-auto w-100">
        <div class="flex justify-center align-center w-[65px]" v-for="b in 30">
          <span>{{ b }}</span>
        </div>
      </section>
    </div>
  </section> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
