const industries = ['Technology', 'Marketing', 'Finance', 'Education', 'Travel'];

export const getCategory = (postId) => {
  const randomIndex = postId % industries.length;
  return industries[randomIndex];
};
