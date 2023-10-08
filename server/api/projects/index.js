export default defineEventHandler((event) => {
  const projects = [
    {
      id: 1,
      title: "Electrical & Maintanace",
      subtitle: "House, Office",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(3).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDMpLmpwZyIsImlhdCI6MTY5NjY5NDA0MywiZXhwIjozMzIzMjY5NDA0M30.QE8gW6nTtn1hPSnzhlw83-uZvkKBrqfMtzn5jBq4ZYg&t=2023-10-07T15%3A54%3A02.445Z",
    },
    {
      id: 2,
      title: "Industry machine issue",
      subtitle: "House, Office",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(4)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDQpICgxKS5qcGciLCJpYXQiOjE2OTY2OTQwNzUsImV4cCI6MzMyMzI2OTQwNzV9.9U_-tu4rhH9XveyzYL7bbbFordMhgDlCm7lX0NwsFfQ&t=2023-10-07T15%3A54%3A34.766Z",
    },
    {
      id: 3,
      title: "Car Repair & Maintanance",
      subtitle: "House, Office",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(7)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDcpICgxKS5qcGciLCJpYXQiOjE2OTY2OTQxODYsImV4cCI6MzMyMzI2OTQxODZ9.mkyhDIZNYA2mhKp5TBbZE8NbF-T2Z4riq6ObZUqqVWo&t=2023-10-07T15%3A56%3A26.220Z",
    },
    {
      id: 4,
      title: "Interior/Exterior Services",
      subtitle: "House, Office",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(5)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDUpICgxKS5qcGciLCJpYXQiOjE2OTY2OTQxMzAsImV4cCI6MzMyMzI2OTQxMzB9.KsgANEEXhGhEgesYyd5Tsnwq6pT8luUhSLCUxApd_qY&t=2023-10-07T15%3A55%3A29.964Z",
    },
    {
      id: 5,
      title: "Building installation",
      subtitle: "House, Office",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(6)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDYpICgxKS5qcGciLCJpYXQiOjE2OTY2OTQxNzQsImV4cCI6MzMyMzI2OTQxNzR9.T9WC6DrKaZ5Nu_7wa4Vt5_TnBhutvWdzxE11N1u3bO4&t=2023-10-07T15%3A56%3A13.710Z",
    },
    {
      id: 6,
      title: "Electrical Installation",
      subtitle: "House, Office",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(7)%20(1).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDcpICgxKS5qcGciLCJpYXQiOjE2OTY2OTQxODYsImV4cCI6MzMyMzI2OTQxODZ9.mkyhDIZNYA2mhKp5TBbZE8NbF-T2Z4riq6ObZUqqVWo&t=2023-10-07T15%3A56%3A26.220Z",
    },
  ];

  return projects;
});
