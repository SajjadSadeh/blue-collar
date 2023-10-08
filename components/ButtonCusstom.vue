<template>
  <button
    :class="{
      'text-myBlue': !textColor,
    }"
    :style="{
      backgroundColor: bgColor,
      border: borderColor ? `1px solid ${borderColor}` : '',
    }"
    class="flex items-center justify-between gap-1 px-2 py-1 font-medium capitalize sm:px-4 sm:py-2"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: ["bgColor", "borderColor", "textColor"],
};
</script>
