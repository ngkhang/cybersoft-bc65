/*
  Requirement
  - Install: 
*/

import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetApi = (config) => {
  const [result, setResult] = useState();
  
  const getApi = async (config) => {
    const res = await axios(config);
    setResult(res.data.content)
  }

  useEffect(() => {
    getApi(config)
  }, [config])
  
  return result;
}

export default useGetApi;
