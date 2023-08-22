<template>
  <div class="relative w-60 h-60 inline-flex mr-2 mb-2" v-for="i in 12">
    <Transition name="fade">
        <div v-if="!data[i - 1]" class="absolute z-10 skeleton w-60 h-60"></div>
        <VDatePicker class="z-0 w-60 h-60" v-else />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([])
setTimeout(() => {
    for (let index = 1; index < 13; index++) {
        setTimeout(() => {
            data.value.push(index)
        }, 2000);
    }
}, 2000);
</script>

<style scoped>
.skeleton {
  background: linear-gradient(
    110deg,
    rgb(255,0,0) 8%,
    rgb(255,0,0) 18%,
    rgb(255,0,0) 33%
  );
  background-size: 200% 100%;
  animation: 1.5s skeleton-loading linear infinite;
}

@keyframes skeleton-loading {
  to {
    background-position-x: -200%;
  }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>
