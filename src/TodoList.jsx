import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';


const TodoList = (props) =>{

    const [line, newLine] = useState(false);

    const ClickIcon = () =>{

        newLine(true);
    }

    return(
        <>
        <div className="todo_divv">
        <span onClick={ClickIcon}>
         <DeleteIcon className="dlticon" />
         </span>
        <li style = {{textDecoration: line ? "red line-through": "none"}}> 
        {props.arrList} 
        </li>
        </div>
        </>
    )

}


export default TodoList;