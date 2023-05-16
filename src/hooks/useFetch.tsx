import {useEffect, useRef, useState} from 'react';

export function useFetch(url: string, options?: any) {
  const [isLoading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<unknown>(null);
  const cache = useRef<any>({});

  useEffect(() => {
    async function fetchData() {
      if (cache.current[url]) {
        const data = cache.current[url];
        setResponse(data);
      } else {
        try {
          const response = await fetch(url, options);
          const json = await response.json();
          cache.current[url] = json;
          setResponse(json);
        } catch (error: unknown) {
          setError(error);
        }
      }
      setLoading(false);
    }

    fetchData();
  }, [url, options]);

  return {isLoading, response, error};
}
