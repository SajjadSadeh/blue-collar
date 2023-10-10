<template>
  <div
    class="flex flex-col gap-2 items-center justify-center bg-white p-6 max-w-[370px]"
    style="border: 1px solid rgba(28, 39, 82, 0.2)"
  >
    <div class="w-full bg-myGray">
      <img class="w-full" :src="data.imageUrl" alt="" />
    </div>
    <NuxtLink
      :to="'/' + type + '/' + data.id"
      class="w-full text-xl font-bold text-center text-myBlue"
    >
      {{ data.title }}
    </NuxtLink>
    <p class="text-myGray">{{ data.subtitle }}</p>
  </div>
</template>

<script setup>
const props = defineProps(["data", "type"]);
</script>
