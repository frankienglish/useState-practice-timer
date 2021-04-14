import React, { useState } from "react";

function App() {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setTime] = useState(time);

  function timer() {
    setTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={setInterval(timer, 1000)}>Get Time</button>
    </div>
  );
}

export default App;
