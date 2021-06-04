export const getDate = (datetime) => {
  const date = new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: 'numeric'
  }).format(new Date(datetime))

  return date;
} 