import { gql } from '@apollo/client';

export const TODO_FRGAMENT = gql`
fragment todoFragment on Todo{
   id,
   userId,
   status,
   title
 }
`
export const LOAD_TODOS = gql`
  query GetAllTodos {
     getAllTodos{
       ...todoFragment
  }
}
  ${TODO_FRGAMENT}
`
