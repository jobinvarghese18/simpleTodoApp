import React, { createContext, useReducer } from 'react';
import { data } from '../utilities/mockData';

interface StateType  { 
    userId: number,
    id: number,
    title: string,
    status: | 'pending' | 'done' | 'in-progress'
};
const initialState:StateType[] = data;


;
type ActionType = | { type:'ADD_TODO', payload:StateType } | { type:'UPDATE_TODO', payload: StateType };

interface todosProviderProps {
    children: React.ReactNode
};

const reducer = (state : StateType[]  = initialState, action:ActionType) =>{
  switch(action.type){
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
    state: StateType[],
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