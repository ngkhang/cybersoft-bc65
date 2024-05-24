import {useNavigate, useParams, useSearchParams} from 'react-router-dom'

const useRoute = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [searchParam, setSearchParam] = useSearchParams();
  
  return {
    param,
    navigate,
    searchParam,
    setSearchParam,
  }
}

export default useRoute;
