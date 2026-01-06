import { createStore } from "redux";

const initialState = [];

const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "update":
      return state.map((eachTodo) =>{
        if(eachTodo.id === action.payload.id){
          return {...eachTodo, isCompleted: !eachTodo.isCompleted};
        }
        return eachTodo
      });
    case "delete":
      return state.filter((eachTodo) => eachTodo.id !== action.payload.id);
    case "reset":
      return state;
  }
  
};

const store =  createStore(storeReducer)

export default store