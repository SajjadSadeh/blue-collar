import { NuxtLink } from '#build/components'; import { NuxtLink } from
'#build/components'; import { ButtonCusstom } from '#build/components';
<template>
  <div
    class="max-w-[520px]"
    :data-aos="data.id % 2 ? 'fade-up-right' : 'fade-up-left'"
  >
    <div class="relative w-full">
      <img class="w-full" :src="data.imageUrl" alt="" />
      <div class="absolute left-0 right-0 flex justify-center -bottom-5">
        <div
          class="flex items-center justify-center gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-[#FFC368]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="20"
            viewBox="0 0 18 20"
            fill="none"
          >
            <path
              d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9593 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568663 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z"
              fill="#1C2752"
            />
          </svg>
          <p>{{ data.author }}</p>
        </div>

        <div
          class="flex items-center justify-center gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-myOrange"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 0C4.02966 0 0 4.02966 0 9C0 13.9703 4.02966 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02966 13.9703 0 9 0ZM13.1538 10.3846H9C8.81639 10.3846 8.6403 10.3117 8.51046 10.1818C8.38063 10.052 8.30769 9.87592 8.30769 9.69231V3.46154C8.30769 3.27793 8.38063 3.10184 8.51046 2.972C8.6403 2.84217 8.81639 2.76923 9 2.76923C9.18361 2.76923 9.3597 2.84217 9.48954 2.972C9.61937 3.10184 9.69231 3.27793 9.69231 3.46154V9H13.1538C13.3375 9 13.5135 9.07294 13.6434 9.20277C13.7732 9.3326 13.8462 9.5087 13.8462 9.69231C13.8462 9.87592 13.7732 10.052 13.6434 10.1818C13.5135 10.3117 13.3375 10.3846 13.1538 10.3846Z"
              fill="#1C2752"
            />
          </svg>
          <p>{{ useFormatedDate(+data.publishAt) }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-start gap-3 mt-8 text-left">
      <NuxtLink :to="'/blog/' + data.id" class="text-3xl font-bold text-myBlue">
        Description for {{ data.title }}
      </NuxtLink>

      <p class="text-myGray">
        {{ data.description }}
      </p>

      <NuxtLink
        :to="'/blog/' + data.id"
        class="flex items-center gap-2 py-2 font-bold text-myBlue"
      >
        <p>read more</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="13"
          viewBox="0 0 8 13"
          fill="none"
        >
          <path
            d="M1 12L7 6.5L1 1"
            stroke="#1C2752"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>
