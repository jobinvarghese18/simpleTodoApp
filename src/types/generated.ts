export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo?: Maybe<Todo>;
  updateTodo?: Maybe<Array<Maybe<Todo>>>;
};


export type MutationCreateTodoArgs = {
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};


export type MutationUpdateTodoArgs = {
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  getAllTodos?: Maybe<Array<Maybe<Todo>>>;
};


export type RootQueryTypeGetAllTodosArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type Todo = {
  __typename?: 'Todo';
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type CreateTodoMutationVariables = Exact<{
  userId: Scalars['Int'];
  title: Scalars['String'];
  status: Scalars['String'];
}>;


export type CreateTodoMutation = { __typename?: 'Mutation', createTodo?: Maybe<{ __typename?: 'Todo', id?: Maybe<number>, userId?: Maybe<number>, status?: Maybe<string>, title?: Maybe<string> }> };

export type UpdateTodoMutationVariables = Exact<{
  id: Scalars['Int'];
  status: Scalars['String'];
}>;


export type UpdateTodoMutation = { __typename?: 'Mutation', updateTodo?: Maybe<Array<Maybe<{ __typename?: 'Todo', id?: Maybe<number>, userId?: Maybe<number>, status?: Maybe<string>, title?: Maybe<string> }>>> };

export type TodoFragmentFragment = { __typename?: 'Todo', id?: Maybe<number>, userId?: Maybe<number>, status?: Maybe<string>, title?: Maybe<string> };

export type GetAllTodosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTodosQuery = { __typename?: 'RootQueryType', getAllTodos?: Maybe<Array<Maybe<{ __typename?: 'Todo', id?: Maybe<number>, userId?: Maybe<number>, status?: Maybe<string>, title?: Maybe<string> }>>> };
