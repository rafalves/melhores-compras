import qs from "qs";
import { checkSlug } from "~/composables/utils";

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();
  const query = getQuery(event);

  // takes the last position of the slug
  const slug = event.node.req.url.split(",").pop();

  //check if route is slug or category, if category access it by id
  const isCategory = checkSlug(slug);

  if (typeof isCategory === "number") {
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
  } else {
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
  }
});
