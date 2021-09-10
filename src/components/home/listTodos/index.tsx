import React, { FC, useContext, useState, useEffect } from 'react';
import { TodosContext } from '../../../context/todosContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from 'antd';

import './style.scss';


interface StateType  { 
    userId: number,
    id: number,
    title: string,
    status: | 'pending' | 'done' | 'in-progress'
};



const ListTodos: FC<{ setVisible:(value: boolean)=> void }> = ({setVisible})=>{
    const {state, dispatch} = useContext(TodosContext);
    const [data, setData] = useState<{pending:StateType[], onGoing:StateType[], done:StateType[]}>({pending:[], onGoing:[], done:[]});
    // const grid = 8;
    
    useEffect(() => {
        setData({
          pending: state.filter(item=> item.status === 'pending'),
          onGoing: state.filter(item=> item.status === 'in-progress'),
          done: state.filter(item=> item.status === 'done')
        });
    }, [state]);
    
 
    const getListStyle = (isDraggingOver:any) => ({
        background: isDraggingOver ? 'lightblue' : '#e0e8e7',
        // padding: grid
    });
   
    const onDragEnd = (result:any)=>{
       const { source, destination} = result;
       if(!destination){
           return;
       };
       if(source.droppableId === destination.droppableId){
           return;
       }
       else{
            const i:string = source.droppableId
            const newData:any = data;
            const item:StateType = newData[i][source.index];

            //change state when drop
            dispatch({type: 'UPDATE_TODO', payload:{...item, status: destination.droppableId !== 'onGoing' ? destination.droppableId : 'in-progress'}});

       }
    }
    return(
        <div className='todos__main__container'>
            <div className='todos__title__container'>
                <span> Todo </span> 
                <span> In-progress </span> 
                <span> Done </span>
            </div>
        <div className='todos__list__container'>
        <DragDropContext onDragEnd={ onDragEnd } >
          <Droppable droppableId="pending">
              {(provided, snapshot)=>(
                  <div ref={provided.innerRef} className='todo__droppable__container' style={getListStyle(snapshot.isDraggingOver)} >
                      {
                          data.pending.map((item, index)=>{
                              return(
                                  <Draggable  key={ item.id } draggableId={ String(item.id)} index={ index }>
                                      {(provided,snapshot )=>(
                                          <div className='todo__task notSelect' ref={ provided.innerRef } { ...provided.draggableProps } {...provided.dragHandleProps} >
                                             <label htmlFor=''> {item.title} </label>
                                         </div>
                                      )}
                                  </Draggable>
                              )
                          })
                      }
                    {provided.placeholder}
                  </div>
              )}
          </Droppable>
          <Droppable droppableId="onGoing">
              {(provided, snapshot)=>(
                  <div ref={provided.innerRef} className='todo__droppable__container'  style={getListStyle(snapshot.isDraggingOver)}>
                      {
                          data.onGoing.map((item, index)=>{
                              return(
                                  <Draggable  key={ item.id } draggableId={ String(item.id)} index={ index }>
                                      {(provided,snapshot )=>(
                                          <div className='todo__task notSelect' ref={ provided.innerRef } { ...provided.draggableProps } {...provided.dragHandleProps} >
                                                <label htmlFor=''> {item.title} </label>
                                         </div>
                                      )}
                                  </Draggable>
                              )
                          })
                      }
                    {provided.placeholder}
                  </div>
              )}
          </Droppable>
          <Droppable droppableId="done">
              {(provided, snapshot)=>(
                  <div ref={provided.innerRef} className='todo__droppable__container'  style={getListStyle(snapshot.isDraggingOver)}>
                      {
                          data.done.map((item, index)=>{
                              return(
                                  <Draggable  key={ item.id } draggableId={ String(item.id)} index={ index }>
                                      {(provided,snapshot )=>(
                                          <div className='todo__task notSelect' ref={ provided.innerRef } { ...provided.draggableProps } {...provided.dragHandleProps} >
                                              <label>{item.title}</label>
                                         </div>
                                      )}
                                  </Draggable>
                              )
                          })
                      }
                    {provided.placeholder}
                  </div>
              )}
          </Droppable>
        </DragDropContext>
        </div>
           <Button type="primary" onClick={()=>{setVisible(true)}} className='todo__add__btn'>Add</Button>
        </div>
    )
}
export default ListTodos;