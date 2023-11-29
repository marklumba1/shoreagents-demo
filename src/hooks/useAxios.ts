import axios from "axios";
import { useState } from "react";

const useAxios = ({
  url,
  method,
  payload,
}: {
  url: string;
  method: string;
  payload?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request({
        data: payload,
        method,
        url,
      });
      setData(response.data);
      setError("");
    } catch (error: any) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchData };
};

export default useAxios;
