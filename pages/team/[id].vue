<template>
  <div>
    <ImageHero
      image-url="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(15).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDE1KS5qcGciLCJpYXQiOjE2OTY3NjI5NTUsImV4cCI6MzMyMzI3NjI5NTV9.hXQQS6uJcV2QvBNgIkjUC6qZUk-E7wV3BOzxMKmsPiA&t=2023-10-08T11%3A02%3A35.194Z"
      :title="data.title"
    />

    <!-- image and contact -->
    <div class="px-2 pt-20">
      <ImageContentContainer :image-url="data.imageUrl">
        <!-- title -->
        <p class="text-3xl font-extrabold text-myBlue">
          {{ data.title }} is a professional Engineer for BlueCollar since 2010
        </p>

        <!-- text -->
        <p class="text-myGray border-b-[1px] border-[#ddd] pb-6">
          Hello! to the table win survival strategy ensure to proactive
          domination At the end of the day, going forward new normal that has
          evolved from user generated content will have touch points shoring
          hanging fruits to identify a ballpark value-added activity to beta.
        </p>

        <!-- phone, email -->
        <div class="flex flex-col items-start gap-2">
          <div class="flex items-center gap-6">
            <p class="font-bold text-myBlue">Phone :</p>
            <p class="text-myGray">(+01) 123 456 789</p>
          </div>

          <div class="flex items-center gap-6">
            <p class="font-bold text-myBlue">Email :</p>
            <p class="text-myGray">
              @{{ data.title.split(" ").join("").toLocaleLowerCase() }}.com
            </p>
          </div>

          <div class="flex items-center gap-6">
            <p class="font-bold text-myBlue">Website :</p>
            <p class="text-myGray">
              www.{{ data.title.split(" ").join("").toLocaleLowerCase() }}.com
            </p>
          </div>
        </div>

        <!-- icons -->
        <div class="flex items-center gap-4">
          <!-- instagram -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M13.6585 2.04725C14.7231 2.05031 15.7431 2.45889 16.4958 3.18376C17.2486 3.90863 17.6729 4.89088 17.6761 5.91599V13.6527C17.6729 14.6778 17.2486 15.66 16.4958 16.3849C15.7431 17.1098 14.7231 17.5183 13.6585 17.5214H5.6243C4.55976 17.5183 3.53973 17.1098 2.78698 16.3849C2.03423 15.66 1.60994 14.6778 1.60676 13.6527V5.91599C1.60994 4.89088 2.03423 3.90863 2.78698 3.18376C3.53973 2.45889 4.55976 2.05031 5.6243 2.04725H13.6585ZM13.6585 0.5H5.6243C2.53087 0.5 0 2.93713 0 5.91599V13.6527C0 16.6315 2.53087 19.0686 5.6243 19.0686H13.6585C16.752 19.0686 19.2828 16.6315 19.2828 13.6527V5.91599C19.2828 2.93713 16.752 0.5 13.6585 0.5Z"
              fill="#1C2752"
            />
            <path
              d="M14.8633 5.91581C14.6249 5.91581 14.3919 5.84774 14.1937 5.72022C13.9956 5.5927 13.8411 5.41145 13.7499 5.19939C13.6587 4.98733 13.6348 4.75398 13.6813 4.52886C13.7278 4.30373 13.8426 4.09695 14.0111 3.93464C14.1797 3.77234 14.3944 3.66181 14.6282 3.61703C14.862 3.57225 15.1043 3.59523 15.3245 3.68307C15.5447 3.77091 15.7329 3.91966 15.8654 4.11051C15.9978 4.30136 16.0685 4.52573 16.0685 4.75527C16.0688 4.90776 16.0379 5.05882 15.9774 5.19977C15.917 5.34073 15.8282 5.46879 15.7163 5.57662C15.6043 5.68446 15.4713 5.76993 15.3249 5.82813C15.1785 5.88634 15.0217 5.91614 14.8633 5.91581ZM9.64102 6.68923C10.2767 6.68923 10.8981 6.87074 11.4266 7.21081C11.9551 7.55089 12.3671 8.03425 12.6103 8.59977C12.8536 9.16529 12.9172 9.78757 12.7932 10.3879C12.6692 10.9883 12.3631 11.5397 11.9136 11.9726C11.4641 12.4054 10.8915 12.7002 10.268 12.8196C9.64458 12.939 8.99837 12.8777 8.4111 12.6435C7.82382 12.4092 7.32187 12.0125 6.96872 11.5036C6.61557 10.9946 6.42707 10.3963 6.42707 9.78414C6.42798 8.96359 6.76689 8.17689 7.36942 7.59667C7.97196 7.01646 8.78891 6.6901 9.64102 6.68923ZM9.64102 5.14198C8.68757 5.14198 7.75554 5.41423 6.96278 5.92432C6.17002 6.43441 5.55214 7.15942 5.18727 8.00766C4.8224 8.8559 4.72694 9.78929 4.91294 10.6898C5.09895 11.5903 5.55808 12.4174 6.23227 13.0666C6.90645 13.7159 7.76542 14.158 8.70055 14.3371C9.63567 14.5162 10.605 14.4243 11.4858 14.0729C12.3667 13.7216 13.1196 13.1266 13.6493 12.3632C14.179 11.5998 14.4617 10.7023 14.4617 9.78414C14.4617 8.55296 13.9538 7.37221 13.0498 6.50163C12.1457 5.63106 10.9196 5.14198 9.64102 5.14198Z"
              fill="#1C2752"
            />
          </svg>

          <!-- facebook -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M19.5655 9.83999C19.5655 4.71289 15.2484 0.555664 9.92413 0.555664C4.59983 0.555664 0.282715 4.71289 0.282715 9.83999C0.282715 14.4739 3.80786 18.3148 8.41766 19.012V12.5246H5.969V9.83999H8.41766V7.79454C8.41766 5.46807 9.85741 4.18194 12.0594 4.18194C13.1144 4.18194 14.218 4.36348 14.218 4.36348V6.6485H13.0016C11.8046 6.6485 11.4302 7.36389 11.4302 8.09918V9.83999H14.1039L13.677 12.5246H11.4306V19.0128C16.0404 18.3161 19.5655 14.4751 19.5655 9.83999Z"
              fill="#1C2752"
            />
          </svg>

          <!-- twiter -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="18"
            viewBox="0 0 22 18"
            fill="none"
          >
            <path
              d="M21.2256 2.47844C20.4506 2.81518 19.6306 3.03703 18.7916 3.13698C19.6734 2.62064 20.3365 1.80034 20.6566 0.829929C19.8229 1.31742 18.9123 1.65947 17.9639 1.84142C17.5645 1.42285 17.0842 1.08986 16.5521 0.862704C16.02 0.635545 15.4473 0.518958 14.8687 0.520027C12.5264 0.520027 10.6308 2.38805 10.6308 4.6908C10.6291 5.0111 10.6658 5.33045 10.7401 5.64203C9.0605 5.56329 7.41579 5.13481 5.91124 4.38402C4.40669 3.63322 3.07542 2.57664 2.0026 1.28187C1.62623 1.91636 1.42719 2.6403 1.42627 3.37802C1.42627 4.82423 2.1808 6.10258 3.32012 6.85151C2.6451 6.83549 1.98392 6.65683 1.3927 6.3307V6.38235C1.3927 8.40532 2.85613 10.0883 4.79302 10.4713C4.42879 10.5684 4.05346 10.6176 3.67651 10.6177C3.40903 10.6181 3.14217 10.5922 2.8798 10.5402C3.41825 12.1973 4.98542 13.4025 6.84182 13.4369C5.33336 14.5995 3.48136 15.2278 1.57692 15.2232C1.23887 15.2227 0.901143 15.2026 0.56543 15.1629C2.50283 16.4 4.7549 17.0544 7.05358 17.0482C14.8597 17.0482 19.1243 10.6909 19.1243 5.17717C19.1243 4.9964 19.1196 4.81562 19.1109 4.63915C19.9387 4.05036 20.6548 3.31867 21.2256 2.47844Z"
              fill="#1C2752"
            />
          </svg>
        </div>

        <ButtonCusstom bg-color="#FFB342">
          <p class="font-bold">Contact Me</p>
        </ButtonCusstom>
      </ImageContentContainer>
    </div>

    <!-- description -->
    <div class="px-2 py-10">
      <Container>
        <TitleCustom text="Qualification & Experience" />

        <p class="py-6 text-myGray">
          Efficiently myocardinate market driven innovation open source
          alignments dramatically engaged high pay off infomediaries rather than
          client centric imperatives. Efficiently initiates world class
          applications after client centric infomediaries phosfluorescently
          expedite impactful supply chains via focused results holistically
          generated open source applications through bleeding edges sources
          compellingly supply just in time to catalysts for change through
          top-line potentialities. <br />
          <br />
          1. Listen to what they say about you <br />
          2. Randomised words which. <br />
          3. Internet tend to repeat predefined chunks
        </p>

        <p class="text-3xl font-bold text-myBlue">
          Make real time a day services
        </p>

        <p class="py-6 text-myGray">
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI. <br />
          <br />
          1. Interactively procrastinate high-payoff content <br />
          2. Randomised words which don't look even slightly believable. <br />
          3. Your best work, together in one package that works seamlessly from
          your computer <br />
          4. Delivers the tools you need to save time Improve field performance
          always <br /><br />
          Podcasting operational change management inside of workflows to
          establish a framework. Taking seamless key performance indicators
          offline to maximize the long tail. Keeping your eye on the ball while
          performing a deep dive on the start-up mentality to derive convergence
          on cross-platform integration.
        </p>
      </Container>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch(`/api/team/${route.params.id}`);
</script>
