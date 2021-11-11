import React, { useState, useEffect } from "react";
export default function App() {
  const [percent, setPercent] = useState(0);
  const timer = () => {
    setTimeout(() => {
      setPercent(percent + 1);
    }, 60);
  };
  useEffect(() => {
    if (percent < 100) timer();
    //eslint-disable-next-line
  }, [percent]);
  return (
    <div>
      <div
        style={{
          height: "30px",
          width: `${percent}%`,
          backgroundColor: "green"
        }}
      ></div>
      <h2 style={{ marginTop: "-30px", textAlign: "center" }}>{percent}%</h2>
      <button onClick={() => setPercent(0)}>Refresh</button>
    </div>
  );
}
