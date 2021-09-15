import { gql } from '@apollo/client';

export const CREATE_TODO = gql`
mutation CreateTodo($userId:Int!, $title:String!, $status:String!){
    createTodo(userId: $userId, title: $title, status: $status){
      id,
      userId
      title,
      status
    }
  }
`

export const UPDATE_TODO = gql`
mutation UpdateTodo($id: Int!, $status: String!){
    updateTodo(id: $id, status: $status){
        id,
        userId,
        title,
        status
    }
}
`