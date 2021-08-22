const dateString = '1989/12/27'

const perse = (birth: string): Date | null => {
  const date = new Date(birth);
  console.log(typeof new Date(birth))
  if (!isValid(date)) return null;
  return date;
};

const isValid = (date: Date): boolean => {
  return Object.prototype.toString.call(date) === '[object Date]' && !Number.isNaN(date.getTime());
}

console.log(perse(dateString))
