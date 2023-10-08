export default function useFormattedDate(timestamp) {
  const date = new Date(timestamp);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();
  return `${monthNames[monthIndex]} ${day}, ${year}`;
}
