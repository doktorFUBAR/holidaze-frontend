import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";

const useFetch = (url) => {
  const [auth] = useContext(AuthContext);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        if (auth) {
          const res = await fetch(url);
          const json = await res.json();

          setData(json);
          setLoading(false);
        }
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, auth]);

  return { loading, error, data };
};

export default useFetch;
