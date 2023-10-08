<template>
  <div>
    <ImageHero
      image-url="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(8)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDgpICgxKS5qcGciLCJpYXQiOjE2OTY2OTY2NjEsImV4cCI6MzMyMzI2OTY2NjF9.SfkL2BJ1Ue8zOay_y8j-c5owMYhZKUoDIAoTkdWjyO4&t=2023-10-07T16%3A37%3A41.516Z"
      :title="data.title"
    />
  </div>
  <div class="py-20">
    <Container>
      <div class="flex flex-col-reverse sm:flex-row gap-6 p-2">
        <div
          class="flex flex-col items-start justify-center min-w-[300px] bg-myWhite px-6 py-4 border-[#D2D2D2]"
        >
          <div class="border-b-2 w-full">
            <p class="text-myBlue font-bold text-base py-3">
              Project Information
            </p>
          </div>

          <div class="border-b-2 w-full">
            <p class="text-myBlue font-bold text-base py-3">Client :</p>
            <p class="text-myGray">Choose a Plan Work</p>
          </div>

          <div class="border-b-2 w-full">
            <p class="text-myBlue font-bold text-base py-3">Location :</p>
            <p class="text-myGray">New York United States</p>
          </div>

          <div class="border-b-2 w-full">
            <p class="text-myBlue font-bold text-base py-3">Project Date :</p>
            <p class="text-myGray">15 December ,2022</p>
          </div>

          <div class="border-b-2 w-full">
            <p class="text-myBlue font-bold text-base py-3">Category :</p>
            <p class="text-myGray">Service</p>
          </div>

          <div class="border-b-2 w-full">
            <p class="text-myBlue font-bold text-base py-3">Value :</p>
            <p class="text-myGray">$ 2 250 000</p>
          </div>
        </div>
        <div class="w-full">
          <img
            class="w-full"
            src="https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Image%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvSW1hZ2UgKDEpLmpwZyIsImlhdCI6MTY5NjY5NzY2NiwiZXhwIjozMzIzMjY5NzY2Nn0.6No70v8-LRw8-DpR0lH8W8Mb81ShvlWooQJJhXzhiV8&t=2023-10-07T16%3A54%3A25.987Z"
            alt=""
          />
        </div>
      </div>

      <div class="py-16 px-2">
        <title-custom text="Project Descripation" />
        <p class="text-myGray mt-3">
          Pellentesque vehicula eros neque, maximus mattis est sagittis Nulla
          facilisi. In sed pretium dynamically target high-payoff intellectual
          capital for customized technologies objectively integrate emerging
          core competencies before process-centric communities dramatically
          evisculate holistic innovation rather than client-centric data. <br />
          <br />1. Listen to what they say about you <br />
          2. Randomised words which. <br />3. Internet tend to repeat predefined
          chunks <br />
          <br />Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI. <br />
          <br />
          1. Interactively procrastinate high-payoff content <br />
          2. Randomised words which don't look even slightly believable.
          <br />3. Your best work, together in one package that works seamlessly
          from your computer <br />
          4. Delivers the tools you need to save time Improve field performance
          always <br />
          <br />Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI.
        </p>
      </div>
      <div class="py-16 px-2 flex flex-col gap-4">
        <title-custom text="Related Projects" />
        <CardContainer type="projects" :data="projects" />
      </div>
    </Container>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useFetch(`/api/projects/${route.params.id}`);
const { data: projects } = await useFetch(`/api/projects`);
projects.value = projects.value.filter((p) => p.id > 3);
</script>
