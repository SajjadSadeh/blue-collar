<template>
  <div class="px-2 py-20 bg-myWhite">
    <Container>
      <div class="flex flex-col items-start gap-6">
        <!-- title -->
        <div
          class="flex flex-col items-center justify-center w-full gap-6 sm:flex-row sm:justify-between"
        >
          <div class="flex flex-col items-start w-full gap-2 sm:w-1/2">
            <LableWithLogo text="Subscriptions" bg-color="#fff"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M18.9392 10.5224V20.8374C18.9392 21.1319 18.8812 21.4235 18.7685 21.6955C18.6558 21.9676 18.4906 22.2148 18.2824 22.423C18.0742 22.6312 17.827 22.7964 17.5549 22.9091C17.2828 23.0218 16.9913 23.0798 16.6968 23.0798H3.2424C2.64768 23.0798 2.07731 22.8435 1.65678 22.423C1.23625 22.0025 1 21.4321 1 20.8374V7.38302C1 6.7883 1.23625 6.21794 1.65678 5.79741C2.07731 5.37688 2.64768 5.14063 3.2424 5.14062H12.6313"
                  stroke="#FFB342"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.9258 1.22288C22.8415 1.13024 22.7392 1.05564 22.6253 1.00362C22.5113 0.951592 22.388 0.923212 22.2627 0.920191C22.1375 0.917171 22.0129 0.939573 21.8966 0.986045C21.7802 1.03252 21.6745 1.10209 21.5858 1.19057L20.872 1.9009C20.7855 1.98747 20.7369 2.10484 20.7369 2.22722C20.7369 2.3496 20.7855 2.46697 20.872 2.55354L21.5264 3.20674C21.5693 3.24984 21.6203 3.28403 21.6764 3.30737C21.7326 3.3307 21.7928 3.34271 21.8536 3.34271C21.9144 3.34271 21.9746 3.3307 22.0308 3.30737C22.0869 3.28403 22.1379 3.24984 22.1808 3.20674L22.8768 2.5143C23.2288 2.16288 23.2617 1.59046 22.9258 1.22288ZM19.4287 3.3435L9.01119 13.7417C8.94803 13.8046 8.90212 13.8827 8.87789 13.9685L8.39602 15.4036C8.38448 15.4426 8.38366 15.4839 8.39366 15.5233C8.40365 15.5626 8.42409 15.5986 8.45281 15.6273C8.48153 15.656 8.51747 15.6764 8.55684 15.6864C8.59621 15.6964 8.63754 15.6956 8.67649 15.6841L10.1105 15.2022C10.1963 15.178 10.2744 15.1321 10.3373 15.0689L20.7364 4.65107C20.8326 4.55384 20.8865 4.42259 20.8865 4.28581C20.8865 4.14903 20.8326 4.01777 20.7364 3.92054L20.1622 3.3435C20.0648 3.24642 19.9329 3.19191 19.7954 3.19191C19.6579 3.19191 19.526 3.24642 19.4287 3.3435Z"
                  fill="#FFB342"
                /></svg
            ></LableWithLogo>
            <TitleCustom text="Let’s Customize Work With Affordable Price" />
          </div>
          <div class="w-full sm:w-1/2">
            <p class="text-myGray">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium metus. Proin pretium id urna sit
              amet tincidunt. Interdum et malesuada.
            </p>
          </div>
        </div>

        <!-- prices -->
        <div
          class="flex flex-col flex-wrap justify-center w-full gap-6 md:flex-row xl:justify-between"
        >
          <div
            v-for="item in data"
            :key="item.id"
            :data-aos="
              item.id == 1
                ? 'zoom-in-right'
                : item.id == 2
                ? 'zoom-in-down'
                : 'zoom-in-left'
            "
            class="flex flex-col items-start gap-6 p-4 bg-white shadow max-w-[350px] mx-auto"
          >
            <!-- price -->
            <div
              class="flex items-center justify-between w-full border-b-2 border-[#ddd] pb-6"
            >
              <div class="text-myBlue">
                <p class="text-xl font-black">{{ item.title }}</p>
                <TitleCustom :text="'$ ' + item.price" />
              </div>

              <div class="flex flex-col items-end gap-2">
                <button
                  v-if="item.isPopular"
                  class="px-2 py-1 font-bold uppercase bg-myOrange text-myBlue"
                >
                  popular
                </button>
                <p class="text-myGray">Per Visit Charge</p>
              </div>
            </div>

            <!-- items -->
            <div class="flex flex-col items-start gap-2">
              <div
                class="flex items-center gap-4 min-w-[280px] w-full"
                v-for="i in item.items"
                :key="i"
              >
                <div v-html="tickIcon"></div>
                <p class="text-myGray">{{ i }}</p>
              </div>
            </div>

            <button
              class="w-full py-2 text-xl font-bold capitalize border-2 text-myBlue border-myOrange"
              :class="{
                'bg-myOrange': !item.isPopular,
                'bg-white': item.isPopular,
              }"
            >
              <NuxtLink to="/pricing"> buy now </NuxtLink>
            </button>
          </div>
        </div>

        <!--  -->
        <div
          class="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between"
        >
          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="16" fill="#FFB342" />
              <path
                d="M23 11L13.9 22L10 17.875"
                stroke="#1C2752"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <p class="mb-2 text-lg font-bold text-myBlue">Affordable Price</p>
              <p class="text-myGray">
                lacinia, tempor lacus at, eleifend diam. Maecenas tempus
                tincidunt placeratneque, maximus mattis
              </p>
            </div>
          </div>

          <div class="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <circle cx="16" cy="16" r="16" fill="#FFB342" />
              <path
                d="M23 11L13.9 22L10 17.875"
                stroke="#1C2752"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>
              <p class="mb-2 text-lg font-bold text-myBlue">Fixed Plan</p>
              <p class="text-myGray">
                Pellentesque vehicula eros neque, maximus mattis est sagittis
                Nulla facilisi. In sed pretium
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const tickIcon = ref(
  '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none"><path d="M17.9561 9.47803C17.9561 4.79745 14.1586 1 9.47803 1C4.79745 1 1 4.79745 1 9.47803C1 14.1586 4.79745 17.9561 9.47803 17.9561C14.1586 17.9561 17.9561 14.1586 17.9561 9.47803Z" stroke="#FFB342" stroke-width="1.5" stroke-miterlimit="10"/><path d="M13.717 5.94531L7.78242 13.0103L5.23901 10.1843" stroke="#FFB342" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
);
const { data } = await useFetch("/api/prices");
</script>
