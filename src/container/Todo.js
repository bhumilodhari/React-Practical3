import TodoDate from '../components/TodoDate/TodoDate';
import TodoContent from '../components/TodoContent/TodoContent';
import TodoAddButton from '../components/Button/Button';
import TodoStyle from '../styled/todo';
import { useState, useEffect } from 'react';
import { getStorage, addStorage, resetStorage } from '../services/localStorage';
import { getDay } from "../utils/util";

function Todo() {
  const [list, setList] = useState([]);
  const addHandler = (newTask) => {
    setList((prev) => {
      return [...prev, newTask]
    })
    addStorage(newTask);
  }

  useEffect(() => {
    const data = getStorage();
    if (data && data.date === getDay()) {
      setList(data.tasks);
    } else {
      resetStorage();
    }
  }, []);

  return (
    <TodoStyle>
      <TodoDate />
      <TodoContent setList={setList} data={list} />
      <TodoAddButton onAdd={addHandler} />
    </TodoStyle>
  )
}

export default Todo;