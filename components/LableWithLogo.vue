<template>
  <div
    class="relative p-1 text-white bg-myWhite sm:inline-block"
    :style="{ backgroundColor: bgColor }"
  >
    <div
      class="flex items-center gap-1 text-sm"
      :class="{ 'text-myBlue': bgColor === '#f4f4f4' || bgColor === '#fff' }"
    >
      <slot />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: String,
  },
};
</script>
