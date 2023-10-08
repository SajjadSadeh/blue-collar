<template>
  <div
    class="flex flex-wrap justify-center xl:justify-between gap-6 items-center"
  >
    <template v-for="item in data" :key="item.id">
      <CardItem :data="item" :type="type" />
    </template>
  </div>
</template>

<script setup>
const props = defineProps(["data", "type"]);
</script>
