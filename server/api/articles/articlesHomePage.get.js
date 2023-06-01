import qs from "qs";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const collection = "/api/articles?";
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );

  return $fetch(`${config.public.apiBase}${collection}${query}`, {
    method: "GET",
  });
});
