import { FaRegDotCircle } from "react-icons/fa";
import { IconContext } from 'react-icons';
import TodoListStyle from '../../styled/TodoList/todoListStyle';
import TodoListItems from '../../styled/TodoList/todoListItems';
import IsChecked from '../../styled/TodoList/isChecked';
import TodoCheckBox from '../../styled/TodoList/todoCheckBox';
import { storageUpdate } from '../../services/localStorage';

function TodoList(props) {
  const checkHandler = () => {
    const newTask = {
      id: props.id,
      data: props.data,
      isChecked: !props.isChecked,
    };

    storageUpdate(newTask, props.id);
    props.setList((prev) => {
      return prev.map((dummy) => {
        if (dummy.id === props.id) {
          return {
            ...dummy,
            isChecked: !dummy.isChecked,
          };
        }
        return dummy;
      });
    })
  }
  return (
    <IconContext.Provider value={{ className: props.isChecked ? "completed" : "checks" }}>
      <TodoListStyle>
        <TodoListItems>
          <IsChecked isChecked={props.isChecked}>{props.data}</IsChecked>
          <TodoCheckBox type="checkbox" id={props.id} onClick={checkHandler}> <FaRegDotCircle /></TodoCheckBox>
        </TodoListItems>
      </TodoListStyle>
    </IconContext.Provider>
  )
}



export default TodoList;