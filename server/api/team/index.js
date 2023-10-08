export default defineEventHandler((event) => {
  let teamMembers = [
    {
      id: 1,
      title: "David James",
      subtitle: "Engineer",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(6).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDYpLmpwZyIsImlhdCI6MTY5NjY3NjI1NSwiZXhwIjozMzIzMjY3NjI1NX0.LG9bA5XcZquaQe7OAF7d0Z1kIudO2RGmJF2odYs2M0U&t=2023-10-07T10%3A57%3A35.547Z",
    },
    {
      id: 2,
      title: "Kevin Martin",
      subtitle: "Engineer",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(7).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDcpLmpwZyIsImlhdCI6MTY5NjY3NjMwOSwiZXhwIjozMzIzMjY3NjMwOX0.hdgERKCHqgXo_tXm2JdYxoFCEzazYzr7efECix0Gy_Q&t=2023-10-07T10%3A58%3A29.543Z",
    },
    {
      id: 3,
      title: "Sarrah Albert",
      subtitle: "Engineer",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(8).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDgpLmpwZyIsImlhdCI6MTY5NjY3NjMzNSwiZXhwIjozMzIzMjY3NjMzNX0.QED9dbCxuuPXW3jlNsTj9GF3vIiDvuWogV6yV8cvK8w&t=2023-10-07T10%3A58%3A55.057Z",
    },
    {
      id: 4,
      title: "Jake Gibson",
      subtitle: "Engineer",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(9).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDkpLmpwZyIsImlhdCI6MTY5NjY3NjM2MiwiZXhwIjozMzIzMjY3NjM2Mn0.na3O4pE7tau5JPEI_KmPNxPQYYnoPUHVzQJaZAcPjfw&t=2023-10-07T10%3A59%3A21.904Z",
    },
    {
      id: 5,
      title: "Natalie Lee",
      subtitle: "Engineer",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(7).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDcpLmpwZyIsImlhdCI6MTY5NjY3NjMwOSwiZXhwIjozMzIzMjY3NjMwOX0.hdgERKCHqgXo_tXm2JdYxoFCEzazYzr7efECix0Gy_Q&t=2023-10-07T10%3A58%3A29.543Z",
    },
    {
      id: 6,
      title: "Max Oliver",
      subtitle: "Engineer",
      imageUrl:
        "https://rerjviduejgewfzshqms.supabase.co/storage/v1/object/sign/images/Photo%20(10).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvUGhvdG8gKDEwKS5qcGciLCJpYXQiOjE2OTY2NzY0MTEsImV4cCI6MzMyMzI2NzY0MTF9.cDdtSY9Frfer-2YpgMn24Rk0O5ZdLzbmRhEJW7KNkJo&t=2023-10-07T11%3A00%3A11.426Z",
    },
  ];
  return teamMembers;
});
