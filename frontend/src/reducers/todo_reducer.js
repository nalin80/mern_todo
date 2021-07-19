import {ADD_TODO,DELETE_TODO,GET_TODO} from '../actions/actionsType';

const initialState = {
    todo_success:false,
    todo_delete:false,
    list:[]
};

const todoReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD_TODO:
        return {
            ...state,
            todo_success:true,
            todo_delete:false,
        } 
        case DELETE_TODO:
            
        return {
            todo_success:false,
            todo_delete:true,
        } 

        case GET_TODO:

        return {
            ...state,
            list:action.list,
            todo_success:true,
            todo_delete:false,
        }                        
        default: return state 
    }

}

export default todoReducer;