import {useState} from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = num => {
    
    setCount(count + num);
  };

  return (
    <div>
      <Child handleClick={handleClick} />

      <h2>Count: {count}</h2>
    </div>
  );
}
