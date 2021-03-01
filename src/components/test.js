import React from 'react';

export default function test() {
  const [data, setData] = useState('Click me');

  return (
    <div>
      <button onClick={() => setData('Thank, beed clicked')}>{data}</button>
    </div>
  );
}
