import { gql } from '@apollo/client';
import { TODO_FRGAMENT } from './Quaries.graphql';

export const CREATE_TODO = gql`
mutation CreateTodo($userId:Int!, $title:String!, $status:String!){
    createTodo(userId: $userId, title: $title, status: $status){
      ...todoFragment
    }
  }
  ${TODO_FRGAMENT}
`

export const UPDATE_TODO = gql`
mutation UpdateTodo($id: Int!, $status: String!){
    updateTodo(id: $id, status: $status){
        ...todoFragment
    }
}
${TODO_FRGAMENT}
`