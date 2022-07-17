const formatDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month.toString().padStart(2, '0')}/${year}`;
};

export default formatDate;
