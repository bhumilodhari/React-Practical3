import TodoList from "../TodoList/TodoList";
import TodoContainer from "../../styled/todoContent";
import Empty from "../../styled/empty";

function TodoContent(props) {
    return (
        <TodoContainer>
            {props.data.length > 0 ? props.data.map((dummy) => (
                <TodoList 
                    setList={props.setList}
                    key={dummy.id} 
                    id={dummy.id} 
                    data={dummy.data} 
                    isChecked={dummy.isChecked}/>
            )) : <Empty> Its empty!</Empty>}
        </TodoContainer>
    )
}

export default TodoContent;