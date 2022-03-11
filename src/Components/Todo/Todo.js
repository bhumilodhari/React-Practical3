import TodoDate from '../TodoDate/TodoDate';
import TodoContent from '../TodoContent/TodoContent';
import TodoAddButton from '../TodoAddButton/TodoAddButton';
import TodoStyle from '../../styled/todo';
import { useState, useEffect } from 'react';
import { getStorage, addStorage, resetStorage } from '../../services/localStorage';
import { getDay } from '../../Util/util';

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

    const interval = setInterval(() => {
      console.log(getDay());
      if (getDay().toString() !== getStorage().date.toString()) {
        window.location.reload();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
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