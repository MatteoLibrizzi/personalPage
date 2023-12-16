import { useFetchBlobText } from "./useFetch";

type UseBlogPostContentProps = {
  s3Key: string;
  url: string;
};

export const useBlogPostContent = (props: UseBlogPostContentProps) => {
  const { s3Key, url } = props;
  const { data, loading, error } = useFetchBlobText<string>({
    url,
    method: "POST",
    body: JSON.stringify({ eventType: "GetPostContent", s3Key }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return { data, loading, error };
};
