import React, { FC, useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { Input, Button, Menu, Dropdown } from 'antd';
import { TodosContext } from '../../../context/todosContext';
import {CREATE_TODO} from '../../../GraphQL/Mutations.graphql';
import { CreateTodoMutation, Todo } from '../../../types/generated';
import './style.scss';

interface StateType  { 
    userId: number,
    id: number,
    title: string,
    status: | 'pending' | 'done' | 'in-progress' 
};

const AddTodo: FC <{visible:boolean, setVisible:(value: boolean) => void;}> = ({ visible, setVisible })=>{

const { dispatch}= useContext(TodosContext);
const [data, setData] = useState<StateType>({id:0,userId: 1,title: '',status: 'pending'});
const [createTodo] = useMutation<CreateTodoMutation>(CREATE_TODO, {
    onCompleted({createTodo}) {
        dispatch({type:'ADD_TODO', payload: createTodo as Todo});
    }
});


const handleClick = ({ key }:{key: any}) => {
    setData({...data, 'status': key});
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setData({...data, title:e.target.value}); 
};

const handleAddTodo = ()=>{
    createTodo({
        variables:{
            "userId":1,
            "title": data.title,
            "status":  data.status
        }
    });
    setVisible(false);
}
    
 const menu = (
    <Menu onClick={handleClick}>
        <Menu.Item key='pending'>
        <span> Pending</span>
        </Menu.Item>

        <Menu.Item key='in-progress'>
        <span> In-progress </span>
        </Menu.Item>

        <Menu.Item key='done'>
        <span> Completed</span>
        </Menu.Item>
    </Menu>
 );
    return(
        visible ?
        <div className='add__todo__form'>
            <h3> Add Task</h3>
            <Input onChange={handleChange} placeholder="Enter title" value={data?.title} />

            <Dropdown overlay={menu} className='todos__status__dropdown' placement="bottomCenter">
              <Button className='todo__from__dropdownbtn'> {data?.status} </Button>
            </Dropdown>
            
            <Button type="primary" onClick={ handleAddTodo } className='todo__from__addbtn'>ADD</Button>
            <Button className='todo__from__closebtn' onClick={()=>{setVisible(false)}}>CLOSE</Button>

        </div>
        : null
    )
};
export default AddTodo;