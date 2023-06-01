import qs from "qs";

export default defineEventHandler((event) => {
  const slug = event.node.req.url.split(",").pop();
  const config = useRuntimeConfig();
  const collection = `/api/articles/find-by-slug/${slug}?`;
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return $fetch(`${config.public.apiBase}${collection}${query}`);
});
