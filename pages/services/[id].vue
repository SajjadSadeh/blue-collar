<template>
  <div>
    <ImageHero
      :title="data.title"
      image-url="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8uanBnIiwiaWF0IjoxNjk2NjkwMDk0LCJleHAiOjMzMjMyNjkwMDk0fQ.QdXpwGcxWluYpTMBrBgrhM-tggXUlsJnVvJMDz-90Pc&t=2023-10-07T14%3A48%3A13.793Z"
    />
    <div class="py-20">
      <div class="bg-white">
        <Container>
          <div class="flex flex-col items-center justify-center gap-4 p-2">
            <div class="flex flex-col-reverse items-start gap-6 sm:flex-row">
              <!-- left side -->
              <div
                data-aos="flip-left"
                class="flex flex-col items-stretch justify-center w-full gap-4 sm:w-4/12 lg:w-1/5 sm:pr-6"
              >
                <div
                  class="relative z-10 flex flex-col items-start justify-center px-4 py-16 mx-auto overflow-hidden text-center text-white"
                >
                  <img
                    src="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(11).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDExKS5qcGciLCJpYXQiOjE2OTY2ODAyNTIsImV4cCI6MzMyMzI2ODAyNTJ9.DY1P59zukXV2LkX_CHAhWP5lzasjKmrSvyeoRgKtNn8&t=2023-10-07T12%3A04%3A11.637Z"
                    class="absolute inset-0 mx-auto blur-sm -z-30"
                  />
                  <div
                    class="absolute inset-0 bg-[#1C2752] opacity-80 -z-20"
                  ></div>
                  <div class="flex flex-col items-center justify-center gap-4">
                    <p class="font-bold">Providing Varity Electical Services</p>
                    <ButtonCusstom bg-color="#FFB342">
                      <NuxtLink to="/pricing">
                        <p>Discount 25%</p>
                        <p class="font-bold">Rewiring Services</p>
                      </NuxtLink>
                    </ButtonCusstom>
                    <p>Click to Get Discout</p>
                  </div>
                </div>

                <p class="mt-6 text-3xl font-bold text-myBlue">Our Services</p>

                <div
                  class="flex flex-row flex-wrap justify-between gap-3 sm:flex-col"
                >
                  <div
                    class="flex items-center gap-2"
                    v-for="item in ourServicesText"
                    :key="item"
                  >
                    <div v-html="tickIcon"></div>
                    <p class="text-sm text-myGray min-w-[15rem]">
                      {{ item }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- right side -->
              <div
                class="flex flex-col items-start justify-center w-full gap-6 sm:pl-5 sm:w-8/12 lg:w-4/5"
              >
                <div class="w-full">
                  <img
                    class="w-full"
                    src="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(11).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDExKS5qcGciLCJpYXQiOjE2OTY2ODAyNTIsImV4cCI6MzMyMzI2ODAyNTJ9.DY1P59zukXV2LkX_CHAhWP5lzasjKmrSvyeoRgKtNn8&t=2023-10-07T12%3A04%3A11.637Z"
                    alt=""
                  />
                </div>
                <p class="text-3xl font-bold text-myBlue">
                  Description for {{ data.title }}
                </p>
                <p class="text-myGray">
                  Phosfluorescently engage worldwide methodologies with web
                  enabled technology Interactively coordinate proactives
                  e-commerce process centric outside the box thinking completely
                  pursue scalabl customer service through sustainable
                  potentialities colaboratively administrate turnkey channels
                  whereas virtual e tailers objectively seize scalable metrics
                  whereas proactiveservices Seamlessly empower fully researched
                  growth strategies.
                </p>

                <QuoteSection />

                <p class="text-myGray">
                  Coordinate proactives e-commerce process centric outside the
                  box thinking completely pursue scalabl customer service
                  through sustainable potentialities colaboratively administrate
                  turnkey channels whereas virtual e tailers objectively seize
                  scalable.
                </p>

                <div
                  class="flex flex-wrap items-center justify-center gap-6 p-12 sm:gap-0 bg-myWhite"
                >
                  <div
                    class="flex w-full gap-2 px-1 py-3 md:w-1/2"
                    data-aos="flip-up"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="37"
                        height="39"
                        viewBox="0 0 37 39"
                        fill="none"
                      >
                        <path
                          d="M18.6483 10.0316V20.2184L23.6087 25.1788M8.85867 31.8389L3.75898 37.7595M33.7139 37.7595L28.6142 31.8389M33.9815 20.2185C33.9815 28.629 27.1633 35.4471 18.7528 35.4471C10.3422 35.4471 3.52409 28.629 3.52409 20.2185C3.52409 11.8079 10.3422 4.98977 18.7528 4.98977C27.1633 4.98977 33.9815 11.8079 33.9815 20.2185ZM11.0517 3.50998C10.0907 2.57643 8.78008 2 7.33456 2C4.3887 2 2 4.3887 2 7.33456C2 8.55039 2.4075 9.66991 3.0921 10.5672C4.98587 7.50052 7.7554 5.03181 11.0517 3.50998ZM26.6796 3.51023C27.6406 2.57668 28.9513 2.00025 30.3968 2.00025C33.3426 2.00025 35.7313 4.38895 35.7313 7.33481C35.7313 8.55065 35.3238 9.67016 34.6392 10.5674C32.7455 7.50078 29.9759 5.03206 26.6796 3.51023Z"
                          stroke="#FFB342"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-lg font-semibold text-myBlue">
                        24/7 Availability
                      </p>
                      <p class="text-myGray">
                        Globally incubate standards before scalable benefits.
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex w-full gap-2 px-1 py-3 md:w-1/2"
                    data-aos="flip-up"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="38"
                        viewBox="0 0 40 38"
                        fill="none"
                      >
                        <path
                          d="M8.31099 9.8988C7.62064 9.8988 7.06099 10.4584 7.06099 11.1488C7.06099 11.8392 7.62064 12.3988 8.31099 12.3988V9.8988ZM36.4743 12.3988C37.1646 12.3988 37.7243 11.8392 37.7243 11.1488C37.7243 10.4584 37.1646 9.8988 36.4743 9.8988V12.3988ZM11.2115 10.1052C10.6254 10.4699 10.4459 11.2407 10.8106 11.8269C11.1753 12.413 11.9462 12.5925 12.5323 12.2278L11.2115 10.1052ZM26.4651 2.08595L25.8059 1.0239L25.8047 1.02464L26.4651 2.08595ZM27.2493 2.26876L26.1873 2.92796L26.188 2.92914L27.2493 2.26876ZM31.5701 11.5788C31.9349 12.1649 32.7057 12.3444 33.2918 11.9797C33.878 11.615 34.0575 10.8441 33.6928 10.258L31.5701 11.5788ZM38.5704 27.9219V29.1719H39.8204V27.9219H38.5704ZM38.5704 19.717H39.8204V18.467H38.5704V19.717ZM30.6397 8.02291H36.8383V5.52291H30.6397V8.02291ZM36.8383 8.02291C36.2486 8.02291 35.7704 7.54468 35.7704 6.95495H38.2704C38.2704 6.16397 37.6293 5.52291 36.8383 5.52291V8.02291ZM35.7704 6.95495V19.1701H38.2704V6.95495H35.7704ZM35.7712 27.8312V36.2182H38.2712V27.8312H35.7712ZM35.7712 36.2182C35.7712 35.6284 36.2494 35.1502 36.8391 35.1502V37.6502C37.6301 37.6502 38.2712 37.0091 38.2712 36.2182H35.7712ZM36.8391 35.1502H2.19767V37.6502H36.8391V35.1502ZM2.19767 35.1502C2.7874 35.1502 3.26562 35.6284 3.26562 36.2182H0.765625C0.765625 37.0091 1.40669 37.6502 2.19767 37.6502V35.1502ZM3.26562 36.2182V6.95573H0.765625V36.2182H3.26562ZM3.26562 6.95573C3.26562 7.54547 2.7874 8.02369 2.19767 8.02369V5.52369C1.40669 5.52369 0.765625 6.16475 0.765625 6.95573H3.26562ZM2.19767 8.02369H18.708V5.52369H2.19767V8.02369ZM8.31099 12.3988H36.4743V9.8988H8.31099V12.3988ZM12.5323 12.2278L27.1255 3.14726L25.8047 1.02464L11.2115 10.1052L12.5323 12.2278ZM27.1243 3.148C26.8075 3.34463 26.387 3.24967 26.1873 2.92796L28.3114 1.60955C27.7799 0.75324 26.6573 0.495446 25.8059 1.0239L27.1243 3.148ZM26.188 2.92914L31.5701 11.5788L33.6928 10.258L28.3107 1.60837L26.188 2.92914ZM38.5704 26.6719H28.9077V29.1719H38.5704V26.6719ZM28.9077 26.6719C27.3321 26.6719 26.0552 25.395 26.0552 23.8194H23.5552C23.5552 26.7757 25.9514 29.1719 28.9077 29.1719V26.6719ZM26.0552 23.8194C26.0552 22.2439 27.3321 20.967 28.9077 20.967V18.467C25.9514 18.467 23.5552 20.8632 23.5552 23.8194H26.0552ZM28.9077 20.967H38.5704V18.467H28.9077V20.967ZM37.3204 19.717V27.9219H39.8204V19.717H37.3204Z"
                          fill="#FFB342"
                        />
                        <circle
                          cx="29.7576"
                          cy="23.8875"
                          r="1.2605"
                          fill="#FFB342"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-lg font-semibold text-myBlue">
                        Affordable Price
                      </p>
                      <p class="text-myGray">
                        Globally incubate standards before scalable benefits.
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex w-full gap-2 px-1 py-3 md:w-1/2"
                    data-aos="flip-up"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="49"
                        height="39"
                        viewBox="0 0 49 39"
                        fill="none"
                      >
                        <path
                          d="M2 37.3349H41.1605L45.9806 27.7827M41.4671 27.3666L46.8967 27.214C46.9598 27.214 47.0109 27.2711 47.0109 27.3416V33.4959M12.1988 37.3349H8.89946C8.74934 37.3349 8.62642 37.1988 8.62642 37.0299V22.5751C8.62642 22.4074 8.74826 22.27 8.89946 22.27H12.1988C12.3489 22.27 12.4718 22.4061 12.4718 22.5751V37.0311C12.4718 37.1988 12.35 37.3349 12.1988 37.3349ZM20.2322 37.3349H16.9329C16.7828 37.3349 16.6599 37.1988 16.6599 37.0299V1.80553C16.6599 1.63782 16.7817 1.50049 16.9329 1.50049H20.2322C20.3823 1.50049 20.5053 1.6366 20.5053 1.80553V37.0311C20.5042 37.1988 20.3823 37.3349 20.2322 37.3349ZM28.0644 37.3981H24.7651C24.615 37.3981 24.4921 37.262 24.4921 37.0931V13.6317C24.4921 13.4639 24.6139 13.3266 24.7651 13.3266H28.0644C28.2145 13.3266 28.3375 13.4627 28.3375 13.6317V37.0931C28.3364 37.262 28.2145 37.3981 28.0644 37.3981ZM35.6954 37.3349H32.3961C32.2459 37.3349 32.123 37.1988 32.123 37.0299V5.90718C32.123 5.73947 32.2449 5.60214 32.3961 5.60214H35.6954C35.8455 5.60214 35.9684 5.73825 35.9684 5.90718V37.0299C35.9684 37.1988 35.8466 37.3349 35.6954 37.3349Z"
                          stroke="#FFB342"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-lg font-semibold text-myBlue">
                        Process Technology
                      </p>
                      <p class="text-myGray">
                        Globally incubate standards before scalable benefits.
                      </p>
                    </div>
                  </div>

                  <div
                    class="flex w-full gap-2 px-1 py-3 md:w-1/2"
                    data-aos="flip-up"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="29"
                        height="39"
                        viewBox="0 0 29 39"
                        fill="none"
                      >
                        <path
                          d="M22.5794 7.22879H27.2837C27.418 7.22879 27.5262 7.33775 27.5262 7.47135V36.8369C27.5262 36.9713 27.4173 37.0795 27.2837 37.0795H2.25819C2.12385 37.0795 2.01562 36.9705 2.01562 36.8369V7.47135C2.01562 7.33701 2.12459 7.22879 2.25819 7.22879H6.94982M17.5302 5.16141H21.3195C21.5516 5.16141 21.7397 5.3495 21.7397 5.58161V8.79694C21.7397 9.02906 21.5516 9.21714 21.3195 9.21714H8.22238C7.99026 9.21714 7.80218 9.02906 7.80218 8.79694V5.58161C7.80218 5.3495 7.99026 5.16141 8.22238 5.16141H12.0087M12.0086 5.01436C11.9855 4.87703 12.2124 4.20381 12.2124 4.05976C12.2124 2.64615 13.358 1.50049 14.7716 1.50049C16.1852 1.50049 17.3309 2.64615 17.3309 4.05976C17.3309 4.165 17.4548 5.03078 17.4421 5.13228M6.04458 17.0904L7.34325 18.1532L11.3594 14.4326M13.5439 16.736H23.2287M6.04458 23.4092L7.34325 24.472L11.3594 20.7514M13.5439 23.0546H23.2287M6.04458 29.7278L7.34325 30.7907L11.3594 27.07M13.5439 29.3733H23.2287"
                          stroke="#FFB342"
                          stroke-width="2.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                    <div class="flex flex-col gap-2">
                      <p class="text-lg font-semibold text-myBlue">
                        Free Estimation
                      </p>
                      <p class="text-myGray">
                        Globally incubate standards before scalable benefits.
                      </p>
                    </div>
                  </div>
                </div>

                <p class="text-3xl font-bold text-myBlue">
                  Key benefits With Our Service
                </p>
                <p class="text-myGray">
                  Scalabl customer service through sustainable potentialities
                  colaboratively administrate turnkey channels whereas virtual e
                  tailers objectively seize scalable metrics whereas
                  proactiveservices Seamlessly empower fully researched growth
                  strategies.
                </p>
                <Container>
                  <ImageContentContainer
                    is-image-right="true"
                    image-url="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(1)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDEpICgxKS5qcGciLCJpYXQiOjE2OTY2OTExOTMsImV4cCI6MzMyMzI2OTExOTN9.y2LygomkgMhz-QTk2F9PUY54BBe3EZeFi06j_Gwi2g8&t=2023-10-07T15%3A06%3A33.481Z"
                  >
                    <div class="flex flex-col gap-4">
                      <div
                        v-for="item in properties"
                        :key="item"
                        class="flex items-center w-full gap-2 text-myGray"
                        data-aos="fade-right"
                      >
                        <div v-html="tickIcon"></div>
                        <p>{{ item }}</p>
                      </div>
                    </div>
                  </ImageContentContainer>
                </Container>
                <div class="py-16">
                  <p
                    class="mb-6 text-3xl font-bold text-center lg:text-left text-myBlue"
                  >
                    Our Experts Team
                  </p>
                  <CardContainer type="team" :data="teamMembers" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch("/api/services/" + route.params.id);
const { data: teamMembers } = await useFetch("/api/team");
teamMembers.value = teamMembers.value.filter((t) => t.id < 4);

const properties = ref([
  "experience investor Technician.",
  "Your Electrical and Security System.",
  "sources whereas high standards",
  "Credibly innovate granular internal",
  "services for domestic and commercial.",
]);

const ourServicesText = ref([
  "Telecom Installation and Repair",
  "Hosted PBX Solutions",
  "Outdoor/Parking Lot Lighting",
  "Outlets, Circuits and Rewiring",
  "HID Lighting and Control",
  "Lighting Design",
  "Motors and Transformers",
  "Isolated Computer Circuits",
  "Data/Communications Cabling",
  "Ballast/Lamp Replacing",
]);

const tickIcon = ref(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 33" fill="none"><circle cx="16" cy="16.9199" r="16" fill="#FFB342"/><path d="M23 11.9199L13.9 22.9199L10 18.7949" stroke="#1C2752" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
);

useHead({
  title: "Service " + route.params.id,
});
</script>
