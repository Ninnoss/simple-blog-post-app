export const generateRandomDate = () => {
  const start = new Date(2019, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
