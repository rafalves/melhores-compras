import qs from "qs";

export default defineEventHandler((event) => {
  // takes the last position of the slug
  const slug = event.node.req.url.split(",").pop();
  const config = useRuntimeConfig();
  const collection = `/api/articles/find-by-slug/${slug}?`;
  const query = qs.stringify(
    {
      populate: "deep",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  return $fetch(`${config.public.apiBase}${collection}${query}`);
});
