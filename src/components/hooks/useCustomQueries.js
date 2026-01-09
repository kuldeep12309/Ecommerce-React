import { useState, useEffect } from "react";
import axios from "axios";

const useCustomQueries = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoader(true);
      setError(false);

      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.error("Network Error:", err);
        setError(true);
      } finally {
        setLoader(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loader };
};

export default useCustomQueries;
