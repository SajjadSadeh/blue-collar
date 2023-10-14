<template>
  <div
    :style="{ height: height + 'px' }"
    class="relative flex items-start justify-center max-w-[2000px] mx-auto overflow-hidden mt-8 sm:mt-0"
  >
    <img
      :src="imageUrl"
      ref="image"
      class="absolute inset-0 mx-auto blur-sm -z-30"
    />
    <div class="absolute inset-0 bg-[#1C2752] opacity-80 -z-20"></div>
    <p
      class="absolute inset-0 z-30 flex items-center justify-center text-xl font-black text-center text-white capitalize sm:text-2xl lg:text-4xl"
    >
      {{ title ? title : route.path.slice(1) }}
    </p>
  </div>
</template>

<script setup>
const route = useRoute();
const props = defineProps(["title", "imageUrl"]);
import { useElementSize } from "@vueuse/core";
const image = ref(null);
const { width, height } = useElementSize(image);
</script>
