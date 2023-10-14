<template>
  <div>
    <div
      class="flex flex-col items-center justify-center gap-6 max-w-[700px] text-center mx-auto"
    >
      <TitleCustom text="Professional Main Services" />
      <p class="text-myBlue">
        Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
        facilisi. In sed pretium metus. Proin pretium id urna sit amet
        tincidunt.
      </p>

      <!-- buttons -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
        <ButtonCusstom
          v-for="item in allMainServices"
          :key="item.id"
          @click="mainServiceShowed = item.title"
          :bg-color="mainServiceShowed === item.title ? 'white' : '#FFB342'"
          text-color="#1C2752"
          class="transition-all"
        >
          <div v-html="item.icon"></div>
          <p>{{ item.title }}</p>
        </ButtonCusstom>
      </div>
    </div>
    <div class="mt-16">
      <Container class="bg-white">
        <ImageContentContainer
          class="p-4 lg:p-8"
          :isImageRight="mainServiceShowed === 'Residential' ? false : true"
          imageUrl="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDEpLmpwZyIsImlhdCI6MTY5NjYxMzI3NiwiZXhwIjozMzIzMjYxMzI3Nn0.2L5BpqGDGRNhzACJFNtAgVm9Njq9JOSgRwI5a0M4pFw&t=2023-10-06T17%3A27%3A56.167Z"
        >
          <LableWithLogo text="Based on Commercial" bgColor="#f4f4f4"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-building-community"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="#FFB342"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"
              ></path>
              <path d="M13 7l0 .01"></path>
              <path d="M17 7l0 .01"></path>
              <path d="M17 11l0 .01"></path>
              <path d="M17 15l0 .01"></path></svg
          ></LableWithLogo>
          <TitleCustom :text="mainServiceShowed" />
          <p class="text-myGray max-w-[450px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore et dolore magna aliqua. Ut enim ad minimquis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <ButtonCusstom bgColor="#FFB342"
            ><NuxtLink to="services/3">Read More</NuxtLink></ButtonCusstom
          >
        </ImageContentContainer>
      </Container>
    </div>
  </div>
</template>

<script setup>
const mainServiceShowed = ref("Commercial");
const allMainServices = ref([
  {
    id: 1,
    title: "Industrial",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-factory-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21h18"/><path d="M5 21v-12l5 4v-4l5 4h4"/><path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582"/><path d="M9 17h1"/><path d="M14 17h1"/></svg>',
  },
  {
    id: 2,
    title: "Residential",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home-cog" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 21v-6a2 2 0 0 1 2 -2h1.6"/><path d="M20 11l-8 -8l-9 9h2v7a2 2 0 0 0 2 2h4.159"/><path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M18 14.5v1.5"/><path d="M18 20v1.5"/><path d="M21.032 16.25l-1.299 .75"/><path d="M16.27 19l-1.3 .75"/><path d="M14.97 16.25l1.3 .75"/><path d="M19.733 19l1.3 .75"/></svg>',
  },
  {
    id: 3,
    title: "Commercial",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-building-community" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"/><path d="M13 7l0 .01"/><path d="M17 7l0 .01"/><path d="M17 11l0 .01"/><path d="M17 15l0 .01"/></svg>',
  },
]);
</script>
