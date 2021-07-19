import React, { useEffect } from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendingToServer, gettingDataFromServer,deletingDataFromServer } from '../actions/todoAction';
import  Test  from "../test";



function Todo(props) {
    const dispatch = useDispatch();
    const List = useSelector((state) => state.todoReducer);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();


    useEffect(() => {        
        dispatch(gettingDataFromServer());
        Test();
    });

    const [desc, setDesc] = useState("What do you need to do?");
    const [category_list, setCategory_list] = useState(" ");
    const [due_date_list, setDueDate] = useState(yyyy+'-'+mm+'-'+dd);
    const [delete_arr,setDelete_arr] = useState([]);

    const handeldesc = (e) => {
        setDesc(e.target.value);
    }

    const handelcategory_list = (e) => {
        setCategory_list(e.target.value);
    }

    const handelDue_date = (e) => {
        setDueDate(e.target.value);
    }

    const handel_submit_todo = (e) => {
        e.preventDefault();
        dispatch(sendingToServer(desc, category_list, due_date_list));
        setDesc("What do you need to do?");
        setDueDate(yyyy+'-'+mm+'-'+dd);
        setCategory_list(" ");
    }

    const handel_delete = (e)=>{
        e.preventDefault();

        let test = "?"

        for(let i of delete_arr){
           test+="id="+i+"&";
        }
        dispatch(deletingDataFromServer(test));
    }

    const select_delete_item = (e)=>{
        // console.log(e.target.checked, e.target.value);
        let newArray;
        if(!e.target.checked){
             newArray = delete_arr.filter((currVal,index)=>{
                return e.target.value!==currVal;
            });
            setDelete_arr([...newArray]);            
        }else{
        setDelete_arr([...delete_arr,e.target.value]);
        }



    }

    return (
        <div className="container">



            <h2>TODO APP</h2>

            <form id="add_task">
                <div className="description">
                    <label htmlFor="desc">DESCRIPTION</label>
                    <input type="text" name="desc" id="desc" value={desc} onChange={handeldesc} />
                </div>

                <div className="category_and_due_date">
                    <div className="category">
                        <label htmlFor="category_list">CATEGORY</label>
                        <select name="category_list" id="category_list" value={category_list} onChange={handelcategory_list}>
                            <option value="">Choose a category</option>
                            <option value="school">School</option>
                            <option value="work">work</option>
                        </select>
                    </div>

                    <div className="due_date">
                        <label htmlFor="due_date_list">Due Date:</label>
                        <input type="date" id="due_date_list" name="due_date_list" value={due_date_list} onChange={handelDue_date} required/>
                    </div>

                </div>
                <div id="add_btn">
                    <button className="btn-class" onClick={handel_submit_todo}>
                        <i className="fas fa-plus"></i>&nbsp;ADD TASK</button>
                </div>

            </form>

            <form id="to_do_list_container">

                <div id="delete_btn">
                    <button className="btn-class" onClick={handel_delete} style={{ backgroundColor: "#EE351E" }}>
                        <i className="far fa-trash-alt"></i>&nbsp;DELETE TASK</button>
                </div>




                {List.todo_success&&List.list.map((items,index) => {
                    return <div className="show_list" key={`list-${index}`}>

                    <div className="list-content">
                        <input type="checkbox" name="delete_check" value={items._id} onChange = {select_delete_item}/>

                        <div className="list_text">
                            <h3>{items.desc}</h3>
                            <span><i className="far fa-calendar-alt"></i>&nbsp; &nbsp; {items.due_date_list}</span>
                        </div>
                    </div>
                    <div className="category_btn">
                        <span>{items.category_list}</span>
                    </div>
                </div>
                })}

            </form>




        </div>



    );
}

export default Todo;