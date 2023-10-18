// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  head: {
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Logo%20(1).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvTG9nbyAoMSkucG5nIiwiaWF0IjoxNjk3NjM1NzgxLCJleHAiOjMzMjMzNjM1NzgxfQ.3aldFDiI5WYCOcfrS0W45adcv-rQYT6fZfIcM-uutXo&t=2023-10-18T13%3A29%3A42.756Z",
      },
    ],
  },
  devtools: { enabled: true },
  plugins: [{ src: "~/plugins/aos", mode: "client" }],
});
