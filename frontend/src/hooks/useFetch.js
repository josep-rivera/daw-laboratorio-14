import { useEffect, useState, useCallback } from "react";

export const useFetch = (callback) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const load = useCallback(() => {
    setLoading(true);
    setError(false);

    callback()
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error("ERROR FETCH:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [callback]);

  useEffect(() => {
    load();
  }, [load]);

  return { data, loading, error, reload: load };
};
