import React, { FC, useState } from 'react';
import List from '../../components/home/listTodos';
import AddTodo from '../../components/home/addTodos';
const Home: FC = ()=>{
  const [visible, setVisible] = useState<boolean>(false);
  return(
      <div>
          <List setVisible={ setVisible }/>
          <AddTodo visible={ visible } setVisible={ setVisible }/>
      </div>
  )
}

export default Home;