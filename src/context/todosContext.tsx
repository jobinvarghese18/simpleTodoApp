import React, { createContext, useReducer } from 'react';
import { Todo } from '../types/generated';

const initialState: Todo[] = [{
    userId: 1,
    id: 1,
    title: "",
    status: 'pending'
}];


;
type ActionType = | { type:'ADD_TODO', payload:Todo } 
| { type:'UPDATE_TODO', payload: Todo } 
| {type:'LOAD_TODO', payload:Todo[]};

interface todosProviderProps {
    children: React.ReactNode
};

const reducer = (state : Todo[]  = initialState, action:ActionType) =>{
  switch(action.type){
      case 'LOAD_TODO':{
          return action.payload;
      }
      case 'ADD_TODO':{
          return [...state, action.payload]
      }
      case 'UPDATE_TODO':{
        return state.map(ele=>{
            if(ele.id === action.payload.id){
               return Object.assign({},ele,action.payload);
            }
            else{
                return Object.assign({},ele);
            }
        });
      }
      default:{
          return initialState;
      }
  };
};

const TodosContext = createContext<{
    state: Todo[],
    dispatch: React.Dispatch<ActionType>
}>({ state: initialState, dispatch:()=>{}});


const TodosValueProvider = ({ children }: todosProviderProps)=> {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <TodosContext.Provider value={{ state, dispatch }}>
        {children}
      </TodosContext.Provider>
    );
};

export{ TodosContext, TodosValueProvider};