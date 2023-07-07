<template>
  <ul class="flex mt-2 relative gap">
    <li v-for="i in 4">
      <BasePipeChild :color="`#3${i}49${i}E`" :margin-right="i == 3 ? '-7.9px' : '-8px'" />
    </li>
  </ul>
</template>

<script setup lang="ts">
import BasePipeChild from './BasePipeChild.vue';
</script>

<style scoped></style>
