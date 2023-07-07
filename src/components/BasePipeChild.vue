<template>
  <svg
    width="35"
    height="20"
    viewBox="0 0 35 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ 'margin-right': props.marginRight, color: props.color }"
  >
    <path
      d="M24.8348 0.833374L2.41421 0.833374C1.52331 0.833374 1.07714 1.91052 1.70711 2.54048L8.45956 9.29293C8.85008 9.68346 8.85008 10.3166 8.45956 10.7071L1.70711 17.4596C1.07714 18.0896 1.52331 19.1667 2.41421 19.1667L24.8348 19.1667C25.0968 19.1667 25.3483 19.0639 25.5353 18.8804L33.8562 10.7137C34.2556 10.3217 34.2556 9.67833 33.8562 9.28635L25.5353 1.11969C25.3483 0.93618 25.0968 0.833374 24.8348 0.833374Z"
      fill="currentColor"
    />
  </svg>
</template>

<script setup lang="ts">
type IMargin = {
    /**
     * Set margin for each pipe
     */
    marginRight: string,
    /**
     * Set color for each pipe
     */
    color: string,
}

const props = withDefaults(defineProps<IMargin>(), {
  marginRight: "-8px",
  color: '#31491E',
});
</script>

<style scoped></style>
