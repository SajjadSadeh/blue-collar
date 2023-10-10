<template>
  <div>
    <ImageHero
      image-url="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(14).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDE0KS5qcGciLCJpYXQiOjE2OTY3NTU1NTksImV4cCI6MzMyMzI3NTU1NTl9.0IYywBtTVXIXys0hu_AWuRhQTkfgl1_O0EFsMD6VPPA&t=2023-10-08T08%3A59%3A18.544Z"
      title="FAQ"
    />

    <!-- Frequently Asked Questions -->
    <div class="py-20 bg-white">
      <Container>
        <div class="flex flex-col items-center justify-center gap-4 px-2">
          <LableWithLogo text="Pre-Service Questions" bg-color="#f4f4f4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M19.8591 10.5224V20.8374C19.8591 21.1319 19.8011 21.4235 19.6884 21.6955C19.5757 21.9676 19.4105 22.2148 19.2023 22.423C18.9941 22.6312 18.7469 22.7964 18.4748 22.9091C18.2028 23.0218 17.9112 23.0798 17.6167 23.0798H4.16232C3.5676 23.0798 2.99724 22.8435 2.5767 22.423C2.15617 22.0025 1.91992 21.4321 1.91992 20.8374V7.38302C1.91992 6.7883 2.15617 6.21794 2.5767 5.79741C2.99724 5.37688 3.5676 5.14063 4.16232 5.14062H13.5512"
                stroke="#FFB342"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.8457 1.22288C23.7614 1.13024 23.6592 1.05564 23.5452 1.00362C23.4312 0.951592 23.3079 0.923212 23.1827 0.920191C23.0574 0.917171 22.9328 0.939573 22.8165 0.986045C22.7002 1.03252 22.5944 1.10209 22.5057 1.19057L21.7919 1.9009C21.7054 1.98747 21.6568 2.10484 21.6568 2.22722C21.6568 2.3496 21.7054 2.46697 21.7919 2.55354L22.4463 3.20674C22.4892 3.24984 22.5402 3.28403 22.5963 3.30737C22.6525 3.3307 22.7127 3.34271 22.7735 3.34271C22.8343 3.34271 22.8945 3.3307 22.9507 3.30737C23.0068 3.28403 23.0578 3.24984 23.1007 3.20674L23.7967 2.5143C24.1487 2.16288 24.1816 1.59046 23.8457 1.22288ZM20.3486 3.3435L9.93112 13.7417C9.86795 13.8046 9.82204 13.8827 9.79781 13.9685L9.31594 15.4036C9.3044 15.4426 9.30358 15.4839 9.31358 15.5233C9.32357 15.5626 9.34401 15.5986 9.37273 15.6273C9.40145 15.656 9.43739 15.6764 9.47676 15.6864C9.51613 15.6964 9.55746 15.6956 9.59641 15.6841L11.0305 15.2022C11.1162 15.178 11.1943 15.1321 11.2573 15.0689L21.6563 4.65107C21.7525 4.55384 21.8065 4.42259 21.8065 4.28581C21.8065 4.14903 21.7525 4.01777 21.6563 3.92054L21.0821 3.3435C20.9847 3.24642 20.8528 3.19191 20.7153 3.19191C20.5779 3.19191 20.446 3.24642 20.3486 3.3435Z"
                fill="#FFB342"
              />
            </svg>
          </LableWithLogo>

          <TitleCustom text="Frequently Asked Questions" />

          <p class="text-myGray text-center max-w-[550px]">
            Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
            facilisi. In sed pretium metus. Proin pretium id urna sit amet
            tincidunt.
          </p>
          <div class="flex flex-col items-stretch gap-4">
            <div
              v-for="item in questionsAndAnswers"
              :key="item.id"
              class="border-2 border-[#ddd ] py-2 px-4 max-w-[600px]"
            >
              <button
                @click="numberOfShwoQ = item.id"
                class="flex items-start justify-between w-full gap-4 mx-auto text-left"
              >
                <p class="font-bold text-myBlue">{{ item.q }}</p>

                <div>
                  <svg
                    v-if="numberOfShwoQ === item.id"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                  >
                    <path
                      d="M1 8.39844L7.2027 1.60114L13.4054 8.39844"
                      stroke="#1C2752"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <svg
                    v-else
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="10"
                    viewBox="0 0 15 10"
                    fill="none"
                  >
                    <path
                      d="M1 1.89886L7.2027 8.10156L13.4054 1.89886"
                      stroke="#1C2752"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <p
                v-show="numberOfShwoQ == item.id"
                :class="{ 'scale-100': numberOfShwoQ === item.id }"
                class="mt-2 transition-all scale-0 text-myGray"
              >
                {{ item.a }}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <!-- get in touch -->
    <div class="py-20 bg-myWhite">
      <GetInTouchSection />
    </div>
  </div>
</template>

<script setup>
const numberOfShwoQ = ref(null);
const questionsAndAnswers = ref([
  {
    id: 1,
    q: "What is the primary focus of your website in terms of construction projects?",
    a: "Our website primarily focuses on residential, commercial, industrial, and infrastructure construction projects.",
  },
  {
    id: 2,
    q: "Could you share some recent construction project examples featured on your website?",
    a: "Certainly, some recent projects include a downtown office building, a suburban housing complex, a bridge renovation, and a factory expansion.",
  },
  {
    id: 3,
    q: "How can I submit my own construction project for consideration on your site?",
    a: "To submit your construction project, please visit our 'Submit Project' page and complete the required details, including project information, images, and contact information.",
  },
  {
    id: 4,
    q: "Are there any helpful resources or guides on your website for planning and executing construction projects?",
    a: "Yes, we offer a range of resources and guides in our 'Resources' section, covering topics like project planning, construction budgeting, and tips for finding suitable contractors.",
  },
]);
</script>

<style></style>
