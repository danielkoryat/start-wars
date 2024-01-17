// useFetch.ts
import { useState, useEffect } from "react";
import axiosInstance from "../api/axios";
import axios, { AxiosResponse } from "axios";
import ApiResponse from "../interfaces/ApiResponse";

const useFetch = <T = unknown>(
  endpoint: string
): { data: ApiResponse<T> | null; error: Error | null; loading: boolean } => {
  const [data, setData] = useState<ApiResponse<T> | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response: AxiosResponse<ApiResponse<T>> = await axiosInstance.get(
          endpoint,
          {
            cancelToken: source.token,
          }
        );
        if (isMounted) {
          setData(response.data);
          setError(null);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Fetch cancelled: ", err.message);
        } else if (isMounted) {
          setError(err as Error);
          setData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to cancel the request and set isMounted to false
    return () => {
      isMounted = false;
      source.cancel("Component got unmounted"); // cancel the request
    };
  }, [endpoint]);

  return { data, error, loading };
};

export default useFetch;
