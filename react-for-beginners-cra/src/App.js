import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // ...arr => arr의 모든 요소들을 return
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write for to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {/* arr.map(f) => arr의 각 요소에 첫번째 인자로 들어가는 함수를 적용한다. 햄수의 첫번째 인자는 각 요소를 가리킬 수 있다. */}
        {/** ex) ['one', 'two', 'three'].map((item) => item.toUpperCase()) ==> ['ONE', 'TWO', 'THREE'] */}
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
