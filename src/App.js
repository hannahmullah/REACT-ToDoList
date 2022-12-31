import { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);


  const addTask = (event) => {
    event.preventDefault();
    setList([...list, { text: input, done: false }]);
    setInput('')
  }

  const deleteItem = (index) => {
    let arr = [...list];
    arr.splice(index, 1)
    setList(arr);
    console.log(deleteItem)
  }

  const checkTask = (index, event) => {
    if (event.target === event.currentTarget) {
      let arr = [...list]
      arr[index].done = !arr[index].done;
      setList(arr);
    }
    console.log(checkTask)
  }

  return (
    <div className="app">
      <h1>TO DO LIST</h1>
      <div className="todoList">
        <form onSubmit={addTask}>
          <input type="text" value={input} required onChange={(event) => setInput(event.target.value)} placeholder="add task" />
          <button type="submit">+</button>
        </form>

        <div className="taskWrap">
          {list.map((task, index) => {
            return (
              <div key={index} className={task.done ? 'strikethrough' : 'none'} >
                <p style={{ width: '330px' }} >{task.text}</p>

                <button className="completeBtn btns" onClick={(event) => checkTask(index, event)}>✓</button>
                <button className="deleteBtn btns" onClick={() => deleteItem(index)}>x</button>
              </div>
            )
          })}
        </div>
      </div>
    </div >
  );
}

export default App;

