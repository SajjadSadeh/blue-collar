<template>
  <div>
    <h1
      data-aos="flip-left"
      class="text-2xl font-extrabold capitalize md:text-4xl sm:text-3xl text-myBlue"
      :style="{ color: textColor ? textColor : '' }"
    >
      {{ text }}
    </h1>
  </div>
</template>

<script>
export default {
  props: ["text", "textColor"],
};
</script>
