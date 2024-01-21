import React from 'react'
import TodoItem from './TodoItem'
import { useAppSelector } from '../../../hooks';
import { useState } from 'react';
import Todo from '../../../types/todo';
import { todoApi } from '../../../api/todoApi';

type Props = {}

const TodoItems = (props: Props) => {
    const { data: todos, error, isLoading, refetch } = todoApi.useGetTodosQuery()


    return (
        <div>
            {todos && todos.map(item => { return (<TodoItem todo={item} key={item.id}></TodoItem>) })}
        </div>
    )
}

export default TodoItems