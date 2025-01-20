import React from "react";

function App(){
  var time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = React.useState(time);
  console.log(time);

  function getTime(){
  // var time2 = new Date().toLocaleTimeString();
    setCurrentTime(new Date().toLocaleTimeString());
  }

  setInterval(getTime,1000);

  return (<div>
    <h1>{currentTime}</h1>
    <button onClick = {getTime}>Get Time</button>
  </div>)
}
export default App
