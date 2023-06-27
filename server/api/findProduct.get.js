import qs from "qs";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const queryApi = getQuery(event);
  const collection = `/api/products/${queryApi.id}?`;
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true, // prettify URL
    }
  );
  // console.log("url: " + `${config.public.apiBase}${collection}${query}`);
  return $fetch(`${config.public.apiBase}${collection}${query}`, {
    method: "GET",
  });
});
