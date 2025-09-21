//TODO: reverse slugs into formatted keyword ==============================================
export const formatSlug = (slug: string) => {
  // Replace hyphens with spaces and capitalize the first letter of each word
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};