import { useFetchJson } from "./useFetch";

export const useBlogPostsTitles = (url: string) => {
  const { data, loading, error } = useFetchJson<string[]>({
    url,
    method: "POST",
    body: JSON.stringify({ eventType: "GetPostsKeys" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { data, loading, error };
};
