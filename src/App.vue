<script setup lang="ts">
import { onMounted, ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import BasePipeline from "./components/BasePipeline.vue";
import BaseKanban from "./components/BaseKanban.vue";
import BasePage from "./components/BasePage.vue";
import gsap from "gsap";
import data from "./kanban.json";
import BaseReveal from "./components/BaseReveal.vue";

const items = ref(data);
const buttonenabled = ref(true);
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
  // gsap.to(".box", {
  //   x: -100,
  //   backgroundColor: "#35495E",
  //   repeat: -1,
  //   yoyo: true,
  //   scale: 1 / 2,
  // });
  // const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
  // const themeToggleLightIcon = document.getElementById(
  //   "theme-toggle-light-icon"
  // );

  // Change the icons inside the button based on previous settings
  // if (
  //   localStorage.getItem("color-theme") === "dark" ||
  //   (!("color-theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   themeToggleLightIcon.classList.remove("hidden");
  // } else {
  //   themeToggleDarkIcon.classList.remove("hidden");
  // }

  // var themeToggleBtn = document.getElementById("theme-toggle");

  // themeToggleBtn.addEventListener("click", function () {
  //   console.log(buttonenabled.value, "enabel please");
  //   // toggle icons inside button
  //   themeToggleDarkIcon.classList.toggle("hidden");
  //   themeToggleLightIcon.classList.toggle("hidden");

  //   if (!buttonenabled.value) return;
  //   buttonenabled.value = false;

  //   // if set via local storage previously
  //   if (localStorage.getItem("color-theme")) {
  //     if (localStorage.getItem("color-theme") === "light") {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("color-theme", "dark");
  //     } else {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("color-theme", "light");
  //     }

  //     // if NOT set via local storage previously
  //   } else {
  //     if (document.documentElement.classList.contains("dark")) {
  //       document.documentElement.classList.remove("dark");
  //       localStorage.setItem("color-theme", "light");
  //     } else {
  //       document.documentElement.classList.add("dark");
  //       localStorage.setItem("color-theme", "dark");
  //     }
  //   }

  //   document.querySelector(".clip").innerHTML =
  //     document.querySelector("body .container")?.outerHTML;
  //   document.querySelector(".clip")?.classList.add("anim"); //Animate the clip
  //   setTimeout(function () {
  //     document.querySelector("body .container").innerHTML =
  //       document.querySelector(".clip .container").innerHTML;
  //     document.querySelector(".clip").classList.remove("anim");
  //     document.querySelector(".clip").innerHTML = "";
  //     buttonenabled.value = true;
  //   }, 1000);
  // });
});
</script>

<template>
  <!-- DARK MODE BUTTON -->
  <!-- <button
    id="theme-toggle"
    type="button"
    class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 z-10 top-0 fixed"
  >
    <svg
      id="theme-toggle-dark-icon"
      class="hidden w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      ></path>
    </svg>
    <svg
      id="theme-toggle-light-icon"
      class="hidden w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
        fill-rule="evenodd"
        clip-rule="evenodd"
      ></path>
    </svg>
  </button> -->
  <!-- <div class="container">
    <BaseKanban :items="items">
      <template #action>
        <ul
          class="bg-zinc-100 dark:bg-blue-400 p-2 text-zinc-700 dark:text-white rounded-lg"
        >
          <li>Move</li>
          <hr class="my-1" />
          <li>Fails</li>
        </ul>
      </template>
    </BaseKanban>
  </div>
  <div class="clip"></div> -->

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
  <!-- <BaseKanban :items="items">
    <template #action>
      <ul
        class="bg-zinc-100 dark:bg-blue-400 p-2 text-zinc-700 dark:text-white rounded-lg"
      >
        <li>Move</li>
        <hr class="my-1" />
        <li>Fails</li>
      </ul>
    </template>
  </BaseKanban> -->
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
  <!-- REVEAL ELEMENT ANIMATION -->
  <BaseReveal />
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

.container {
  position: fixed;
  right: 0;
  left: 0;
  top: 50px;
  bottom: 0;
}

.clip {
  z-index: 2;
  position: fixed;
  bottom: 3rem;
  left: 3rem;
  width: 0rem;
  height: 0rem;
  border-radius: 100%;
}

.clip.anim {
  animation: open 1.5s ease-in;
}

@keyframes open {
  0% {
    top: 3rem;
    bottom: 3rem;
    width: 0rem;
    height: 0rem;
    clip-path: circle(0rem at center);
  }
  100% {
    top: calc(-250vmax + 3rem);
    bottom: calc(-250vmax + 3rem);
    width: 500vmax;
    height: 500vmax;
    clip-path: circle(100% at center);
  }
}
</style>
