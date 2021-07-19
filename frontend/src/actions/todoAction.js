import { ADD_TODO, GET_TODO,DELETE_TODO } from './actionsType';
import { getFormBody } from "../helper/utils";

export const addTodo = ()=>{
    return{
        type:ADD_TODO,      
     }
}

export const deleteTodo = ()=>{
    return{
        type:DELETE_TODO,      
     }
}

export const getTodo = (list)=>{
    return{
        type:GET_TODO,
        list:list     
     }
}

export const gettingDataFromServer = ()=>{
    return(dispatch)=>{

        const url = "http://localhost:8000";
        fetch(url)
        .then(res=>res.json())
        .then(data=>{

            dispatch(getTodo(data.todo));
        })

    }
}

export const deletingDataFromServer = (string)=>{
    return(dispatch)=>{

        const url = `http://localhost:8000/delete_work/${string}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
             
            dispatch(deleteTodo());
            dispatch(gettingDataFromServer());
        })

    }
}

export const sendingToServer = (desc,category_list,due_date_list)=>{
    return (dispatch)=>{
        const url = "http://localhost:8000/add_work";
        fetch(url,{
            method:'POST',
            headers:{
                'Content-type':'application/x-www-form-urlencoded'
            },
            body:getFormBody({desc,category_list,due_date_list})
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("data ",data);
            dispatch(addTodo());
            dispatch(gettingDataFromServer());

        })

    }
}


