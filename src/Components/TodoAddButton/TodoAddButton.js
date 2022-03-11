import React, { useState } from 'react';
import InputStyle from '../../styled/InputStyle';
import TodoAddButtonStyle from '../../styled/todoAddButton';

function TodoAddButton(props) {

    const [showInput, setInput] = useState(false);
    const [id, setId] = useState('');
    const [error, setError] = useState(false);

    const addButtonHandler = () => {
        setInput(true);
    }

    const changeHandler = (event) => {
        setId(event.target.value);
        setError(false);
    }

    const enterHandler = (event) => {
       if(event.keyCode === 13)
       {    
           if(id.length === 0)
           {
               setError(true);
               alert('Its empty! please enter your todo items')
               return;
           }
           props.onAdd({
               id: Math.random().toString(),
               data: id,
               isChecked: false
           })
           setId('');
       }
              
       if(event.keyCode === 27)
       {
           setInput(false);
       }
    }

    return (
        <>
            {showInput && (
                <InputStyle
                    error={error}
                    onChange={changeHandler}
                    onKeyUp={enterHandler}
                    value={id}
                />)}
            {!showInput && (
                <TodoAddButtonStyle onClick={addButtonHandler}>+</TodoAddButtonStyle>)}
        </>
    )
}



export default TodoAddButton;