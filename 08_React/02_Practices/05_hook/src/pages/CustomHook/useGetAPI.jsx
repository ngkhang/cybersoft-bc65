import axios from "axios";
import { useEffect, useState } from "react";

const useGetAPI = (url) => {
  const [result, setResult] = useState([]);

  const getApi = async (url) => {
    let response = await axios.get(url);
    setResult(response.data.content);
  };

  useEffect(() => {
    getApi(url);
  }, [url]);

  return result;
};

export default useGetAPI;
