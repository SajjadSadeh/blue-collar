<template>
  <div
    class="flex flex-col items-start gap-2 bg-myBlue text-myOrange max-w-[300px] p-3"
  >
    <div class="w-12" v-html="data.icon"></div>
    <p
      class="text-xl font-bold cursor-pointer"
      @click="navigateTo(`/services/${data.id}`)"
    >
      {{ data.title }}
    </p>
    <p class="text-myGray">{{ data.description }}</p>
    <p
      class="py-2 font-medium text-white cursor-pointer"
      @click="navigateTo(`/services/${data.id}`)"
    >
      read more...
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
