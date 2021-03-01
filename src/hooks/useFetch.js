import { useEffect, useReducer } from 'react';

const initialState = {
  loading: '',
  error: '',
  data: [],
};

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_FETCH_START':
      return { ...state, loading: 'yes' };
    case 'DATA_FETCH_SUCCESS':
      return { ...state, loading: '', data: action.payload };
    case 'DATA_FETCH_FAILURE':
      return { ...state, loading: '', error: action.payload };
    default:
      return state;
  }
};

export default function useFetch(url) {
  const [data, dispatch] = useReducer(apiReducer, initialState);

  //   const [data, setData] = useState([]);
  //   async function getData() {
  //     const resposne = await fetch(url);
  //     const data = await resposne.json();
  //     setData({ data: data });
  //   }

  //   useEffect(() => {
  //     getData();
  //     // eslint-disable-next-line
  //   }, []);

  useEffect(() => {
    dispatch({ type: 'DATA_FETCH_START' });

    fetch(url)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((json) => {
        dispatch({ type: 'DATA_FETCH_SUCCESS', payload: json });
      })
      .catch((error) => {
        dispatch({ type: 'DATA_FETCH_FAILURE', payload: error.message });
      });

    //getData().
    // eslint-disable-next-line
  }, []);

  return data;
}
