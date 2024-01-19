import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Todo from '../types/todo'

interface ITodoState {
  todos: Todo[]
}

const initialState = { todos: [{id:1, text: "lorem", completed: false}] } as ITodoState

const todoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTodo(state, action) {
        state.todos = action.payload.todos
    },
    addTodo(state, action) {
        state.todos.push({
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        });
    },
    toggleComplete(state, action) {
        const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
        if (toggledTodo) {
            toggledTodo.completed = !toggledTodo.completed;
        }
        else {
            throw new Error("There is not todo with current id")
        }
    },
    removeTodo(state, action) {
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    }

  },
})

export const {setTodo, addTodo, toggleComplete, removeTodo} = todoSlice.actions;
export default todoSlice.reducer