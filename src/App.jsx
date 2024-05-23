import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
// import Confetti from 'react-confetti';

import './components/style.css';
import Ladder from './components/Ladder';

function App() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div>
        {/* {showConfetti && <Confetti width={width} height={height} />} */}
    <Ladder/>

      </div>
    </>
  );
}

export default App;
