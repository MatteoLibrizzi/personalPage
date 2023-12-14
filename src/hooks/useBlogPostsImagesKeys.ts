import {  useFetchJson } from "./useFetch";

export const useBlogPostsImagesKeys = (url: string) => {
  const { data, loading, error } = useFetchJson<string[]>({
    url,
    method: "POST",
    body: JSON.stringify({ eventType: "GetImagesKeys" }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { data, loading, error };
};
