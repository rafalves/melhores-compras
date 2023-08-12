import qs from "qs";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const slug = event.context.params.slug;
  console.log(event.context.params.slug);

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
