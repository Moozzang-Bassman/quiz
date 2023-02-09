import React, { useState } from 'react';
import './App.css';

function App() {

  const [title, setTitle] = useState(['안녕하세요'])
  const [inputVal, setInputval] = useState('');

  function inputValChangeHandeler(e) {
    setInputval(e.target.value)
  }
  function addListButtonHandler() {
    let copy = [...title]
    if (!inputVal) {
      alert('뭐라도 입력하쇼')
    } else {
      copy.unshift(inputVal)
      setTitle(copy)
      setInputval('')

    }

  }

  return (
    <div>
      <div className='input-box'>
        <div><input autoFocus value={inputVal} onChange={inputValChangeHandeler} type='text'></input>
          <button onClick={addListButtonHandler}>추가하기</button></div>
        <h1>Todo List</h1>
      </div>

      <div className='box-container'>
        {title.map((item, i) => {
          return <div key={i} className='box' >
            <p>{item}</p>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
