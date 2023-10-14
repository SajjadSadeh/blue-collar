<template>
  <div>
    <ImageHero
      image-url="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(4).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDQpLmpwZyIsImlhdCI6MTY5NjY3MDQ5OCwiZXhwIjozMzIzMjY3MDQ5OH0.Jp-Dg8TbOpWEjrqrjUB1bO2A0Mtw4_3Xbw8_Tbwe4Rc&t=2023-10-07T09%3A21%3A38.054Z"
      title="services"
    />

    <!-- Professional Main Services -->
    <div class="px-3 py-20 bg-myOrange">
      <PerfessionalMainSevicesSection />
    </div>

    <div class="bg-white">
      <ServiceContainer />
    </div>

    <!-- How We Works -->
    <div class="py-20 bg-white">
      <Container>
        <div class="flex flex-col items-center justify-center gap-4 p-2">
          <LableWithLogo text="Our Services" bgColor="#fff">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M18 9.1V18.875C18 19.1541 17.945 19.4304 17.8382 19.6882C17.7315 19.946 17.5749 20.1803 17.3776 20.3776C17.1803 20.5749 16.946 20.7315 16.6882 20.8382C16.4304 20.945 16.1541 21 15.875 21H3.125C2.56141 21 2.02091 20.7761 1.6224 20.3776C1.22388 19.9791 1 19.4386 1 18.875V6.125C1 5.56141 1.22388 5.02091 1.6224 4.6224C2.02091 4.22388 2.56141 4 3.125 4H12.0224"
                stroke="#FFB342"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.7779 0.287101C21.698 0.199303 21.6011 0.128617 21.4931 0.0793146C21.3851 0.0300123 21.2682 0.00311756 21.1496 0.000255307C21.0309 -0.00260694 20.9128 0.0186228 20.8026 0.0626618C20.6923 0.106701 20.5921 0.172635 20.5081 0.256479L19.8316 0.929625C19.7496 1.01166 19.7036 1.12288 19.7036 1.23886C19.7036 1.35483 19.7496 1.46606 19.8316 1.54809L20.4518 2.1671C20.4924 2.20794 20.5407 2.24034 20.5939 2.26246C20.6472 2.28457 20.7042 2.29595 20.7618 2.29595C20.8195 2.29595 20.8765 2.28457 20.9297 2.26246C20.9829 2.24034 21.0313 2.20794 21.0719 2.1671L21.7314 1.5109C22.065 1.17789 22.0962 0.635431 21.7779 0.287101ZM18.4639 2.2967L8.59178 12.1506C8.53193 12.2102 8.48842 12.2842 8.46545 12.3655L8.00882 13.7254C7.99788 13.7623 7.9971 13.8015 8.00657 13.8388C8.01605 13.8761 8.03541 13.9102 8.06263 13.9374C8.08985 13.9646 8.12391 13.984 8.16121 13.9934C8.19852 14.0029 8.23769 14.0021 8.2746 13.9912L9.63357 13.5346C9.71486 13.5116 9.78888 13.4681 9.84849 13.4083L19.7031 3.53581C19.7943 3.44367 19.8454 3.31929 19.8454 3.18967C19.8454 3.06005 19.7943 2.93567 19.7031 2.84353L19.159 2.2967C19.0667 2.2047 18.9417 2.15304 18.8114 2.15304C18.6811 2.15304 18.5562 2.2047 18.4639 2.2967Z"
                fill="#FFB342"
              />
            </svg>
          </LableWithLogo>
          <TitleCustom text="How We Works" />
          <p class="text-myGray max-w-[500px] text-center">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </p>

          <div class="flex flex-col items-start gap-6 sm:flex-row justify-">
            <!-- left side -->
            <div
              class="flex flex-col items-stretch justify-center w-full gap-4 sm:w-2/5 lg:w-1/5 sm:pr-6"
            >
              <ButtonCusstom bg-color="#FFB342" class="w-full">
                <p>Commercial Services</p>
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
              </ButtonCusstom>
              <ButtonCusstom bg-color="#f4f4f4" class="w-full">
                <p>Industrial Services</p>
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
              </ButtonCusstom>
              <ButtonCusstom bg-color="#f4f4f4" class="w-full">
                <p>Residential Services</p>
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
              </ButtonCusstom>

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
                    <div>
                      <p>Discount 25%</p>
                      <p class="font-bold">Rewiring Services</p>
                    </div>
                  </ButtonCusstom>
                  <p>Click to Get Discout</p>
                </div>
              </div>
            </div>

            <!-- right side -->
            <div
              class="flex flex-col items-start justify-center w-full gap-6 sm:pl-5 sm:w-3/5 lg:w-4/5"
            >
              <p class="text-3xl font-bold text-myBlue">
                We can help you with the following services:
              </p>
              <p class="text-myGray">
                Pellentesque vehicula eros neque, maximus mattisin sagittis
                Nulla facilisi. In sed pretium metus Proin pretium id urna
                Interdum et malesuada.
              </p>
              <div class="w-full">
                <img
                  class="w-full"
                  src="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(11).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDExKS5qcGciLCJpYXQiOjE2OTY2ODAyNTIsImV4cCI6MzMyMzI2ODAyNTJ9.DY1P59zukXV2LkX_CHAhWP5lzasjKmrSvyeoRgKtNn8&t=2023-10-07T12%3A04%3A11.637Z"
                  alt=""
                />
              </div>
              <div class="flex flex-wrap gap-4">
                <div
                  v-for="item in properties"
                  :key="item"
                  class="flex items-center w-2/5 gap-2 text-myGray"
                >
                  <div v-html="tickIcon"></div>
                  <p>{{ item }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>

<script setup>
const properties = ref([
  "Telecom Installation and Repair",
  "Data/Communications Cabling",
  "Ballast/Lamp Replacing",
  "Hosted PBX Solutions",
  "Outdoor/Parking Lot Lighting",
  "Outlets, Circuits and Rewiring",
  "HID Lighting and Control",
  "Lighting Design",
  "Motors and Transformers",
  "Isolated Computer Circuits",
]);
const tickIcon = ref(
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 33" fill="none"><circle cx="16" cy="16.9199" r="16" fill="#FFB342"/><path d="M23 11.9199L13.9 22.9199L10 18.7949" stroke="#1C2752" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
);
</script>
