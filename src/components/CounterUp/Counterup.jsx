import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Counterup({ end = 500, duration = 5, delay = 0 }) {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [startCount, setStartCount] = useState(false);
  const [countKey, setCountKey] = useState(0);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
      setCountKey((prev) => prev + 1);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <h1 className="font-bold text-4xl text-orange-500">
        {startCount ? (
          <CountUp
            key={countKey}
            start={0}
            end={end}
            duration={duration}
            delay={delay}
          />
        ) : (
          `${0}`
        )}
        
      </h1>
    </div>
  );
}

export default Counterup;
