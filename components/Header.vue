<template>
  <div class="flex flex-col">
    <div class="bg-myWhite text-myBlue">
      <Container>
        <div class="flex items-center justify-between py-1">
          <p class="text-sm font-medium sm:text-base">
            Opening Hours: 06:00 to 20:00
          </p>
          <div
            class="flex items-center justify-center gap-2 cursor-pointer font-xs"
          >
            <!-- instagram -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
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
                d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
              ></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>

            <!-- facebook -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.6524 9.05125C18.6524 4.31145 14.6614 0.468262 9.73928 0.468262C4.81717 0.468262 0.826172 4.31145 0.826172 9.05125C0.826172 13.3351 4.08503 16.8859 8.34661 17.5304V11.533H6.08291V9.05125H8.34661V7.16031C8.34661 5.00958 9.6776 3.82061 11.7133 3.82061C12.6886 3.82061 13.7088 3.98844 13.7088 3.98844V6.10085H12.5843C11.4777 6.10085 11.1316 6.7622 11.1316 7.44194V9.05125H13.6033L13.2086 11.533H11.132V17.5312C15.3935 16.8871 18.6524 13.3362 18.6524 9.05125Z"
                fill="#1C2752"
              />
            </svg>

            <!-- twiter -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M19.7519 2.17034C19.0354 2.48165 18.2774 2.68674 17.5017 2.77914C18.3169 2.3018 18.9299 1.54347 19.2258 0.646363C18.4551 1.09703 17.6133 1.41324 16.7365 1.58144C16.3673 1.19449 15.9233 0.88666 15.4314 0.676661C14.9395 0.466662 14.41 0.358882 13.8752 0.35987C11.7098 0.35987 9.95739 2.08678 9.95739 4.21558C9.95585 4.51169 9.98978 4.80692 10.0585 5.09496C8.5057 5.02216 6.98524 4.62606 5.59434 3.93198C4.20344 3.2379 2.97273 2.26113 1.98095 1.06416C1.63301 1.65073 1.44901 2.31997 1.44816 3.00197C1.44816 4.33893 2.14569 5.52072 3.19895 6.21307C2.57492 6.19826 1.96368 6.0331 1.41712 5.73161V5.77936C1.41712 7.64952 2.77 9.20533 4.56058 9.55947C4.22387 9.64923 3.87689 9.69471 3.52841 9.69476C3.28114 9.69519 3.03444 9.6712 2.79189 9.62313C3.28967 11.1551 4.73845 12.2692 6.45462 12.301C5.0601 13.3758 3.34801 13.9566 1.58742 13.9524C1.27492 13.9519 0.962697 13.9333 0.652344 13.8966C2.44339 15.0403 4.52534 15.6453 6.65039 15.6395C13.8668 15.6395 17.8093 9.7624 17.8093 4.66522C17.8093 4.4981 17.8049 4.33098 17.7969 4.16783C18.5622 3.62352 19.2242 2.9471 19.7519 2.17034Z"
                fill="#1C2752"
              />
            </svg>

            <!-- linkedin -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
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
                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
              ></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </div>
        </div>
      </Container>
    </div>

    <div class="bg-white text-myBlue">
      <Container>
        <div class="flex items-center justify-between py-2">
          <NuxtLink to="/">
            <!-- logo -->
            <img
              class="w-40"
              src="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Logo.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTG9nby5wbmciLCJpYXQiOjE2OTcxODgyMTIsImV4cCI6MzMyMzMxODgyMTJ9.A1j0HDlW1gY2IpghHFDckiDKYdvu0ci-ztHXzBnn7EM&t=2023-10-13T09%3A10%3A13.649Z"
              alt=""
            />
          </NuxtLink>
          <div class="items-center justify-center hidden gap-3 sm:flex">
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
                <p class="text-lg font-bold">Mail Us</p>
                <p class="text-base font-normal text-myGray">
                  Info@Example.com
                </p>
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
                <p class="text-lg font-bold">Call Us</p>
                <p class="text-base font-normal text-myGray">+01 569 896 654</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

    <Container class="z-50">
      <div
        class="flex items-center justify-between px-1 py-2 bg-myOrange mb-[-2rem] z-10"
      >
        <!-- items -->
        <div
          class="flex items-center justify-center gap-5 capitalize text-[#2F2F2F] font-medium"
        >
          <NuxtLink to="/" class="px-2 py-1">home</NuxtLink>
          <NuxtLink to="/about-us" class="px-2 py-1">about us</NuxtLink>
          <NuxtLink to="/services" class="px-1">services</NuxtLink>
          <NuxtLink to="/blog" class="px-2 py-1">blog</NuxtLink>
          <NuxtLink to="/contact-us" class="px-2 py-1">contact us</NuxtLink>
        </div>
        <button class="px-4 py-2 text-white bg-myBlue">
          Have Any Questions?
        </button>
      </div>
    </Container>
  </div>
</template>

<script>
export default {};
</script>
