<template>
  <footer>
    <!-- Subscribe Our Newsletter -->
    <div class="bg-myOrange">
      <Container>
        <div class="flex flex-col items-center px-2 pb-6 md:flex-row">
          <div class="flex items-center py-20">
            <div class="w-full md:w-3/5">
              <TitleCustom text="Subscribe Our Newsletter" />

              <p class="text-myBlue">
                <strong> stay in touch with us to get latest news</strong>.
                maximus mattis est facilisi. In sed pretium Proin pretium id
                urna sit amet tincidunt.
              </p>
            </div>
          </div>

          <div class="flex justify-center w-full md:justify-end md:w-2/5">
            <input
              type="text"
              placeholder="your mail address here"
              class="px-4 py-2 border-2 border-white outline-none bg-myOrange text-myBlue"
            />
            <ButtonCusstom bg-color="white" text-color="#1C2752">
              <p>Subscribe</p>
            </ButtonCusstom>
          </div>
        </div>
      </Container>
    </div>

    <!--  -->
    <div class="py-10 text-white bg-myBlue">
      <Container>
        <div class="flex flex-col items-center justify-center gap-6 px-2">
          <!-- emial location and... -->
          <div
            class="flex flex-col flex-wrap items-center justify-center w-full gap-6 md:justify-between sm:flex-row"
          >
            <div>
              <NuxtLink to="/">
                <img
                  src="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/white-logo.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvd2hpdGUtbG9nby5zdmciLCJpYXQiOjE2OTcxODgzMTIsImV4cCI6MzMyMzMxODgzMTJ9.iJ-_gs8u_NUPox_Nai9qx09akFDJAsfR_YBUV4WXv6Y&t=2023-10-13T09%3A11%3A54.321Z"
                  alt=""
                />
              </NuxtLink>
            </div>

            <div class="flex items-center justify-center">
              <div class="p-3 rounded-full bg-myOrange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-mail"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                  ></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </div>
              <div class="flex flex-col ml-2">
                <p class="font-bold text-md">Mail Us</p>
                <p class="text-base font-normal">Info@Example.com</p>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <div class="p-3 rounded-full bg-myOrange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-phone"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col ml-2">
                <p class="font-bold text-md">Call Us</p>
                <p class="text-base font-normal">+01 569 896 654</p>
              </div>
            </div>

            <div class="flex items-center justify-center">
              <div class="p-3 rounded-full bg-myOrange">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-map-pin"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path
                    d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"
                  ></path>
                </svg>
              </div>
              <div class="flex flex-col ml-2">
                <p class="font-bold text-md">Location</p>
                <p class="text-base font-normal">Amsterdam, 109-74</p>
              </div>
            </div>
          </div>

          <!-- links -->
          <div
            class="py-4 border-t-[1px] flex justify-center md:justify-between gap-10 flex-col w-full md:flex-row border-b-[1px] border-[#4B557D]"
          >
            <!-- left -->
            <div
              class="max-w-[440px] flex flex-col gap-4 justify-between md:mx-0 mx-auto"
            >
              <p>
                Denouncing pleasure and praising pain was born and I will givg
                you a coghmplete acchount of the system, and expound the actual
              </p>
              <div class="flex items-center gap-3">
                <!-- instagram -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <circle cx="30" cy="30" r="30" fill="#2C3765" />
                  <path
                    d="M33.6585 22.5472C34.7231 22.5503 35.7431 22.9589 36.4958 23.6838C37.2486 24.4086 37.6729 25.3909 37.6761 26.416V34.1527C37.6729 35.1778 37.2486 36.16 36.4958 36.8849C35.7431 37.6098 34.7231 38.0183 33.6585 38.0214H25.6243C24.5598 38.0183 23.5397 37.6098 22.787 36.8849C22.0342 36.16 21.6099 35.1778 21.6068 34.1527V26.416C21.6099 25.3909 22.0342 24.4086 22.787 23.6838C23.5397 22.9589 24.5598 22.5503 25.6243 22.5472H33.6585ZM33.6585 21H25.6243C22.5309 21 20 23.4371 20 26.416V34.1527C20 37.1315 22.5309 39.5686 25.6243 39.5686H33.6585C36.752 39.5686 39.2828 37.1315 39.2828 34.1527V26.416C39.2828 23.4371 36.752 21 33.6585 21Z"
                    fill="white"
                  />
                  <path
                    d="M34.8633 26.4163C34.6249 26.4163 34.3919 26.3482 34.1937 26.2207C33.9956 26.0932 33.8411 25.9119 33.7499 25.6999C33.6587 25.4878 33.6348 25.2545 33.6813 25.0293C33.7278 24.8042 33.8426 24.5974 34.0111 24.4351C34.1797 24.2728 34.3944 24.1623 34.6282 24.1175C34.862 24.0727 35.1043 24.0957 35.3245 24.1836C35.5447 24.2714 35.7329 24.4201 35.8654 24.611C35.9978 24.8018 36.0685 25.0262 36.0685 25.2558C36.0688 25.4083 36.0379 25.5593 35.9774 25.7003C35.917 25.8412 35.8282 25.9693 35.7163 26.0771C35.6043 26.1849 35.4713 26.2704 35.3249 26.3286C35.1785 26.3868 35.0217 26.4166 34.8633 26.4163ZM29.641 27.1897C30.2767 27.1897 30.8981 27.3712 31.4266 27.7113C31.9551 28.0514 32.3671 28.5347 32.6103 29.1003C32.8536 29.6658 32.9172 30.2881 32.7932 30.8884C32.6692 31.4888 32.3631 32.0402 31.9136 32.4731C31.4641 32.9059 30.8915 33.2007 30.268 33.3201C29.6446 33.4395 28.9984 33.3782 28.4111 33.144C27.8238 32.9097 27.3219 32.513 26.9687 32.0041C26.6156 31.4951 26.4271 30.8967 26.4271 30.2846C26.428 29.4641 26.7669 28.6774 27.3694 28.0972C27.972 27.5169 28.7889 27.1906 29.641 27.1897ZM29.641 25.6425C28.6876 25.6425 27.7555 25.9147 26.9628 26.4248C26.17 26.9349 25.5521 27.6599 25.1873 28.5081C24.8224 29.3564 24.7269 30.2898 24.9129 31.1903C25.099 32.0908 25.5581 32.9179 26.2323 33.5671C26.9065 34.2163 27.7654 34.6585 28.7005 34.8376C29.6357 35.0167 30.605 34.9248 31.4858 34.5734C32.3667 34.2221 33.1196 33.6271 33.6493 32.8637C34.179 32.1003 34.4617 31.2028 34.4617 30.2846C34.4617 29.0534 33.9538 27.8727 33.0498 27.0021C32.1457 26.1315 30.9196 25.6425 29.641 25.6425Z"
                    fill="white"
                  />
                </svg>

                <!-- facebook -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <circle cx="30" cy="30" r="30" fill="#2C3765" />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.2828 30.2843C39.2828 25.1572 34.9657 21 29.6414 21C24.3171 21 20 25.1572 20 30.2843C20 34.9182 23.5251 38.7592 28.1349 39.4563V32.9689H25.6863V30.2843H28.1349V28.2389C28.1349 25.9124 29.5747 24.6263 31.7767 24.6263C32.8317 24.6263 33.9353 24.8078 33.9353 24.8078V27.0928H32.7189C31.5219 27.0928 31.1475 27.8082 31.1475 28.5435V30.2843H33.8212L33.3942 32.9689H31.1479V39.4572C35.7577 38.7604 39.2828 34.9194 39.2828 30.2843Z"
                    fill="white"
                  />
                </svg>

                <!-- twiter -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <circle cx="30" cy="30" r="30" fill="#2C3765" />
                  <path
                    d="M40.6602 23.9584C39.8852 24.2952 39.0652 24.517 38.2261 24.617C39.1079 24.1006 39.7711 23.2803 40.0912 22.3099C39.2575 22.7974 38.3469 23.1394 37.3984 23.3214C36.9991 22.9028 36.5187 22.5698 35.9866 22.3427C35.4546 22.1155 34.8818 21.9989 34.3033 22C31.9609 22 30.0654 23.868 30.0654 26.1708C30.0637 26.4911 30.1004 26.8104 30.1747 27.122C28.4951 27.0433 26.8504 26.6148 25.3458 25.864C23.8413 25.1132 22.51 24.0566 21.4372 22.7619C21.0608 23.3963 20.8618 24.1203 20.8608 24.858C20.8608 26.3042 21.6154 27.5826 22.7547 28.3315C22.0797 28.3155 21.4185 28.1368 20.8273 27.8107V27.8623C20.8273 29.8853 22.2907 31.5682 24.2276 31.9513C23.8634 32.0484 23.488 32.0976 23.1111 32.0977C22.8436 32.0981 22.5767 32.0722 22.3144 32.0202C22.8528 33.6773 24.42 34.8825 26.2764 34.9169C24.7679 36.0794 22.9159 36.7078 21.0115 36.7032C20.6734 36.7027 20.3357 36.6825 20 36.6429C21.9374 37.88 24.1895 38.5344 26.4882 38.5281C34.2943 38.5281 38.5589 32.1708 38.5589 26.6572C38.5589 26.4764 38.5541 26.2956 38.5455 26.1191C39.3733 25.5303 40.0893 24.7986 40.6602 23.9584Z"
                    fill="white"
                  />
                </svg>

                <!-- pinterset -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                >
                  <circle cx="30" cy="30" r="30" fill="#2C3765" />
                  <path
                    d="M29.7966 20C24.3866 20 20 24.3847 20 29.7923C20 33.801 22.4142 37.2458 25.8649 38.7627C25.8386 38.0807 25.8605 37.2589 26.0354 36.5157C26.2235 35.7201 27.295 31.178 27.295 31.178C27.295 31.178 26.9801 30.5529 26.9801 29.6305C26.9801 28.1792 27.8198 27.095 28.8695 27.095C29.7617 27.095 30.1903 27.7639 30.1903 28.5639C30.1903 29.46 29.6173 30.7977 29.3243 32.0392C29.0794 33.0797 29.8447 33.9234 30.8725 33.9234C32.7269 33.9234 33.9777 31.5409 33.9777 28.7169C33.9777 26.5704 32.5301 24.9661 29.9016 24.9661C26.932 24.9661 25.0776 27.1825 25.0776 29.6567C25.0776 30.5092 25.3313 31.1125 25.7249 31.5759C25.9042 31.7901 25.9305 31.8775 25.8649 32.1223C25.8168 32.3015 25.7118 32.7343 25.6637 32.9092C25.5981 33.1584 25.3969 33.2458 25.1738 33.154C23.8049 32.5944 23.1664 31.0994 23.1664 29.4119C23.1664 26.6316 25.515 23.2961 30.1684 23.2961C33.9077 23.2961 36.37 26.0021 36.37 28.9048C36.37 32.7474 34.2314 35.6152 31.0824 35.6152C30.0241 35.6152 29.0313 35.0425 28.6901 34.3955C28.6901 34.3955 28.1216 36.6512 27.9991 37.0884C27.7936 37.8447 27.3868 38.5966 27.0151 39.1867C27.9169 39.4526 28.8521 39.5881 29.7923 39.5889C35.2023 39.5889 39.5889 35.2042 39.5889 29.7966C39.5889 24.389 35.2067 20 29.7966 20Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <!-- right -->
            <div
              class="px-10 mx-10 justify-start flex-wrap md:border-l-[1px] border-[#4B557D] flex gap-10"
            >
              <div class="flex flex-col items-start gap-2">
                <strong>Explore</strong>
                <NuxtLink to="/about-us">About Us</NuxtLink>
                <NuxtLink to="/projects">Projects</NuxtLink>
                <NuxtLink to="/pricing">Pricing</NuxtLink>
                <NuxtLink to="/faq">FAQ</NuxtLink>
              </div>

              <div class="flex flex-col items-start gap-2">
                <strong>Quick Links</strong>
                <NuxtLink to="/services">Services</NuxtLink>
                <NuxtLink to="/blog">Blog</NuxtLink>
                <NuxtLink to="/contact-us">Contact Us</NuxtLink>
                <NuxtLink to="">Service Request</NuxtLink>
                <NuxtLink to="">Estimation Calculator</NuxtLink>
              </div>

              <div class="flex flex-col items-start gap-2">
                <strong>Uitility Pages</strong>
                <p>Style Guide</p>
                <p>Changelog</p>
                <p>Licenses</p>
                <p>Protected</p>
                <NuxtLink to="/sdvnsvn">Page 404 Page</NuxtLink>
              </div>
            </div>
          </div>

          <!-- copy right -->
          <p class="font-thin">
            Copyright © BlueCollar | Designed by VictorFlow Templates - Powered
            by Webflow
          </p>
        </div>
      </Container>
    </div>
  </footer>
</template>

<script setup></script>
<style scoped>
input::placeholder {
  color: #1c2752;
}
</style>
