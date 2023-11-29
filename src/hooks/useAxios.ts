import axios from "axios";
import { useState, useEffect } from "react";

const useAxios = ({
  url,
  method,
  payload,
}: {
  url: string;
  method: string;
  payload?: string;
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request({
          data: payload,
          method,
          url,
        });
        setData(response.data);
      } catch (error: any) {
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { loading, error, data };
};

export default useAxios;
