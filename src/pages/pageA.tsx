import { useState } from 'react';


const IndexPage:React.FC = () => {
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <>
      <h1>Welcome to the greatest app in the world!</h1>
     
    </>
  );
};

export default IndexPage;