import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import Clock from 'react-digital-clock';
import TodoList from './TodoList.jsx';




const App = () =>{

    
   const [value, setValue] = useState();

    const ChangeFun = (val) =>{
        setValue(val.target.value);
    }

    const [display, setDisplay] = useState([]);

    const SubmitFun = () =>{

        if(value === ''){
                setDisplay((olditems) =>{
                    return [...olditems];
                    }) 
           }else{
                setDisplay( (olditems) =>{
                return [...olditems, value];
                })
          }
        
        setValue('');
    };


    const deleteItems = (index) =>{
    setDisplay((olditems) => {
        return olditems.filter((arraylist, id) => {
            return index !== id;
        }
         );
    }
     );
        
    };



    const [increDecre, setIncreDecre] = useState(0);


    const IncreMent = () =>{
        setIncreDecre(increDecre + 1);
            
    }

    const DecreMent = () =>{
        setIncreDecre(increDecre - 1);
        if(increDecre === 0){
            setIncreDecre(0);
            return alert('The number below 0 can not be fetched');
        }
    }


    

    let now = new Date();
    let newDate = now.toLocaleDateString();
    
    let curDate = now.getDate();
    let curMonth = now.getMonth();
    let curYear = now.getFullYear();



    const [date, setDate] = useState(curDate);
    const [month, setMonth] = useState(curMonth+1);
    const [year, setYear] = useState(curYear);
     
    const IncreYear = () =>{
        if(date >= 1 && date < 31){
            setDate(date + 1);
        }else if(date === 31 && month >= 1 && month < 12){
            setDate(1);
            setMonth(month + 1);
        }else if(month === 12 && date === 31){
        setDate(1);
        setMonth(1);
        setYear(year + 1);
        }else{
            setDate(newDate);
        }
        
    }

    const DecreYear = () =>{

        if(date > 1 && date <= 31){
            setDate(date - 1);
        }else if(date === 1 && month > 1 && month < 12){
            setDate(31);
            setMonth(month - 1);
        }else if(date === 1 && month === 1){
        setDate(31);
        setMonth(12);
        setYear(year - 1);
        }else{
            setDate(newDate);
        }
    }

       
    
     const [newValue, SetNewValue] = useState('');
     const [newList, setNewList] = useState([]);

     const ChangeList = (event) =>{
         let updateValue = event.target.value;
         SetNewValue(updateValue);
     }

     const ClickList = () =>{
         setNewList( (preValue) =>{
             return [...preValue,newValue];
         });
         SetNewValue ('');
     }


    return(
        <>

        <div className="main_div">
        <Clock />;
            <div className="center_div">
                <br />
                <h1> Todo List </h1>
                <br />
                <div className="two_div">
                <input type="text" placeholder="Add a Iteam" onChange={ChangeFun} value={value} />
                <button onClick={SubmitFun} className="add_button"> + </button>
                </div>
                <br />
                <ol className="style_todo">
                    {display.map( (items, index) =>{
                        return(
                            <>
                            <div className="todo_list">
                            <i className="fa fa-times" aria-hidden="true" onClick={() =>{
                                deleteItems(index);
                            }}></i>
                            <li> {items} </li>
                            </div>
                            </>

                        );
                        }
                    )}
                </ol>
            </div>
              <div className="new_div">
                <h2 className="num"> {increDecre} </h2><br />
                <button className="increment" onClick={IncreMent}> Increment </button>
                <button className="increment" onClick={DecreMent}> Decrement </button>
                
                <h2 className="num"> {date} / {month} / {year} </h2><br />
                <Tooltip title="Add">
                <Button className="addbutton" onClick={IncreYear}> 
                <AddIcon />
                </Button>
                </Tooltip>
                <Tooltip title="Delete">
                <Button className="deletebutton" onClick={DecreYear}> 
                <DeleteIcon /> 
                </Button>
                </Tooltip>
                </div>

                <div className="center_div">
                <br />
                <h3> TODO LIST </h3>
                <br />
                <div className="two_div">
                <input type="text" placeholder="Add a Iteam" onChange={ChangeList} value={newValue} />
                <button className="add_button" onClick={ClickList}> 
                <AddIcon />
                </button>
                </div>
                <br />
                <ol className="style_todo">
                    
                     {newList.map( (arrValue, index) =>{
                        return (
                        <TodoList 
                         arrList={arrValue}
                        key = {index}>

                         </TodoList>
                        )})} 
                    
                </ol>
            </div>



        
        
        </div>


        </>
    )


}


export default App;