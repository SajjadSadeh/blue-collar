<template>
  <div>
    <Header />
    <slot />

    <Footer />
  </div>
</template>
<script setup>
import "~/assets/css/main.css";
import Footer from "~/components/Footer.vue";
</script>
