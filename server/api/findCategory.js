// api findCategory.ts
export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const collection = "/api/categories";
  return $fetch(`${config.public.apiBase}${collection}`, {
    method: "GET",
  });
});
