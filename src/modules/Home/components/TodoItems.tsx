import React from 'react'
import TodoItem from './TodoItem'
import { useAppSelector } from '../../../hooks';
import { useState } from 'react';
import Todo from '../../../types/todo';
import { todoApi } from '../../../api/todoApi';

type Props = {}

const TodoItems = (props: Props) => {
    const [deleteTodos, {}] = todoApi.useDeleteTodosMutation()

    // const storetodos = useAppSelector(state => state.todos.todos);
    const {data: todos, error, isLoading, refetch} =  todoApi.useGetTodosQuery()
    const handleRemove = (todo: Todo) => {
        // todos?.findIndex((element, index) => {
        //     if (element.id == todo.id){
        //         deleteTodos(index)
        //     } 
        // })
        deleteTodos(todo.id)
    }

    return (        
        <div>
            {todos && todos.map(item => {return (<TodoItem todo={item} handleRemove={handleRemove} key={item.id}></TodoItem>)})}
        </div>  
    )
}

export default TodoItems