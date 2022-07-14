import { useState, useEffect } from "react";
function Hello() {
  // cleanup function: useEffect의 첫번째 인자로 전달되는 함수의 return값으로 함수가 들어가면, component가 destroy될 때 return되는 함수가 실행되도록 할 수 있다.
  // cleanup function이 자주 사용되지는 않는다. but, 알아놓으면 좋지 !
  useEffect(() => {
    console.log("created :)");
    return () => console.log("bye :(");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {/* javascript로 아래와 같이 작업할 경우, component를 destroy한다. */}
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
