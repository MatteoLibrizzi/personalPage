import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
  method: string;
  body: string;
  headers: HeadersInit;
  mode?: RequestMode;
  cache?: RequestCache;
  credentials?: RequestCredentials;
  referrerPolicy?: ReferrerPolicy;
}

export const useFetchJson = <T>(props: UseFetchProps) => {
  const { url } = props;

  const [data, setData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...props,
        });
        const code = response.status;
        if (code !== 200) {
          throw new Error("Image not found");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error } as {
    data: T;
    loading: boolean;
    error: boolean;
  };
};

export const useFetchBlobText = <T>(props: UseFetchProps) => {
  const { url } = props;

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...props,
        });
        const code = response.status;
        if (code !== 200) {
          throw new Error("Image not found");
        }

        const result = await (await response.blob()).text();
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error } as {
    data: T;
    loading: boolean;
    error: boolean;
  };
};

export const useFetchBlobImage = <T>(props: UseFetchProps) => {
  const { url } = props;

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          ...props,
        });
        const code = response.status;
        if (code !== 200) {
          throw new Error("Image not found");
        }

        const blob = await response.blob();
        const result = URL.createObjectURL(blob);
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, error } as {
    data: T;
    loading: boolean;
    error: boolean;
  };
};
