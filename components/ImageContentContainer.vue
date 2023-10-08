<template>
  <div>
    <Container>
      <div
        class="flex flex-col items-center w-full gap-8"
        :class="isImageRight ? 'md:flex-row-reverse' : 'md:flex-row'"
      >
        <div class="md:w-1/2 max-w-[500px]">
          <img class="w-full" :src="imageUrl" alt="" />
        </div>
        <div class="max-w-[500px] md:w-1/2 flex flex-col gap-6 items-start">
          <slot />
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const props = defineProps(["imageUrl", "isImageRight"]);
</script>
