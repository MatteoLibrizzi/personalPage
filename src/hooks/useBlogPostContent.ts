import { useFetchBlobText } from "./useFetch";

export const useBlogPostContent = (s3Key: string) => {
  const { data, loading, error } = useFetchBlobText<string>({
    url: "https://5k3fdtvru2.execute-api.eu-west-1.amazonaws.com/getPosts",
    method: "POST",
    body: JSON.stringify({ eventType: "GetPostContent", s3Key }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { data, loading, error };
};
