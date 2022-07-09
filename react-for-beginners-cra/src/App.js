import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("i run all the time.");
  // useEfact(): 첫번째 인자로 전달되는 함수를 "첫번째 랜더링 에서만" 작동하도록 해준다. (like call the api)
  useEffect(() => {
    console.log("CALL THE API...");
  }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
