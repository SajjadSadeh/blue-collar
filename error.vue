<template>
  <NuxtLayout>
    <div class="py-20 flex flex-col gap-6 items-center justify-center">
      <p class="text-myBlue text-9xl font-black">{{ error.statusCode }}</p>
      <p
        v-if="error.statusCode === 404"
        class="text-myOrange text-3xl font-bold"
      >
        Oops! That page can’t be found
      </p>
      <p class="text-myGray text-sm">
        Sorry, but the page you are looking for does not existing
      </p>
      <NuxtLink to="/">
        <ButtonCusstom bg-color="#FFB342"> Go to Home </ButtonCusstom>
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
const error = useError();
</script>
