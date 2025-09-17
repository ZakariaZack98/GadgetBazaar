import { useState, useEffect } from "react";

interface FetchResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

/**
 * A hook that fetches data from a given url and returns a response object containing
 * the fetched data, any error encountered, and a boolean indicating whether the data is still being loaded.
 *
 * @template T
 * @param url The url to fetch data from.
 * @returns A response object containing the fetched data, any error encountered, and a boolean indicating whether the data is still being loaded.
 */
export const useFetch = <T>(url: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
