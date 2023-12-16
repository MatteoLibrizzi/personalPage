import { useFetchBlobImage } from "./useFetch";

export const useBlogPostImage = (url: string, postsTitle: string) => {
  const { data, loading, error } = useFetchBlobImage<string>({
    url,
    method: "POST",
    body: JSON.stringify({ eventType: "GetImage", s3Key: postsTitle }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { data, loading, error };
};
