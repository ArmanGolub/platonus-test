import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Todo from "../types/todo";

const mainUrl : string = `http://localhost:3001`

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({baseUrl: mainUrl}),
    tagTypes: ['Todos'],
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => ({
                url: `/todo`,
            }),
            providesTags: result => ['Todos']
        }),
        addTodos: builder.mutation<Todo, Todo>({
            query: (todo: Todo) => ({
                url: 'todo',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todos']

        }),
        updateTodos: builder.mutation<Todo, Todo>({
            query: (todo: Todo) => ({
                url: `todo/${todo.id}`,
                method: 'PUT',
                body: todo
            }),
            invalidatesTags: ['Todos']
        }),
        deleteTodos: builder.mutation<Todo, string>({
            query: (id: string) => ({
                url: `todo/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todos']
        }),
  
    })
})

export const {useGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation, useUpdateTodosMutation} = todoApi