import { AuthorsData } from "~/types/Author";

export interface AuthorState {
  id: number;
  name: string;
  url: string;
  alt: string;
}

export interface AuthorStore {
  items: Record<number, AuthorState>;
}

export const useAuthorStore = () =>
  useState<AuthorStore>("authorStore", () => ({
    items: {},
  }));

export const findAuthorById = (id: number): AuthorState | undefined => {
  if (id) {
    const result = getAuthorById(id);
    return result;
  } else {
    return undefined;
  }
};

export function getAuthorById(id: number | undefined): AuthorState | undefined {
  const state = useAuthorStore();
  const result = id ? state.value.items[id] : undefined;
  if (result) {
    return result;
  } else {
    fetchAutorStore(id)
      .then((result: AuthorState | undefined) => result)
      .catch(() => undefined);
  }
}

export async function fetchAutorStore(
  id: number | undefined
): Promise<AuthorState | undefined> {
  const state = useAuthorStore();
  try {
    const { data: authorsData, error } = await useFetch<AuthorsData>(
      "/api/findAllAuthors"
    );
    if (!error.value) {
      authorsData.value?.data?.forEach((element) => {
        if (state.value.items[element.id!] === undefined) {
          const newAuthorState: AuthorState = {
            id: element.id!,
            name: element.attributes?.name || "",
            url:
              element.attributes?.photo?.data?.attributes?.formats?.thumbnail
                ?.url ||
              element.attributes?.photo?.data?.attributes?.formats?.small
                ?.url ||
              element.attributes?.photo?.data?.attributes?.formats?.medium
                ?.url ||
              element.attributes?.photo?.data?.attributes?.formats?.large
                ?.url ||
              "",
            alt:
              element.attributes?.photo?.data?.attributes?.alternativeText ||
              "",
          };
          // add download authors to the stateStore
          state.value.items[newAuthorState.id] = newAuthorState;
        }
      });
    }
    return id ? state.value.items[id] : undefined;
  } catch {
    return undefined;
  }
}
