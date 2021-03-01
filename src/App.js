import React from 'react';
import useFetch from './hooks/useFetch';
export default function App() {
  //use custom hooks
  const { data } = useFetch('https://jsonplaceholder.typicode.com/users');
  console.log(data);
  return (
    <div className='App'>
      <ul>{data && data.map((el) => <li key={el.id}>{el.name}</li>)}</ul>
    </div>
  );
}
